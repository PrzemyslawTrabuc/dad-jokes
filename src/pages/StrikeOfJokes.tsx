import Title from "../components/Title";
import DadChat from "../components/DadChat/DadChat";

function StrikeOfJokes() {
  return (
    <>
      <Title title="Dad Attack" />
      <main className="container mx-auto px-4 flex-col flex z-10 h-3/4 sm:w-4/5 w-[90%] p-5 dark:bg-[rgba(0,0,0,.2)] bg-[rgba(255,255,255,.6)] rounded-3xl border-[1px] border-amber-400 shadow-inner min-h-[270px] mt-10">
        <DadChat></DadChat>
      </main>
    </>
  );
}

export default StrikeOfJokes;
