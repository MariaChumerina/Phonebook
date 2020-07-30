import * as React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../Store/actions/contactsActions.js';
import { closeModal } from '../../Store/actions/modalActions.js';
import './FormAddContact.css';

class FormAddContact extends React.Component {
  state = {
    name: '',
    number: '',
    prompt: '',
  }

  handleChangeName = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handleChangeNumber = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  }

  isValidateContact = (name, number) => {
    const { contacts } = this.props.contacts;
    const filteredContactsName = contacts.filter((contact) => {
      return contact.name === name;
    });
    const filteredContactsNumber = contacts.filter((contact) => {
      return contact.number === number;
    });
    if (name.length === 0 && number.length === 0) {
      this.setState({ prompt: 'Введите имя и пароль' });
      return false;
    }
    else if (name.length === 0) {
      this.setState({ prompt: 'Введите имя' });
      return false;
    }
    else if (number.length === 0) {
      this.setState({ prompt: 'Введите номер телефона' });
      return false;
    }
    else if (filteredContactsName.length) {
      this.setState({ prompt: 'Контакт с таким именем уже существует' });
      return false;
    }
    else if (filteredContactsNumber.length) {
      this.setState({ prompt: 'Контакт с таким номером уже существует' });
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.isValidateContact(name, number)) {
      this.props.addContact({ name, number });
      this.props.closeModal();
    }
    this.setState({ name: '', number: ''});
  }

  render() {
    const { name, number, prompt } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
              className="form-field"
              list="json-datalist"
              placeholder="Введите имя"
              value={name}
              onChange={this.handleChangeName}
          />
        </div>
        <div>
          <input
              type="tel"
              name="tel"
              pattern="^[ 0-9]+$"
              className="form-field"
              list="json-datalist"
              placeholder="Номер телефона без дефисов"
              value={number}
              onChange={this.handleChangeNumber}
          />
          {prompt.length
              ? (
            <p className="attention">
              {prompt}
            </p>
              ) : ''}
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