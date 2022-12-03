import { core, length, wands, wood } from "./wands.ts";
import about from "./about.ts";
import { notFound, url } from "../utils.ts";

export type Route = (req: Request) => Response | Promise<Response>;
export type Routes = Record<string, Route>;

const ROUTES: Routes = {
  "/wands/wood": wood,
  "/wands/core": core,
  "/wands/length": length,
  "/wands": wands,
  "/about": about,
};

export function router(req: Request) {
  return (ROUTES[url(req).pathname] ?? notFound)(req);
}
