import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: 'grey',

};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props : any) => props.theme.body};
	}
`;