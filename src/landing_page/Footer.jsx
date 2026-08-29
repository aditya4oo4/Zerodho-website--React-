import React from "react";

function Footer() {
  return (
    <footer
      className="footer footer-light bg-light border p-5 "
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="row p-4 ms-5 mt-0 pt-0 " >
        {/* Column 1 */}
        <div className="col ">
          <img
            src="/Media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "50%", maxWidth: "140px", height: "auto" }}
            className="mt-3 "
          />

          <p className="mt-4 text-muted">
            © 2010 - 2026, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>

          <div className="box d-flex align-items-center gap-4 mt-4">
            <div>
              <i className="fa fa-twitter fs-5  text-muted"></i>
            </div>

            <div>
              <i className="fa fa-instagram fs-5 text-muted"></i>
            </div>

            <div>
              <i className="fa fa-facebook fs-5 text-muted"></i>
            </div>

            <div>
              <i className="fa fa-linkedin fs-5 text-muted"></i>
            </div>
          </div>
          <hr />

          <div className="box d-flex align-items-center gap-4 mt-4">
            <div>
              <i className="fa fa-whatsapp fs-5 text-muted"></i>
            </div>

            <div>
              <i className="fa fa-youtube-play fs-3 text-muted"></i>
            </div>

            <div>
              <i className="fa fa-telegram fs-5  text-muted"></i>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col">
          <p className="fs-5 fw-medium">Account</p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Open demat account
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Minor demat account
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              NRI demat account
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              HUF demat account
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Commodity
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Dematerialisation
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Fund transfer
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              MTF
            </a>
          </p>
        </div>

        {/* Column 3 */}
        <div className="col">
          <p className="fs-5 fw-medium">Support</p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Contact us
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Support portal
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              How to file a complaint?
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Status of your complaints
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Bulletin
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Circular
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Z-Connect blog
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Downloads
            </a>
          </p>
        </div>

        {/* Column 4 */}
        <div className="col">
          <p className="fs-5 fw-medium">Company</p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              About
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Philosophy
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Press & Media
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Careers
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Zerodha Cares (ZCR)
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Tech
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Open Source
            </a>
          </p>

          <p>
            <a style={{ textDecoration: "none" }} href="">
              Referral Program
            </a>
          </p>
        </div>
        <div className="mt-5 fs-8 fw-normal text-muted" style={{ fontSize: "12px" ,lineHeight:"2" }}>
          <p className="">
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
