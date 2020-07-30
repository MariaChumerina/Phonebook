import * as React from 'react';
import { connect } from 'react-redux';
import './List.css';
import ListItem from '../ListItem/ListItem.jsx';

const List = ({ contacts }) => {
  const renderListItems = () => {
    return contacts.map((contact) => {
      const { name, number } = contact;
      return <ListItem name={name} number={number} key={number} />;
    });
  };

  return (
    <div>
      <ul>
        {contacts.length ? renderListItems() : 'Пусто'}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const contacts = state.filteredContacts.contact.length
      ? state.contacts.contacts.filter((contact) => contact.name.toLowerCase().includes(state.filteredContacts.contact.toLowerCase()))
    : state.contacts.contacts;
  return {
    contacts,
  };
};

export default connect(mapStateToProps, null)(List);
