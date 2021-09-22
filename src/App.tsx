import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import DetailCountries from './component/pages/DetailCountries';
import Countries from './component/pages/Countries';
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  h1: ${(props) => props.theme.h1};
`;

function App() {

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <>

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
          <StyledApp>
            <div className="wrapper">
              <div className="switch_box box_3">
                <div className="toggle_switch">
                  <input type="checkbox" className="switch_3" onClick={() => themeToggler()}/>
                  <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 80">
                    <path className="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#233043" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3"/>
                    <path className="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"/>
                    <path className="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"/>
                  </svg>
                  </div>
              </div>
           </div>
      
              <Router>
                <Switch>
                  <Redirect exact from="/" to="/countries" />
                  <Route path="/countries" exact component={Countries} />
                  <Route path="/detail-country" exact component={DetailCountries} />
                  <Route path="/products" exact />      
               </Switch>
              </Router>

           </StyledApp>
        </ThemeProvider>
    </>
  )
}

export default App;
