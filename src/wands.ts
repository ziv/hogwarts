import { data, Wand } from "./data.ts";

export function wands(query: Partial<Wand> = {}) {
  const constrains = Object.entries(query);
  console.log(constrains);
  // const constrains: { [keyof Wand]: string }[] = Object.entries(query);
  return data(); // .filter(item => constrains.every(([k, v]) => item[k] === v));
}
