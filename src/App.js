import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export const App = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if(fetching) {
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`)
      .then(response => {
        setPosts([ ...posts, ...response.data])
        setCurrentPage(prevState => prevState + 1)
        setTotalCount(response.headers["x-total-count"])
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
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 
    && posts.length < totalCount) {
      setFetching(true);
    }
  }

  return (
    <div>
      {posts.map(post => 
        <div key={post.id}>
        <div>{post.title}</div>
        <div>{post.body}</div>
        </div>)}
    </div>
  );
}
