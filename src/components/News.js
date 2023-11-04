import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

  apiKey = "38873078752147e6a7e86943db5b9cd3";
  articles = [{
    "source": {
      "id": "wired",
      "name": "Wired"
    },
    "author": "Gideon Lichfield, Lauren Goode",
    "title": "Where Does Crypto Go From Here?",
    "description": "We talk with Michael Casey, the chief content officer of CoinDesk, almost one year after the news site brought down Sam Bankman-Fried’s cryptocurrency empire FTX.",
    "url": "https://www.wired.com/story/have-a-nice-future-podcast-24/",
    "urlToImage": "https://media.wired.com/photos/6525c8ac419624284be05210/191:100/w_1280,c_limit/HANF-Michael%20Casey.jpg",
    "publishedAt": "2023-10-11T11:00:00Z",
    "content": "Gideon Lichfield: You said just now that what Sam Bankman-Fried did was allegedly illegal. Is there a world in which it wasn't illegal?\r\nMichael Casey: I think we allI know. I'm trying to be a good j… [+2082 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Gizmodo.com"
    },
    "author": "Maxwell Zeff",
    "title": "Crypto Exchanges, Not Just FTX, Are All a Mess Right Now",
    "description": "The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes on Binance declined, according to a Bloomberg report Friday.…",
    "url": "https://gizmodo.com/crypto-exchanges-ftx-binance-genesis-gemini-are-a-mess-1850968083",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/46326bbf3c33c4ddb3f18069c82167d7.jpg",
    "publishedAt": "2023-10-27T20:10:00Z",
    "content": "The founders of cryptocurrency exchanges face a mountain of regulatory challenges and billions in personal losses. Binance CEO Changpeng Zhao personally lost $12 billion this year as trading volumes … [+1852 chars]"
  },
  {
    "source": {
      "id": "business-insider",
      "name": "Business Insider"
    },
    "author": "Matthew Fox",
    "title": "Bitcoin briefly spiked 10% after a false report said the SEC approved BlackRock's spot bitcoin ETF",
    "description": "\"We apologize for a tweet that led to the dissemination of inaccurate information regarding the Blackrock Bitcoin ETF,\" CoinTelegraph said.",
    "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-false-report-said-sec-approved-spot-bitcoin-etf-2023-10",
    "urlToImage": "https://i.insider.com/652d698c55f52b01b3606b6c?width=1200&format=jpeg",
    "publishedAt": "2023-10-16T16:51:00Z",
    "content": "NurPhoto / Contributor\r\n<ul><li>Bitcoin briefly popped 10% on Monday after a false report said the SEC approved a spot bitcoin ETF from BlackRock.</li><li>BlackRock told Bloomberg that its ETF is, in… [+2410 chars]"
  },
  {
    "source": {
      "id": "business-insider",
      "name": "Business Insider"
    },
    "author": "Aruni Soni",
    "title": "Bitcoin may see a 'supply shock' as available tokens hit their lowest level since 2018 with a potential ETF likely to jolt demand, analyst says",
    "description": "There's a dwindling amount of bitcoin available to trade on crypto exchanges, and an ETF approval would further boost demand.",
    "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-supply-shock-tokens-spot-etf-crypto-exchange-sec-2023-10",
    "urlToImage": "https://i.insider.com/653bb6950487ff031cb0368b?width=1200&format=jpeg",
    "publishedAt": "2023-10-27T15:47:54Z",
    "content": "Namthip Muanthongthae/Getty Images\r\n<ul>\n<li>The supply of available bitcoin to trade on crypto exchanges is at its lowest level in five years.</li>\n<li>That could set up a supply shock with potentia… [+1845 chars]"
  },
  {
    "source": {
      "id": "business-insider",
      "name": "Business Insider"
    },
    "author": "Aruni Soni",
    "title": "Bitcoin rockets to $35,000 for the first time in 17 months on optimism that an ETF will be approved",
    "description": "Excitement for a spot bitcoin ETF has been building, with commentators and experts saying pressure is growing for the SEC to approve a fund.",
    "url": "https://markets.businessinsider.com/news/currencies/bitcoin-rockets-35000-since-2022-spot-etf-approval-optimism-sec-2023-10",
    "urlToImage": "https://i.insider.com/63d3cd594589790018e56ee6?width=1200&format=jpeg",
    "publishedAt": "2023-10-24T14:33:35Z",
    "content": "Yuichiro Chino/Getty Images\r\n<ul>\n<li>Bitcoin hit $35,000 on Tuesday, its highest since May 2022, amid hopes of a spot ETF approval.</li>\n<li>Optimism surrounding the ETF approval has been driving a … [+2288 chars]"
  },
  {
    "source": {
      "id": "business-insider",
      "name": "Business Insider"
    },
    "author": "Phil Rosen",
    "title": "Bitcoin jumps as ETF hopes drive the token to $30,000",
    "description": "Earlier this week, crypto bull Mike Novogratz forecasted a spot bitcoin ETF will be approved this year.",
    "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-etf-cryptocurrency-bulls-token-rally-currency-markets-novogratz-2023-10",
    "urlToImage": "https://i.insider.com/617308b64f9d8b0011afb912?width=1200&format=jpeg",
    "publishedAt": "2023-10-20T14:03:17Z",
    "content": "bitcoin cryptocurrency - stock illustrationGetty\r\n<ul>\n<li>Bitcoin jumped as high as $30,000 on Friday, hovering about 4.5% higher in early trading.</li>\n<li>The token spiked 10% briefly on Tuesday a… [+2058 chars]"
  }]

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 24,
      loading: true,
      type: 'technology'
    };
  }

  fetchNews = async (page) => {
    console.log(`fetchNews() called...`);

    this.setState({loading: true});

    const response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.type}&page=${page}&pageSize=${this.state.pageSize}&apiKey=${this.apiKey}`)
    const data = await response.json();

    console.log(`page is set to ${page}, # of news fetched:`, data.articles.length);
    this.setState({
      articles: data.articles,
      page: page
    })

    this.setState({loading: false});

    console.log( `fetchNews() ended...`);
  }

  fetchNextPageNews = async () => {
    await this.fetchNews(this.state.page + 1);
  }

  fetchPrevPageNews = async () => {
    await this.fetchNews(this.state.page - 1);
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
    // this.setState({
    //   articles: this.articles
    // })
  }

  render() {
    return (
      <div className="container" style={{marginTop: '8px'}}>
        {
          this.state.loading && (
            <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px', marginBottom: '16px'}}>
              <Spinner/>
            </div>
          )
        }
        
        <div className="row">
          {this.state.articles && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" style={{marginBottom: '8px'}} key={element.url}>
                <NewsItem
                  title={element.title ? `${element.title.slice(0, 40)}...` : ""}
                  description={element.description ? `${element.description.slice(0, 80)}...` : ""}
                  url={element.url}
                  urlToImage={element.urlToImage ? element.urlToImage : "https://wwwhatsnew.com/wp-content/uploads/2023/10/radius.jpg"}
                />
              </div>
            );
          })}
        </div>

        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          {
            (this.state.page > 1) && <button type="button" className="btn btn-primary my-3" onClick={this.fetchPrevPageNews}>&lt; Previous</button>
          }
          <button type="button" className="btn btn-primary my-3" onClick={this.fetchNextPageNews}>Next &gt;</button>
        </div>

      </div>
    );
  }
}

export default News;
