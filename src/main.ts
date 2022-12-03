import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { wands } from "./wands.ts";

const headers = {
  "content-type": "application/json",
};

const json = (data: unknown) => new Response(JSON.stringify(data), { headers });

serve((req: Request) => json(wands())).catch((e) => console.log("Error", e));
