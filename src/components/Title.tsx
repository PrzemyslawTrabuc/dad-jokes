import React from "react";

interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  return (
    <h1 className="text-center h-60 flex items-center flex-wrap flex-col justify-evenly">
      <span className="text-5xl">Welocme to</span>
      <span className="text-amber-400 dark:text-amber-300 font-bold text-7xl">
        {props.title}
      </span>
    </h1>
  );
}

export default Title;
