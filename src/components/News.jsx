import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);

  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`;
        setLoading(true);
        const data = await fetch(url);
        const jsonData = await data.json();
        setApiData(jsonData.articles);
        setTotalData(jsonData.totalResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [props.category]);

  const descProcess = (desc, num) => {
    if (desc == null) {
      return "";
    } else if (desc.length > num) {
      return `${desc.slice(0, num)}...`;
    } else {
      return desc;
    }
  };

  const dateProcess = (c) => {
    if (c) {
      let date = c.toLocaleString();
      return new Date(date).toGMTString();
    } else {
      return "";
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setPage(page + 1);
      const data = await fetch(url);
      const jsonData = await data.json();
      setApiData(apiData.concat(jsonData.articles));
      setTotalData(jsonData.totalResults);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-3">
      <h1 className="text-center my-4">NewsTap - News around the globe</h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={apiData.length}
        next={fetchData}
        hasMore={apiData.length <= totalData}
        loader={!loading && <Loading />}
      >
        <div className="d-flex flex-wrap gap-5 justify-content-center">
          {apiData.map((ele, index) => {
            return (
              <div
                key={index}
                className="card shadow position-relative my-4"
                style={{ width: "25rem" }}
              >
                <span
                  className="position-absolute top-0 badge rounded-pill bg-danger"
                  style={{ right: "0%" }}
                >
                  {ele.source.name ? ele.source.name : "news"}
                </span>
                <img
                  src={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                  }
                  className="card-img-top"
                  alt="news poster"
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.title ? ele.title : ""}</h5>
                  <span className="badge rounded-pill text-bg-secondary mb-2">
                    {descProcess(ele.author, 30)}
                  </span>
                  <p className="card-text">
                    {descProcess(ele.description, 80)}
                  </p>
                  <a
                    target="blank"
                    href={ele.url}
                    className="btn btn-outline-danger rounded-0"
                  >
                    Read more
                  </a>
                </div>
                <div className="card-footer text-muted mt-2 my-auto text-center">
                  {dateProcess(ele.publishedAt)}
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
