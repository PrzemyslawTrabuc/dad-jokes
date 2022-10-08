import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { IMessageProps } from "./Message";
import { fetchRandomJoke } from "../../utils/fetchRandomJoke";
import ChatInputField from "./ChatInputField";

function DadChat() {
  const [messages, setMessages] = useState<IMessageProps[]>([]);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let messagesStorage = localStorage.getItem("Messages");
    if (!messagesStorage)
      (async () => {
        const joke = await fetchRandomJoke();
        setMessages([{ Author: "Dad", MessageContent: joke }]);
      })();
    if (messagesStorage) {
      setMessages(JSON.parse(messagesStorage));
    }
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) chatBoxRef.current.scroll(0, 9999);
    if (messages.length > 0)
      localStorage.setItem("Messages", JSON.stringify(messages));
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
    <>
      <h2 className="items-center text-center text-2xl mb-3">
        Messaging with Dad
      </h2>
      <div
        ref={chatBoxRef}
        className="overflow-y-auto h-full flex flex-col overflow-x-hidden"
      >
        {renderMessagesLsit(messages)}
      </div>
      <ChatInputField onSubmit={onChatMessageSubmit}></ChatInputField>
    </>
  );
}

export default DadChat;
