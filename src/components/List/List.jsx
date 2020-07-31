import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  const contacts = state.valueOfSearch.length
    ? state.contacts.contacts.filter((contact) => contact.name.toLowerCase().includes(state.valueOfSearch.toLowerCase()))
    : state.contacts.contacts;
  return {
    contacts,
  };
};

export default connect(mapStateToProps, null)(List);

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
