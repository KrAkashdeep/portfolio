import style from "./navbar.module.css";

function Navbar() {
  return (
    <>
      {/* <div className={style.box}> */}
      <div className={style.mainBox}>
        <h1 className={style.name}>Akashdeep</h1>
        <div className={style.topRight}>{/* <h4>Contacts</h4> */}</div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
