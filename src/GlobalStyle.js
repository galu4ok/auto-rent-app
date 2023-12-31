import 'modern-normalize';
import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* chrome */
html::-webkit-scrollbar {
  display: none;
}

/* firefox */
html {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;
  background-color: white;
  color: rgba(18, 20, 23, 1);
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::-webkit-scrollbar {
    appearance: none;
    background: transparent;
    width: 0;
    /* height: 0; */
  }

}

img{
    display: block;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const SectionContainer = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 28px;
`;

export const MainContainer = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: black;
  text-align: center;
`;
