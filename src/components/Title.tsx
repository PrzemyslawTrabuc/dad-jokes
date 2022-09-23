import React from "react";

interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  return (
    <h1 className="text-black dark:text-white text-center">
      Welocme to <span className="text-amber-300">{props.title}</span>
    </h1>
  );
}

export default Title;
