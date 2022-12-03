import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { wands } from "./wands.ts";
import { json, url } from "./utils.ts";

function router(req: Request): Response {
  const { pathname, search } = url(req);
  switch (pathname) {
    case "/wands":
      return json(wands());

    default:
      return new Response("not implemented", { status: 404 });
  }
}

function errorHandler(e: Error) {
  console.log("Error", e);
}

serve(router).catch(errorHandler);
