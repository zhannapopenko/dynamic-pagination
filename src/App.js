import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { StyledApp } from "./StyledComponent";
import { Header } from "./StyledComponent";
import { Title } from "./StyledComponent";
import { ContentContainer } from "./StyledComponent";
import { PostContainer } from "./StyledComponent";
import { PostTitle } from "./StyledComponent";
import { Body } from "./StyledComponent";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(<CgSun size={30} />);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${currentPage}`
        )
        .then((response) => {
          setPosts([...posts, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      setIcon(<HiMoon size={30} />);
    } else {
      setTheme("light");
      setIcon(<CgSun size={30} />);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Header>
          <Title>Dynamic pagination during scrolling</Title>
          <button onClick={() => themeToggler()}>{icon}</button>
        </Header>
        <ContentContainer>
          {posts.map((post) => (
            <PostContainer key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <Body>{post.body}</Body>
            </PostContainer>
          ))}
        </ContentContainer>
      </StyledApp>
    </ThemeProvider>
  );
};
