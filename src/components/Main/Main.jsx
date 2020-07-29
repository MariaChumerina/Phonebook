import * as React from 'react';
import List from '../List/List.jsx';
import Search from '../Search/Search.jsx';
import './Main.css';

export default class Main extends React.Component {

  render() {
    return (
        <div className="margin-top-50">
          <h1>
            Телефонный справочник
          </h1>
          <Search />
          <div className="contacts-container margin-top-50">
            <div className="contacts-title-container">
              <h2>
                Контакты
              </h2>
              <button className="btn-link btn-link-position">
                &#43;
              </button>
            </div>
            <List />
          </div>
        </div>
    );
  }
}