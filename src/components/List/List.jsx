import * as React from 'react';
import { connect } from 'react-redux';
import './List.css';
import ListItem from '../ListItem/ListItem.jsx';

class List extends React.Component {
  addItemsOfList = () => {
    const { contacts } = this.props.contacts;
    return contacts.map((contact) => {
      const { name, number } = contact;
      return <ListItem name={name} number={number} key={number}/>
    })
  }

  render() {
    const { contacts } = this.props.contacts;
    return (
      <div>
        <ul>
          {contacts.length ? this.addItemsOfList() : 'Пока нет добавленных контактов'}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, null)(List);