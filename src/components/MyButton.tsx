import { ReactNode } from "react";

interface ImyButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string | ReactNode;
  isFloating: boolean;
  classes?: string;
}
function MyButton({
  handleClick,
  buttonText,
  isFloating,
  classes,
}: ImyButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`dark:bg-fuchsia-800 w-auto] p-3 rounded-2xl dark:hover:bg-fuchsia-700 dark:text-zinc-200 text-zinc-700 bg-fuchsia-200 hover:bg-fuchsia-100 h-auto text-center ${classes} ${
        isFloating ? "animate-bounce" : ""
      }`}
    >
      {buttonText}
    </button>
  );
}
export default MyButton;
