import React from "react";

function Stats() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }} >
      <div className="row" p-5>
        <div className="col-6 p-5">
          <h3 className="mb-5 fw-normal">Trust with confidence</h3>
          <h4 className="mt-5 fw-normal">Costumer-first always</h4>
          <p className = "text-muted">
            That's why 1.3+crore costumers trust zerodha with rs 3.5+lakh crores
            worth of equity investment
          </p>
          <h4 className="mt-5 fw-normal">No spam or gimmicks</h4>
          <p className = "text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h4 className="mt-5 fw-normal">The Zerodha universe</h4>
          <p className = "text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mt-5 fw-normal">Do better with money</h4>
          <p className = "text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            className="me-5 mt-5"
            style={{ width: "110% " , height: "auto"}}
            src="/Media/images/ecosystem.png"
            alt=""
          />
          <div className="text-center">
            <a className="me-5" style={{textDecoration:"none"}} href="">Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a  style={{textDecoration:"none"}}  href="">Try kite  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
