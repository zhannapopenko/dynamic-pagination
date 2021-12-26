import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export const App = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if(fetching) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`)
      .then(response => {
        setPosts([ ...posts, ...response.data])
        setCurrentPage(prevState => prevState + 1)
      })
      .finally ( () => setFetching(false));
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener("scroll",  scrollHandler);
    return function() {
      document.removeEventListener("scroll",  scrollHandler);
    }
  }, [])

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  return (
    <>
     <div className="header">Dynamic pagination during scrolling</div>
     <div className="contentContainer">
      {posts.map(post => 
        <div key={post.id} className="postContainer">
        <div className="title">{post.title}</div>
        <div className="body">{post.body}</div>
        </div>)}
     </div>
    </>
  );
}
