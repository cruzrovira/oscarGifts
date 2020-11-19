import React from "react";
import Gift from "./gift";

const ListGift = ({ gifts }) => {
  return (
    <div className="container mt-4">
      {gifts.map((item) => (
        <Gift key={item.id} url={item.url} slug={item.slug} />
      ))}
    </div>
  );
};

export default ListGift;
