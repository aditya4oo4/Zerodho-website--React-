import React from "react";
function RightSection({
  imageurl,
  productName,
  productDescription,
  learnmore
 
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col  " style={{ margin: "50px", marginRight: "80px" ,marginTop:"80px" }}>
          <h3 className="mt-4 mb-3 text-muted fw-semibold">{productName}</h3>
          <p className="fs-5  text-muted">{productDescription}</p>
          <div className="col m-4">
            
            <a href={learnmore} style={{ marginRight: "70px" }}>
              Learn More
            </a>
          </div>

        </div>
        <div className="col">
          <div className="col mb-5" style={{}}>
            <img src={imageurl} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSection;
