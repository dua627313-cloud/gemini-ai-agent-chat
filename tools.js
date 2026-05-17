import { tool } from "ai";
import { z } from "zod";
import { evaluate } from "mathjs";
export const calculate = tool({
  description: "Do a math calculation",
  parameters: z.object({
    expression: z.string()
  }),
  execute: async ({ expression }) => {
    const result = evaluate(expression);
    return `${expression} = ${result}`;
  }
});