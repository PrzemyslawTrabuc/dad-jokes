export interface IMessageProps {
  Author: "Dad" | "Me";
  MessageContent: string;
}

function Message({ Author, MessageContent }: IMessageProps) {
  return (
    <div
      className={`break-words border-solid p-4 border-[1.5px] rounded-3xl max-w-full flex mb-2 drop-shadow-md ${
        Author === "Dad"
          ? "self-start slideLeftText border-amber-400 dark:border-amber-300"
          : "self-end border-fuchsia-400 dark:border-fuchsia-800 slideRightText"
      }`}
    >
      <p className="shadow-none">{MessageContent}</p>
    </div>
  );
}
export default Message;
