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
    if (message)
      setMessages((current) => [
        ...current,
        { Author: "Me", MessageContent: message },
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

  //TODO: optimize chat size for mobiles
  return (
    <div className="container mx-auto px-4 flex-col flex z-10 sm:w-3/5 h-1/2">
      <h2 className="items-center text-center text-2xl mb-3">
        Messaging with Dad
      </h2>
      <div
        className="overflow-y-auto h-full flex flex-col overflow-x-hidden"
        ref={chatBoxRef}
      >
        {renderMessagesLsit(messages)}
      </div>
      <ChatInputField onSubmit={onChatMessageSubmit}></ChatInputField>
    </div>
  );
}

export default DadChat;
