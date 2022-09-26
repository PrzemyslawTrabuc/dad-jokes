interface MessagePropsI {
  Author: "Dad" | "Me";
  MessageContent: string;
}
function Message({ Author, MessageContent }: MessagePropsI) {
  return (
    <div
      className={`border-solid p-4 border-amber-400 dark:border-amber-300 border-[1.5px] rounded-3xl max-w-[50%] flex ${
        Author === "Dad" ? "self-start" : "self-end"
      }`}
    >
      <span>{MessageContent}</span>
    </div>
  );
}
export default Message;
