import React from "react";

function Detail(props) {
  return (
    <>
      <div className="con-detail">
        <div className="text-box1">
          <div className="name">Name&nbsp;:&nbsp;{props.data}</div>
          <div className="hp">
            HP&nbsp;<div className="line-hp">{props.hp}</div>&nbsp;{props.hp}/
            {props.hp}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
