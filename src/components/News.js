import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading]= useState(true);
  const [page,setPage] = useState(1);
  const [totalresults,setTotalResults] = useState(0);

  const  capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalresults);
      setPage(page+1);
      setLoading(false);
    }
   useEffect( ()=>{
    updateNews();
   },[])

  const fetchMoreData = async() => {
       setPage(page+1);
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       let data = await fetch(url);
       let parsedData = await data.json();
       setArticles(articles.concat(parsedData.articles));
       setTotalResults(parsedData.totalresults);
  }
    return (
      <>
        <h3 className="text-center" style={{marginTop:'80px', marginBottom:'40px'}}>Daily Dose - Top {capitalizeFirstLetter(props.category)} Headlines</h3>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalresults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
            {articles.map((element)=>{
                return <div className="col-md-4 " key={element.url} >
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl ={element.urlToImage?element.urlToImage:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/ONEPLUS_WATCH_OP3.JPG"} newsUrl={element.url} author={!element.author?"Unknown":element.author} date={element.publishedAt}/>
                </div>
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    )
}
News.defaultProps ={
  country: 'in',
  pageSize:8,
  category: 'science'
} 

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
