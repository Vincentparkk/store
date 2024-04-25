import styles from "./Deduction_apply3.module.css";
import { Link } from "react-router-dom";

export default function Deduction_apply3() {
  const buttonClickToHome = (event) => {
    window.location.href = "/";
  };
  return (
    <>
      <h1 className={styles.title}>의료공제신청</h1>
      <div className={styles.center}>
        <h1 className={styles.msg}>신청이 완료되었습니다.</h1>
      </div>
      <article>
        <footer>
          <Link to="/apply2">
            <button>
              <p>다음</p>
            </button>
          </Link>
          <button onClick={buttonClickToHome}>
            <p>닫기</p>
          </button>
        </footer>
      </article>
    </>
  );
}
