import { contact } from "@/content/site";

export const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

function labelize(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

/** Opens a prefilled mailto when Formspree is not configured. */
export function mailtoEnquiry(data: FormData, subject: string) {
  const grouped = new Map<string, string[]>();

  for (const [key, value] of data.entries()) {
    if (key.startsWith("_")) continue;
    const text = String(value).trim();
    if (!text) continue;
    const existing = grouped.get(key) ?? [];
    existing.push(text);
    grouped.set(key, existing);
  }

  const body = [...grouped.entries()]
    .map(([key, values]) => `${labelize(key)}: ${values.join(", ")}`)
    .join("\n");

  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function postEnquiry(data: FormData): Promise<void> {
  if (!formspreeEndpoint) {
    throw new Error("Formspree endpoint is not configured");
  }

  const response = await fetch(formspreeEndpoint, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
}
