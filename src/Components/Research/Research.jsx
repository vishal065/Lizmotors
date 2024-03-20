// import { useEffect, useState } from "react";
import External from "./External";
import Internal from "./Internal";

function Research({ external, internal }) {
  return (
    <>
      {external ? <External external={external} /> : " "}
      {internal ? <Internal internal={internal} /> : " "}
    </>
  );
}

export default Research;
