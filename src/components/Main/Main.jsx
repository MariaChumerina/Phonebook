import * as React from 'react';
import List from '../List/List.jsx';
import Search from '../Search/Search.jsx';

export default function Main() {
  return (
      <div className="margin-top-50">
        <h1>
          Телефонный справочник
        </h1>
        <Search />
        <button>
          Добавить контакт
        </button>
        <h2>
          Список контактов:
        </h2>
        <List />
      </div>
  );
}