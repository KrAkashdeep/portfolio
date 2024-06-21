// import React from 'react'
import style from "./about.module.css";
function About() {
  return (
    <>
      <div className={style.box}>
        <div className={style.left}>
          <h2>{`Hi, I'm Kumar Akashdeep`}</h2>
          <h3>Software Engineer/ Full-Stack Developer/ Data Science</h3>
        </div>
        <div className={style.right}>
          <div className={style.smallBox}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quia quasi consequuntur cum error! Amet blanditiis ad libero,
            </p>
            <p>
              ullam accusantium in illum officiis modi quisquam neque mollitia,
              asperiores iusto beatae. Lorem ipsum dolor sit amet consectetur
            </p>
            adipisicing elit. Et quasi commodi excepturi? Similique error dolor
            ipsum dolore recusandae consectetur, beatae eius magnam sit
            obcaecati tempora modi perferendis earum quaerat! Quasi!
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
