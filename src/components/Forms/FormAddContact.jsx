import * as React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../Store/actions/contactsActions.js';
import { closeModal } from '../../Store/actions/modalActions.js';
import './FormAddContact.css';

class FormAddContact extends React.Component {
  state = {
    name: '',
    number: '',
    error: null,
  }

  handleChangeName = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handleChangeNumber = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  }

  validateContact = (field, value) => {
    const { contacts } = this.props.contacts;
    const filteredContacts = contacts.filter((contact) => {
      return contact[field] === value;
    });
    if (filteredContacts.length) {
      throw new Error('Контакт с таким именем или номером уже существует');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    try {
      this.validateContact('name', name);
      this.validateContact('number', number);
    } catch (error) {
      this.setState({ error: error.message });
      return;
    }
    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
    this.props.closeModal();
  }

  render() {
    const { name, number, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
              type="text"
              className="form-field"
              placeholder="Введите имя"
              value={name}
              onChange={this.handleChangeName}
              required
          />
        </div>
        <div>
          <input
              type="tel"
              pattern="^[0-9]+$"
              className="form-field"
              placeholder="Номер телефона без дефисов"
              value={number}
              onChange={this.handleChangeNumber}
              required
          />
          {error && (
            <p className="attention">
              {error}
            </p>
          )}
        </div>
        <div>
          <button type="submit">
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  addContact,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddContact);