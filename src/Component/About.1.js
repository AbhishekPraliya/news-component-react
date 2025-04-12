import React, { Component } from 'react';
import Newsitem from "./NewsItemBox.js";

export class About extends Component {


  constructor() {
    super();
    console.log("This is constructor");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=875811e0d5bc472a956df6e917a02da4";
    let data = await fetch(url);
    let newsData = await data.json();
    console.log(newsData);
    this.setState = ({ articles: newsData.articles });
  }
  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsWeb-Top Heading</h2>
        <div className="row">
          {this.state.articles.map((element, key) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : "news"} description={element.description ? element.description.slice(0, 95) : "news"} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>;
          })};

        </div>

      </div>
    );
  }
}
