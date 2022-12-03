export function url(req: Request) {
  return new URL(req.url);
}

export function qs(search: string) {
  return new URLSearchParams(search);
}

const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
};

export const json = (data: unknown) =>
  new Response(JSON.stringify(data), { headers });

export const notFound = () => new Response("not implemented", { status: 404 });
