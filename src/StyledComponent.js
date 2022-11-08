import styled from "styled-components";

export const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid grey;
  margin: 0 30px;
`;

export const Title = styled.div`
  flex: 3;
  min-height: 2.5em;
  padding: 1.5em 0 0.5em 0;
  margin: 0 2em;
  text-align: center;
  font-size: larger;
  font-weight: 700;
  @media (max-width: 480px) {
    margin: 0 1em;
  }
`;

export const ContentContainer = styled.div`
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19em, 1fr));
  grid-gap: 2vw;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 4vw;
  }
`;

export const PostContainer = styled.div`
  padding: 0.5em;
  min-height: 13em;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-radius: 5px;
`;

export const PostTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

export const Body = styled.div`
  font-size: medium;
  font-weight: 400;
  padding-top: 0.5em;
`;
