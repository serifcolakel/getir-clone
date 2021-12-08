import React from "react";
import datas from "../components/datas/yemekData.json";
export default function Buyuk() {
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
