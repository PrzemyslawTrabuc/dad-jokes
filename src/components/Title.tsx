import React from "react";

interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  return (
    <h1 className="text-center h-48 sm:h-60 flex items-center flex-wrap flex-col justify-evenly">
      <span className="text-3xl sm:text-6xl">Welocme to</span>
      <span className="text-amber-400 dark:text-amber-300 font-bold sm:text-7xl text-4xl slideUpText titleFirstWord">
        {props.title}
      </span>
    </h1>
  );
}

export default Title;
