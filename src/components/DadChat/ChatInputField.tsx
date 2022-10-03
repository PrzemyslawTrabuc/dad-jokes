import { MouseEventHandler, useEffect } from "react";
import MyButton from "../MyButton";
import { useState } from "react";
import { PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

function ChatInputField({ onSubmit }: any) {
  const [message, setMessage] = useState<string>("");
  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
  }
  useEffect(() => {});
  return (
    <form
      onSubmit={handleSubmit}
      className="border-solid w-full border-spacing-4 max-h-[50px] dark:border-fuchsia-800 border-fuchsia-400 mt-5 rounded-2xl flex flex-row justify-between border-[1px] p-0.5 bg-slate-100 dark:bg-zinc-900"
    >
      <input
        className="dark:bg-zinc-900 bg-slate-100 h-full w-full rounded-2xl focus:outline-none p-3 grow"
        type="text"
        name="message"
        onChange={onInputChange}
        value={message}
        placeholder="Type a message..."
      ></input>
      <MyButton
        buttonText={
          message ? (
            <PaperAirplaneIcon className="h-8 inline-block" />
          ) : (
            <ArrowPathIcon className="h-8 inline-block" />
          )
        }
        isFloating={false}
        classes="p-1 min-w-[70px]"
      ></MyButton>
    </form>
  );
}

export default ChatInputField;
