import React, { useEffect, useState } from "react";

function CountryCard({ props }) {
  const { image, title, altName } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={image}
        alt={altName}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h3>{title}</h3>
    </div>
  );
}

const Countries = () => {
  const API = `https://restcountries.com/v3.1/all`;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e));
  }, [API]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {data.map((item, idx) => (
        <CountryCard
          props={{
            image: item.flags.png,
            title: item.name.common,
            altName: item.flags.alt,
          }}
        />
      ))}
    </div>
  );
};

export default Countries;
