import { useEffect, useState } from "react";
import Title from "../components/Title";

function RandomJoke() {
  const [dadJokesCount, setDadJokesCount] = useState<number | null>(null);
  const getRandomJokes = async () => {
    const response = await fetch(
      "https://dad-jokes.p.rapidapi.com/joke/count",
      {
        headers: {
          "X-RapidAPI-Key":
            "6bc20974eamshab178251bbf4d6dp1ccf5ejsn15ea6633a3e8",
          "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        },
        method: "GET",
      }
    );
    const data = await response.json();
    setDadJokesCount(data.body);
  };

  useEffect(() => {
    getRandomJokes();
  }, []);

  return (
    <>
      <Title title="Dad Joke" />
      <div>Dad Jokes count {dadJokesCount}</div>
    </>
  );
}

export default RandomJoke;
