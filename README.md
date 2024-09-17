## A Danish Rehabilitation Tool for People with Aphasia <br/>
This project, named _Afasimakker_ (meaning aphasia buddy in Danish), is based on this [template](https://github.com/openai/openai-assistants-quickstart) and modified. The template uses the OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs). 

### Interface
The template is accessed locally. The template was modified to allow users to access five different categories from the home page, in which each category routes to a specific assistant as seen in the photo below. In `app\page.tsx` the routing to each category is defined.

![Skærmbillede (176)](https://github.com/user-attachments/assets/34bee224-e725-43f7-94b9-4fd3da91bdbd)

### Categories
Five different categories have been created to target to train different aspects of language in Danish, however, other languages are also supported due to the model being multilingual. The five categories were created to target conversation, word naming, comprehension, sentence construction, and roleplay, which can be seen in the videos below. Each category has its own folder in `app\categories` with each category having the file `page.tsx` which defines the assistant and the welcome message.

https://github.com/user-attachments/assets/d59c37eb-a3b4-4a95-a611-79f27ea8d7b4


https://github.com/user-attachments/assets/e3c11e4c-1b3a-4a2c-bc02-67604769e82e


https://github.com/user-attachments/assets/dfde75b5-4751-4a7f-846f-f286ee5d3276


https://github.com/user-attachments/assets/e42d7b36-cb75-4682-9872-65189a6f450c


https://github.com/user-attachments/assets/27637b17-0d60-44dd-ae76-ac34a1ebfd7a

### Setup
Follow the below instructions to set up the project. Below is a video example that demonstrates each step of the process.

https://github.com/user-attachments/assets/69255206-31a7-4933-9680-9dad7db9b5c0


#### 1. Clone or download repository 
Clone the repository or download and open it directly in your development environment. 
```shell
git clone https://github.com/tribolil/afasimakker.git
cd afasimakker
```
#### 2. Set your OpenAI API key
Create an [OpenAI API key](https://platform.openai.com/api-keys) key on your personal account on the OpenAI platform. Create then a file in the project named `.env` and add the OpenAI API key following the below syntax. 

```shell
OPENAI_API_KEY="INSERT KEY"
```

In case the above does not work, add the key as an environment variable directly in the terminal.
```shell
set OPENAI_API_KEY="INSERT KEY"
```

#### 3. Integrate assistants
For the application to run smoothly, assistants must be created. In this case, five assistants have been created with unique instructions and the selected large language model. Each assistant can be configurated to respond to other [parameters](https://platform.openai.com/docs/assistants/quickstart/step-1-create-an-assistant). The assistants can be created in the file `create-assistants.py`, in this case openai has to be installed in the terminal. Alternatively, the assistants can be created manually on your own personal account on [OpenAI platform](https://platform.openai.com/playground/assistants). 

After doing the above, the assistantsIds have to be added to the file path `app\api\assistants\threads\[threadId]\messages\route.ts` to the code snippet below. Each assistantId should substitute ADD. Rememeber that each assistant 

(The code currently is set to have five unique assistants. If another amount of assistants is wanted, remember to add more to below code snippet by continuing the switch in below code snippet, add a specific folder for this category in `app\categories` in which the assistantNo is defined, and lastly add this category to the home page in app\page.tsx) 

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

#### 4. Install dependencies

```shell
npm install
```

(Beware that if an error occurs when trying to install the depedency, navigate to the webiste of [Node.js](https://nodejs.org/en) to download the package manually and restarting the development environment. Then install npm in the terminal again in the terminal)

#### 5. Run

```shell
npm run dev
```

#### 6. Navigate to [http://localhost:3000](http://localhost:3000)

#### 7. Terminate the application typing CTRL+C in terminal

### Overview (Modified documentation from [OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/))

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
