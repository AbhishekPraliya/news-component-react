import React from 'react'

export default function NewsItem(props){

    let {title,description,imageUrl,newsUrl,num}=props;
    return (
        <div className="my-3 mx-1">
            <div className="card" style={{width: "15rem"}}>
            <img src={imageUrl} className="card-img-top" style={{height:"170px"}} alt="IMG"/>
            <div className="card-body">
                <h5 className="card-title" style={{display:"inline-block"}}>{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
                <p style={{display:"inline-block",margin:"0",position:"absolute",right:"10px"}}>{num+1}.</p>
            </div>
            </div>
        </div>
    )

}
