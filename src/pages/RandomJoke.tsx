import { useEffect, useState, useRef } from "react";
import Title from "../components/Title";
import { fetchRandomJoke } from "../utils/fetchRandomJoke";
import MyButton from "../components/MyButton";

const DadJokeButtonTexts = ["OMG Dad...", "Dad pls...", "WTF Dad!", "OK."];

function RandomJoke() {
  const [dadJoke, setDadJoke] = useState<string | null>(null);
  const jokeRef = useRef<HTMLSpanElement | null>(null);

  const getRandomJoke = async () => {
    jokeRef.current?.classList.add("animate-spin");
    document.body.style.overflow = "hidden";
    const joke = await fetchRandomJoke();
    setDadJoke(joke);
    setTimeout(() => {
      jokeRef.current?.classList.remove("animate-spin");
      document.body.style.overflow = "auto";
    }, 850);
  };

  const getRandomButtonText = (items: Array<string>) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <>
      <Title title="Dad Joke" />
      <div className="text-center h-auto flex items-center flex-col justify-evenly text-xl mt-2">
        <span
          ref={jokeRef}
          className="mx-10 min-h-[200px] flex items-center mb-5"
        >
          {dadJoke}
        </span>
        {/* <button
          onClick={getRandomJoke}
          className="dark:bg-fuchsia-800 min-w-[150px] p-3 mt-5 rounded dark:hover:bg-fuchsia-700 animate-bounce bg-fuchsia-300 hover:bg-fuchsia-200"
        >
          {getRandomButtonText(DadJokeButtonTexts)}
        </button> */}
        <MyButton
          handleClick={getRandomJoke}
          buttonText={getRandomButtonText(DadJokeButtonTexts)}
          isFloating={true}
          classes={"min-w-[150px]"}
        ></MyButton>
      </div>
    </>
  );
}
export default RandomJoke;
