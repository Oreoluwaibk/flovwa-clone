// utils/pkce.ts
export async function generatePKCE() {
  const randomString = () =>
    Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

  const codeVerifier = randomString();

  const base64urlEncode = (str: ArrayBuffer) =>
    btoa(String.fromCharCode(...new Uint8Array(str)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const codeChallenge = base64urlEncode(digest);

  return { codeVerifier, codeChallenge };
}
