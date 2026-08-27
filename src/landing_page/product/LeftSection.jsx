import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col " style={{ margin: "30px" }}>
          <img src={imageURL} />
        </div>
        <div className="col  " style={{ margin: "50px", marginLeft: "80px" }}>
          <h3 className="m-4 fw-semibol text-muted">{productName}</h3>
          <p className="fs-5 m-4 text-muted">{productDescription}</p>
          <div className="col m-4">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "70px" }}>
              Learn More
            </a>
          </div>
          <div className="m-4">
            <a href={googlePlay}>
              <img src="Media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="Media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
