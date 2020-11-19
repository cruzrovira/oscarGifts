import React, { useState, useEffect } from "react";
import "./App.css";
import getGifts from "./service/getGifts";
import NavBar from "./components/navBar";
import ListGift from "./components/listGift";
function App() {
  const [gifts, setGifts] = useState([]);
  const [keyword, setKeyword] = useState("panda");

  useEffect(() => {
    getGifts({ keyword }).then((data) => setGifts(data));
  }, [keyword]);

  const shear = (keyword) => {
    setKeyword(keyword);
  };

  return (
    <>
      <NavBar shear={shear} />

      <ListGift gifts={gifts} />
    </>
  );
}

export default App;
