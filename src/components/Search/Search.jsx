import * as React from 'react';
import './Search.css';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input
            className="form-field"
            list="json-datalist"
            placeholder="Введите имя"
        />
        <button className="btn-search-position">
          Поиск
        </button>
      </div>
    );
  }
}