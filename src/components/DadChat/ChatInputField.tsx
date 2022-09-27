import { MouseEventHandler, useEffect } from "react";
import MyButton from "../MyButton";
import { useState } from "react";

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
      className="border-solid border-spacing-4 max-h-[50px] dark:border-fuchsia-800 border-fuchsia-400 border-[1px] mt-5 rounded-2xl flex flex-row justify-between grow"
    >
      <input
        className="dark:bg-zinc-900 bg-slate-100 h-full rounded-2xl w-full mr-[-20px] focus:outline-none p-3"
        type="text"
        name="message"
        onChange={onInputChange}
        value={message}
      ></input>
      <MyButton
        buttonText={message ? "Send" : "Another!"}
        isFloating={false}
      ></MyButton>
    </form>
  );
}

export default ChatInputField;
