import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { IMessageProps } from "./Message";
import { fetchRandomJoke } from "../../utils/fetchRandomJoke";
import ChatInputField from "./ChatInputField";

function DadChat() {
  const [messages, setMessages] = useState<IMessageProps[]>([]);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const joke = await fetchRandomJoke();
      setMessages([{ Author: "Dad", MessageContent: joke }]);
    })();
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) chatBoxRef.current.scroll(0, 9999);
  }, [messages]);

  const onChatMessageSubmit = async (message: string) => {
    if (message && message.trim().length !== 0)
      setMessages((current) => [
        ...current,
        { Author: "Me", MessageContent: message.trimStart().trimEnd() },
      ]);
    const joke = await fetchRandomJoke();
    setMessages((current) => [
      ...current,
      { Author: "Dad", MessageContent: joke },
    ]);
  };

  const renderMessagesLsit = (messages: Array<IMessageProps> | null) => {
    if (messages) {
      let counter = messages.length;
      const listOfMessages = messages.map(({ Author, MessageContent }) => {
        const ID = messages.length - counter;
        counter--;
        return (
          <Message Author={Author} MessageContent={MessageContent} key={ID} />
        );
      });
      return listOfMessages;
    }
  };

  return (
    <div className="container mx-auto px-4 flex-col flex z-10 h-3/4 sm:w-4/5 w-[90%] p-5 dark:bg-[rgba(0,0,0,.2)] bg-[rgba(255,255,255,.6)] rounded-3xl border-[1px] border-amber-400 shadow-inner min-h-[270px] mt-10">
      <h2 className="items-center text-center text-2xl mb-3">
        Messaging with Dad
      </h2>
      <div
        ref={chatBoxRef}
        className="overflow-y-auto h-[100%] flex flex-col overflow-x-hidden"
      >
        {renderMessagesLsit(messages)}
      </div>
      <ChatInputField onSubmit={onChatMessageSubmit}></ChatInputField>
    </div>
  );
}

export default DadChat;
