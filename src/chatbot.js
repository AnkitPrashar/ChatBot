
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendmsg(message) {
  const chat = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    max_tokens: 256,
    temperature: 0.7,
  });

  return chat.choices[0].message.content;

}