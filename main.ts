import { serve } from "https://deno.land/std@0.167.0/http/server.ts";


serve((req: Request) => new Response("Hello World 1"));
