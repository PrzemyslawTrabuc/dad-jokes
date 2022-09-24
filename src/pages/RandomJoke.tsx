import { useEffect, useState, useRef } from "react";
import Title from "../components/Title";

const DadJokeButtonTexts = ["OMG Dad...", "Dad pls...", "WTF Dad!", "OK."];

function RandomJoke() {
  const [dadJoke, setDadJoke] = useState<number | null>(null);
  const jokeRef = useRef<HTMLSpanElement | null>(null);

  const getRandomJokes = async () => {
    jokeRef.current?.classList.add("animate-spin");
    document.body.style.overflow = "hidden";
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setDadJoke(data.joke);
    setTimeout(() => {
      jokeRef.current?.classList.remove("animate-spin");
      document.body.style.overflow = "auto";
    }, 850);
  };

  const getRandomButtonText = (items: Array<string>) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  useEffect(() => {
    getRandomJokes();
  }, []);

  return (
    <>
      <Title title="Dad Joke" />
      <div className="text-center h-auto flex items-center flex-col justify-evenly text-xl mt-2">
        <span ref={jokeRef} className="mx-10 min-h-[200px] flex items-center">
          {dadJoke}
        </span>
        <button
          onClick={getRandomJokes}
          className="dark:bg-fuchsia-800 min-w-[150px] p-3 mt-5 rounded dark:hover:bg-fuchsia-700 animate-bounce bg-fuchsia-300 hover:bg-fuchsia-200"
        >
          {getRandomButtonText(DadJokeButtonTexts)}
        </button>
      </div>
    </>
  );
}

export default RandomJoke;
