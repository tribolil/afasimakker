install:
npm install next 

run app locally:
npm run dev 

irrelavant files removed: 
- page.tsx modified to other units
- file-viewer.module.css and file-viewer.tsx removed in components
- weather-widget.module.css and weather-widget.tsx removed in components
- file-search folder in examples folder removed
- all folder in examples folder removed
- function calling folder in examples folder removed
- utils folder in components folder removed
- files in assistants removed 
- shared folder removed from examples
- file type removed from assistant in route.ts

examples renamed to correspond with names in page.tsx:
- basic-chat renamed to first-chat
- first-chat copied and renamed to second-chat


modified files:
- page.tsx
- assistant-config.ts
- page.tsx (first-chat)
- page.tsx (second-chat)
- layout.tsx
- deleted openai.svg and added conversation.svg
- page.module.css
- page.tsx 
- chat.tsx
- added let assistantId = process.env.assistantId; to route.ts in messages