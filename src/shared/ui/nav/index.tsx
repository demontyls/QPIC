import React, {FC, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ILangProvider, LangContext } from '../../providers/lang';
import { INavLink } from './interface';
import './style.scss';

interface INav {
  list: INavLink[];
}
const Nav:FC<INav> = ({ list }) => {
  const { strings } = useContext<ILangProvider>(LangContext);
  return (
    <nav className="nav">
      <ul className="p-0 m-0">
        {list.map((elem)=> {
          return (
            <li>
              <NavLink className="link" to={elem.href}>{strings[elem.name]}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;