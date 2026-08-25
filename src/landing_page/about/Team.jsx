import React from "react";

function Team() {
  return (
    <div className="contrainer">
      <div className="row p-5 m-5 mb-5">
        <h3 className="text-center text-muted fs-3">People</h3>
        <div className="col mt-5">
          <img
            src="/Media/images/myimage.png"
            alt=""
            style={{
              width: "65%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
              marginLeft: "100px ",
            }}

          />{" "}
          <h5 className="text-center mt-5">Adityaa Shaurya Saini</h5>
          <h6 className="text-center mt-3 text-muted">Creator and Devloper</h6>
        </div>
        <div className="col fs-5 mt-5" style={{marginRight:"50px"}}>
          <ul >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </ul>
          <ul>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </ul>
          <ul>Playing basketball is his zen</ul>
          <ul>Connect on Homepage / TradingQnA / Twitter</ul>
        </div>
      </div>
    </div>
  );
}
export default Team;
