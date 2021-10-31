import React, { useEffect, useState } from "react";
import axios from "axios";

import Charaters from "./Charaters";

const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 200)
      )
      .then(res => setData(res.data));
  }, []);
  console.log(data[0]);
  return (
    <div
      className="MyCards "
      style={{
        background:
          " radial-gradient(circle, rgba(0,0,0,1) 3%, rgba(1,42,25,1) 99%)",
        backgroundRepeat: "repeat-y",
        // background: "url('./img/bgOutside.jpg')",
        height: "auto"
      }}
    >
      <div>
        <img src="./img/logo.png" alt="walter" className=" h-auto" />
      </div>
      {isLoading ? (
        <h1 className="text-light fw-bold text-center">Chargement</h1>
      ) : (
        <Charaters isLoading={isLoading} data={data} />
      )}
    </div>
  );
};
export default Cards;
