/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";

export default function NewsCompo(){
    const [articles, setArticles] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    async function updateNews() {
        // console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=10&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        let newsData = await data.json();
        // console.log(newsData);
        setArticles(newsData.articles);
        setLoading(false);
    }
    useEffect(() => {
        updateNews();
    }, []);


    const noImageUrl = "data:image/jpeg;base64,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";

    const handelPreviClick = async () => {
        setPage(page - 1);
        updateNews();
        // console.log("Previ");
    };

    const handelNextClick = async () => {
        setPage(page + 1);
        updateNews();
    // console.log("Next");
    };
    
    return (
    <div className="container my-3">
        <h2 className="text-center">NewsWeb-Top Heading</h2>
        <div className="container" style={{ height: "50px" }}>
            <button disabled={page <= 1} type="button" onClick={handelPreviClick} className="btn btn-dark" style={{ position: "absolute", left: "120px" }} >
                &larr; Previ
            </button>
            <button disabled={page >= 6} type="button" onClick={handelNextClick} className="btn btn-dark" style={{ position: "absolute", right: "120px" }} >
                Next &rarr;
            </button>
            {loading && <Spinner style={{display:"inline-block",position:"relative",top:"5px",color:"blue"}} />}
        </div>
        <div className="row">
            {articles && articles.map((element, key) => {
            return (
                <div className="col-md-4" key={key}>
                    <Newsitem
                        title={element.title ? element.title.slice(0, 40) : "news"}
                        description={element.description?element.description.slice(0, 95):"news" }
                        imageUrl={element.urlToImage ? element.urlToImage : noImageUrl}
                        newsUrl={element.url}
                        num={key}
                    />
                </div>
            );
        })}
        </div>
        <div className="container" style={{ height: "40px" }}>
        <button
            disabled={page <= 1}
            type="button"
            onClick={handelPreviClick}
            className="btn btn-dark"
            style={{ position: "absolute", left: "120px" }}
        >
            &larr; Previ
        </button>
        <button
            disabled={page >= 6}
            type="button"
            onClick={handelNextClick}
            className="btn btn-dark"
            style={{ position: "absolute", right: "120px" }}
        >
            Next &rarr;
        </button>
        </div>
    </div>
    );

}

