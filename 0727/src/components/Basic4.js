import React from "react";

const Basic4 = () => {
  const title = {
    backgroundColor: "lightskyblue",
    padding: 10,
    color: "#fff",
  };

  return (
    <section>
      {/* JSX 내부에서 자바스크립트 사용시 {} 안에 작성 */}
      <h2 style={{ color: "orange", textDecoration: "underline" }}>
        스타일 직접 적용
      </h2>
      <h3 style={title}>스타일 변수로 적용</h3>
    </section>
  );
};

export default Basic4;
