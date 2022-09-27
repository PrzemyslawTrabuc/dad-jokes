interface ImyButtonProps {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  isFloating: boolean;
}
function MyButton({ handleClick, buttonText, isFloating }: ImyButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`dark:bg-fuchsia-800 w-auto] p-3 rounded-2xl dark:hover:bg-fuchsia-700 bg-fuchsia-300 hover:bg-fuchsia-200 ${
        isFloating ? "animate-bounce" : ""
      }`}
    >
      {buttonText}
    </button>
  );
}
export default MyButton;
