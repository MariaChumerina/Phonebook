import * as React from 'react';
import List from '../List/List.jsx';

export default function Main() {
  return (
      <div>
        <h1>
          Телефонный справочник
        </h1>
        <h2>
          Список контактов:
        </h2>
        <List />
      </div>
  );
}