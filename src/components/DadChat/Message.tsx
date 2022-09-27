export interface IMessageProps {
  Author: "Dad" | "Me";
  MessageContent: string;
}

function Message({ Author, MessageContent }: IMessageProps) {
  return (
    <div
      className={`break-words border-solid p-4 border-amber-400 dark:border-amber-300 border-[1.5px] rounded-3xl max-w-full flex mb-2 ${
        Author === "Dad"
          ? "self-start"
          : "self-end border-slate-300 dark:border-slate-400"
      }`}
    >
      <p>{MessageContent}</p>
    </div>
  );
}
export default Message;
