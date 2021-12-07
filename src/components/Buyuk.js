import React from "react";
import data from "../components/yemekData.json";
export default function Buyuk() {
  const datas = data;
  return (
    <div>
      {datas.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.id}</h1>
            <img src={data.imageURL} alt="" />
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
}
