import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { router } from "./routes/routes.ts";

await serve(router);
