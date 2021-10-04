import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  NavLink 
} from "react-router-dom";
import styled from 'styled-components';
import Form from '../Form_Components/Form/Form';
import Palette from '../Palette_Components/Palette/Palette';



const Ul = styled.ul`
    display: flex;
    gap: 38px;
    margin-left: 10px;
`


const StyledNavLink  = styled(NavLink)`
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
    text-decoration-line: underline;
    color: #FFFFFF;
    text-decoration: none;
`


const Header = (props) => {
  return (
    <Router>
      <div>
        <nav>
          <Ul>
            <li>
              <StyledNavLink to="/" activeStyle={{ borderBottom: '0.5px solid #fff'}} exact>Форма</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/palette" activeStyle={{ borderBottom: '0.5px solid #fff'}}>Палитра</StyledNavLink>
            </li>
          </Ul>
        </nav>

        <Switch>
          <Route path="/palette">
            <Palette />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Header