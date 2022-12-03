const ABOUT = `
An example API for web development students

`;
export default function about() {
  return new Response(ABOUT, { headers: { "content-type": "text/plain" } });
}
