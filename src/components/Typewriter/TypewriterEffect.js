import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = (props) => {
  return (
    <Typewriter
      options={{
        strings: [props.title],
        autoStart: true,
        loop: true,
        delay: 200,
        cursor: ".",
        start: 2000,
      }}
    />
  );
};

export default TypewriterEffect;
