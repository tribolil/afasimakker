# run pip install vllm in terminal

from vllm import LLM, SamplingParams

sampling_params = SamplingParams(temperature=0.8, top_p=0.95, max_tokens=1024)
llm = LLM(model="mhenrichsen/danskgpt-tiny-chat")

system_message = "Du er en hjælpsom assistent."
conversation_history = f"<|im_start|>system\n{system_message}<|im_end|>\n<|im_start|>user\n"
while True:
    prompt = input("Bruger: ")
    new_prompt = f"{conversation_history}{prompt}<|im_end|>\n<|im_start|>assistant\n"

    outputs = llm.generate(new_prompt, sampling_params)
    for output in outputs:
        prompt = output.prompt
        generated_text = output.outputs[0].text
        print(f"AI: {generated_text!r}")
        conversation_history = f"{prompt}{generated_text!r}<|im_end|>\n<|im_start|>user\n"
