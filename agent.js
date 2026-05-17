import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { calculate } from "./tools.js"

export async function runAgent(message) {
  const { text } = await generateText({
    model: google("gemini-3-pro-preview", { useSearchGrounding: true }),
    system: "You are a helpful research assistant.",
    messages: [{ role: "user", content: message }],
    tools: { calculate },
    maxSteps: 3
  })

  return text;
}