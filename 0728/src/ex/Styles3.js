import myStyle from "../assets/Style3.module.css";

const Styles3 = () => {
  return (
    <div>
      <main className={myStyle.wrapper}>
        {/* :global은 모듈에서 일반 클래스처럼 사용가능 */}
        <h2 className="shadow">css module 스타일 적용</h2>
        <ul className={`${myStyle.listStyle} ${myStyle.textDecoration}`}>
          <li>import 참조변수명 from './파일명.module.css'</li>
          <li>참조변수명.클래스명</li>
        </ul>
      </main>
    </div>
  );
};

export default Styles3;
