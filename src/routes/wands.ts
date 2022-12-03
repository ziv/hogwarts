import { data, Wand } from "../data.ts";
import { json, url } from "../utils.ts";

type Constrains = [keyof Wand, string][];

const getConstrains = (req: Request) =>
  Array.from(new URLSearchParams(url(req).search).entries()) as Constrains;

const getFilter = (constrains: Constrains) => (item: Wand) =>
  constrains.every(([k, v]) => item[k] === v);

const distinct = (key: keyof Wand) =>
  json([...new Set(data().map((item) => item[key]))]);

export function core(_: Request) {
  return distinct("core");
}

export function wood(_: Request) {
  return distinct("wood");
}

export function length(_: Request) {
  return distinct("length");
}

export function wands(req: Request) {
  return json(data().filter(getFilter(getConstrains(req))));
}
