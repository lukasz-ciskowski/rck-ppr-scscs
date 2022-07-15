import Game from "components/Game";
import Logo from "components/Logo";
import React from "react";

function App() {
  return (
    <div className="container mx-auto p-20 flex flex-col h-screen">
      <Logo />
      <Game />
    </div>
  );
}

export default App;
