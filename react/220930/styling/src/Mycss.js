import React from "react";
import style from "./Mycss.module.css";

// style 객체로 임포트 -> div - style.box로 style객체를 참조함 
const Mycss = () => {
  return (
    <div className={style.box}> 
      <h2>CSS를 적용합니다.</h2>
    </div>
  );
};

export default Mycss;
