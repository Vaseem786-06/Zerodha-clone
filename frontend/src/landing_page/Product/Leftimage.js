import React from 'react';
function Leftimage({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore,
    googlePlay, 
    appStore}) {
    return ( <div className="container mt-5">
        <div className="row p-5">
            <div className="col-6"> 
                <img src={imageURL}/>
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="mt-3">
                <a hret={googlePlay}><img src="/media/images/googlePlayBadge.svg"/></a>
                <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px",textDecoration:"none"}}/></a>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Leftimage;