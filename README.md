# Modified OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs).
<br/>
The template for this applicaiton was cloned from [OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/) and modified. 

## Setup
### 1. Clone repo

```shell
git clone https://github.com/triboli/afasimakker.git
cd openai-assistants-quickstart
```
### 2. Set your OpenAI API key
Create an [OpenAI API key](https://platform.openai.com/api-keys) key on your personal account on the OpenAI platform. Then add then OpenAI API key to `.env.example` and rename it to `.env`

```shell
OPENAI_API_KEY="INSERT KEY"
```

### 2. Integrate assistants

Either create assistants with the desired instructions, model, etcetera in `create-assistants.py` or do this manually on your own personal account on [OpenAI platform](https://platform.openai.com/playground/assistants). Now add these assistantIds to the file path `app\api\assistants\threads\[threadId]\messages\route.ts` 

(Beware that the code currently is set up to have five assistants with different instructions. If another amount of assistants is wanted, remember to add more to below code snippet by continuing the switch, add a specific folder for this category in app\categories in which the correct assistantNo is set, and lastly add this category to the home page in app\page.tsx) 

```shell
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
```

### 4. Install dependencies

```shell
npm install
```

### 4. Run

```shell
npm run dev
```

### 5. Navigate to [http://localhost:3000](http://localhost:3000).

## Overview (Modified documentation from [OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/))

This project is intended to serve as a template for using the Assistants API in Next.js with [streaming](https://platform.openai.com/docs/assistants/overview/step-4-create-a-run). 

The main logic for chat will be found in the `Chat` component in `app/components/chat.tsx`, and the handlers starting with `api/assistants/threads` (found in `api/assistants/threads/...`). Feel free to start your own project and copy some of this logic in! The `Chat` component itself can be copied and used directly, provided you copy the styling from `app/components/chat.module.css` as well.

### Pages

- Basic Chat Example: [http://localhost:3000/examples/basic-chat](http://localhost:3000/examples/basic-chat)

### Main Components

- `app/components/chat.tsx` - handles chat rendering, [streaming](https://platform.openai.com/docs/assistants/overview?context=with-streaming), and [function call](https://platform.openai.com/docs/assistants/tools/function-calling/quickstart?context=streaming&lang=node.js) forwarding

### Endpoints

- `api/assistants` - `POST`: create assistant (only used at startup)
- `api/assistants/threads` - `POST`: create new thread
- `api/assistants/threads/[threadId]/messages` - `POST`: send message to assistant
- `api/assistants/threads/[threadId]/actions` - `POST`: inform assistant of the result of a function it decided to call
- `api/assistants/files` - `GET`/`POST`/`DELETE`: fetch, upload, and delete assistant files for file search
