import React from "react";

export const Select = ({ array }) => {
  //1. Отрисовываем массив с уникальными значениями HOUSE
  const getSelect = (arr) => {
    const house = [];
    arr.forEach(function (obj) {
      if (obj.house !== "") return house.push(obj.house);
    });
    return new Set(house);
  };

  const uniqHouse = [...getSelect(array)];
  console.log(uniqHouse);

  return (
    <>
      {uniqHouse.map((elem) => (
        <option>{elem}</option>
      ))}
    </>
  );
};
