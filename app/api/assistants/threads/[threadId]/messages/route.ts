import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content, assistantNo } = await request.json();

  let assistantId = ""; 

// assistantNo are in each file in app\categories. assistantId can be retrieved from terminal when creating the assistants in create-assistants.py
  switch(assistantNo) {
    case "assistant1":
      assistantId = "ADD";
      break;
    case "assistant2":
      assistantId = "ADD";
      break;
    case "assistant3":
      assistantId = "ADD";
      break;
    case "assistant4":
      assistantId = "ADD";
      break;
    case "assistant5":
      assistantId = "ADD";
      break;
    default:
      assistantId = "ADD";
      break;
  }

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}