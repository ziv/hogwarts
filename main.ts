import { serve } from "https://deno.land/std@0.167.0/http/server";


serve((req: Request) => new Response("Hello World 1"));
