# Modified OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs)
<br/>
The template for this application was cloned from the repository via https://github.com/openai/openai-assistants-quickstart and modified. 

## Summary
The template was modified to allow users to access different assistants via the home page.

Home page:
![Skærmbillede (176)](https://github.com/user-attachments/assets/34bee224-e725-43f7-94b9-4fd3da91bdbd)

The five different categories have been created to target to train different aspects of language in Danish, however can also reply in other languages because of the model being multilingual.

### Categories:



https://github.com/user-attachments/assets/ddabc967-c7b1-420d-b9ca-52e551986601



https://github.com/user-attachments/assets/342a3992-9082-4a18-81f8-4b27d91a5fa4



https://github.com/user-attachments/assets/5f8e2fef-c943-422f-82d9-d1cf0f2c8e88



https://github.com/user-attachments/assets/b9fb84c3-13b9-4a16-acd0-7807d28c395d



https://github.com/user-attachments/assets/cadeefd9-d246-45d0-b674-3ecab9833ae1








## Setup
### 1. Clone repo

```shell
git clone https://github.com/triboli/afasimakker.git
cd afasimakker
```
### 2. Set your OpenAI API key
Create an [OpenAI API key](https://platform.openai.com/api-keys) key on your personal account on the OpenAI platform. Create then a file in the project named `.env` and add the OpenAI API key following the below syntax. 

```shell
OPENAI_API_KEY="INSERT KEY"
```

### 3. Integrate assistants

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

(Beware that if an error occurs when trying to install the depedency, navigate to the webiste of [Node.js](https://nodejs.org/en) to download the package manually.)

### 5. Run

```shell
npm run dev
```

### 6. Navigate to [http://localhost:3000](http://localhost:3000).

## Overview (Modified documentation from [OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/))

This project is intended to serve as a template for using the Assistants API in Next.js with [streaming](https://platform.openai.com/docs/assistants/overview/step-4-create-a-run). 

The main logic for chat will be found in the `Chat` component in `app/components/chat.tsx`, and the handlers starting with `api/assistants/threads` (found in `api/assistants/threads/...`). Feel free to start your own project and copy some of this logic in! The `Chat` component itself can be copied and used directly, provided you copy the styling from `app/components/chat.module.css` as well.

### Pages

- Basic Chat Example: [http://localhost:3000/examples/basic-chat](http://localhost:3000/examples/basic-chat)

### Main Components

- `app/components/chat.tsx` - handles chat rendering, [streaming](https://platform.openai.com/docs/assistants/overview?context=with-streaming)

### Endpoints

- `api/assistants` - `POST`: create assistant (only used at startup)
- `api/assistants/threads` - `POST`: create new thread
- `api/assistants/threads/[threadId]/messages` - `POST`: send message to assistant
- `api/assistants/threads/[threadId]/actions` - `POST`: inform assistant of the result of a function it decided to call
- `api/assistants/files` - `GET`/`POST`/`DELETE`: fetch, upload, and delete assistant files for file search
