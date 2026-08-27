import react from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 m-5">
        <h2
          className="fs-4 text-center mb-5 text-muted"
          style={{ lineHeight: "1.5" }}
        >
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h2>
        <hr className="mt-5 mb-5 text-muted" />
        <div className="col mt-5">
          <ul className="">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </ul>
          <ul>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </ul>
          <ul>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </ul>
        </div>
        <div className=" col mt-5 mb-5">
          <ul>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </ul>
          <ul>
            <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </ul>
          <ul>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Hero;
