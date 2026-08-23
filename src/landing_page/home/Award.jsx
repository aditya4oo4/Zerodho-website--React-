import React from "react";


function Award (){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6  ">
                    <img src="Media/images/largestBroker.svg" alt="Brokerage image" />
                </div>
                <div className="col-6 ">
                    <h1 className="mt-5">Largest stock broker in india</h1>
                    <p>2+ million Zerodha clients contributes to over 15% of all volume in india daily by trading and investing in:</p>
                    <div className="row mt-5 ">
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Features and options</p>
                            </li>
                        <li>
                            <p>comoditie derivatives</p>
                            </li>
                        <li>
                            <p>Currency derivatives</p>
                            </li>
                        </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                            </li>
                        <li>
                            <p>Direct mutul funds</p>
                            </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                        </div>
                        <img  className="mt-3" src="/Media/images/pressLogos.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Award;