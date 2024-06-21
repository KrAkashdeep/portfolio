// import React from 'react'
import style from "./projects.module.css";
function Projects() {
  return (
    <>
      <div className={style.box}>
        <div className={style.top}>
          <h2>Projects</h2>
        </div>
        <div className={style.bottom}>
          <div className={style.small}></div>
          <div className={style.small}></div>
          <div className={style.small}></div>
        </div>
        <div className={style.text}>read more</div>
      </div>
    </>
  );
}

export default Projects;
