import React from "react";

const Basic5 = () => {
  const coffee = "커피";
  const order = "카페라떼";
  const price = 4000;
  const size = "tall";

  const titleStyle = {
    backgroundColor: "tomato",
    color: "#fff",
    lineHeight: 1.6,
  };
  const container = {
    border: "1px solid #000",
    paddong: 10,
  };

  return (
    <section style={container}>
      <h3 style={titleStyle}>{coffee}</h3>
      <ul>
        <li>주문 커피 : {order}</li>
        <li>가격 : {price}원</li>
        <li>사이즈 : {size}</li>
      </ul>
    </section>
  );
};

export default Basic5;
