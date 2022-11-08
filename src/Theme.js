import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  background: "#0d0d0d",
  fontColor: "#d1d1d1",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.background};
	}
`;
