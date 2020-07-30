import * as React from 'react';
import { connect } from 'react-redux';
import './List.css';
import ListItem from '../ListItem/ListItem.jsx';

class List extends React.Component {
  renderListItems = () => {
    const { contacts } = this.props;
    return contacts.map((contact) => {
      const { name, number } = contact;
      return <ListItem name={name} number={number} key={number}/>
    })
  }

  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts.length ? this.renderListItems() : 'Пусто'}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const contacts = state.filteredContacts.contact.length
      ? state.contacts.contacts.filter((contact) => {
        return contact.name.includes(state.filteredContacts.contact)
      })
        : state.contacts.contacts;
  return {
    contacts,
  };
};

export default connect(mapStateToProps, null)(List);