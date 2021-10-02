import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link 
} from "react-router-dom";
import styled from 'styled-components';
import Form from '../Form_Components/Form/Form';
import Palette from '../Palette_Components/Palette/Palette';



const Ul = styled.ul`
    display: flex;
    gap: 38px;
    margin-left: 10px;
`


const NavLink = styled(Link)`
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
              <NavLink to="/">Форма</NavLink>
            </li>
            <li>
              <NavLink to="/palette">Палитра</NavLink>
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