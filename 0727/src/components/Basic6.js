// 외부 css 문서 불러오기
import "./Basic6.css";

const Basic6 = () => {
  return (
    // class는 js문법이기 때문에 JSX에서는 className으로 작성
    <article className="container">
      <h2>css 문서 연결하기</h2>
      <ul>
        <li className="orange">box1</li>
        <li className="maroon">box2</li>
        <li className="lightseagreen">box3</li>
      </ul>
    </article>
  );
};

export default Basic6;
