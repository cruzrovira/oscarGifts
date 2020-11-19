import React, { useState, useEffect } from "react";
import "./App.css";
import getGifts from "./service/getGifts";
import NavBar from "./components/navBar";
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
      <div className="container mt-4">
        {gifts.map((item) => (
          <img key={item.id} src={item.url} alt={item.slug} loading="lazy" />
        ))}
      </div>
    </>
  );
}

export default App;
