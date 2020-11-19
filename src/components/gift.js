import React from "react";

const Gift = ({ url, slug }) => {
  return (
    <>
      <img src={url} alt={slug} loading="lazy" />
    </>
  );
};

export default Gift;
