import { Person } from "./example-module";
import lintStaged from "lint-staged"; 

function sum(x: number, y: number): number {
  return x + y;
}

const x = 100;
const y = "200";
const xPlusY = sum(x, y);

console.log(`${x} + ${y} = ${xPlusY}`);
