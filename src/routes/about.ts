import { text } from '../utils.ts';

const ABOUT = `
An example API for web development students

/wands          List of wands
/wands/length   List of district wand length
/wands/core     List of district wand core
/wands/wood     List of district wand wood
/about          This text

`;
export default function about(_: Request) {
    return text(ABOUT);
}
