import React from "react";
import { useState } from "react";

function NewApp() {
  const [color, setColor] = useState(true);

  function app_handle() {
    setColor((value) => !value);
  }

  const bgColor = color ? "dark" : "white";

  return (
    <div className={bgColor}>
      <button onClick={app_handle}>changecolor</button>
    </div>
  );
}

export default NewApp;
