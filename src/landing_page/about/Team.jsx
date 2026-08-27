import React from "react";

function Team() {
  return (
    <div className="contrainer">
      <div className="row p-5 m-5 mb-5">
        <h3 className="text-center text-muted fs-3 mb-4  ">People</h3>
        <div className="col mt-5 ">
          <img
            src="/Media/images/myimage.png"
            alt="" className="p-3"
            style={{
              width: "60%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
              marginLeft: "100px ",
              marginTop:"5px",
            }}

          />{" "}
          <h5 className="text-center mt- fw-normal">Adityaa Shaurya Saini</h5>
          <h6 className="text-center mt-2 text-muted">Devloper</h6>
        </div>
        <div className="col  pe-5 mt-5" style={{marginRight:"70px" , fontSize:"16.5px" }}>
          <ul className="ps-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </ul>
          <ul className="ps-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </ul>
          <ul className="ps-3">Playing basketball is his zen</ul>
          <ul className="ps-3"> Connect on <a href="" style={{textDecoration:"none"}}> Linkdin</a> / <a href="" style={{textDecoration:"none"}}>Github</a> / <a href="" style={{textDecoration:"none"}}>Instagram</a></ul>
        </div>
      </div>
    </div>
  );
}
export default Team;
