// import React from 'react'
import style from "./firstPage.module.css";
function FirstPage() {
  return (
    <>
      <div className={style.box}>
        <div className={style.left}>
          <h2>Software Enginner</h2>
          <div className={style.smallLeft}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              natus exercitationem
            </p>
          </div>
          <button>About Me</button>
        </div>
        <div className={style.right}></div>
      </div>
    </>
  );
}

export default FirstPage;
