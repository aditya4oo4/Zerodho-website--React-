import React from "react";

function Education(){
    return(
        <div className="container" style={{marginTop:"100px"}}>
            <div className="row">
                <div className="col-6">
                    <img src="/Media/images/education.svg" alt="eductation image here" style={{width:"80%"}} />
                </div>
                <div className="col-6">
                    <h2 className="mb-3 fw-normal">Free and open market education</h2>
                    <p className="mb-3">varsity. the largest online stock market eduction book in the world <br />covering everything from  the basics to advanced trading</p>
                     <a  style={{textDecoration:"none"}}  href="">versity  <i className="fa fa-long-arrow-right mb-5" aria-hidden="true"></i></a>
                    
                    <p className="mb-3">Trading Q&A,the most active trading and investment community in india  for all your market realted queries</p>
                     <a  style={{textDecoration:"none"}}  href="">versity  <i className="fa fa-long-arrow-right mb-5" aria-hidden="true"></i></a>
                     


                </div>
            </div>
        </div>
    );
}
export default Education;