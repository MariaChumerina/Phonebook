import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../Store/actions/modalActions.js';
import { addContact } from '../../Store/actions/contactsActions.js';
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

  validateField = (field, value) => {
    const { contacts } = this.props;
    const filteredContacts = contacts.filter((contact) => contact[field] === value);
    if (filteredContacts.length) {
      throw new Error('Контакт с таким именем или номером уже существует');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact, closeModal } = this.props;
    try {
      this.validateField('name', name);
      this.validateField('number', number);
    } catch (error) {
      this.setState({ error: error.message });
      return;
    }
    addContact({ name, number });
    this.setState({ name: '', number: '' });
    closeModal();
  }

  render() {
    const { name, number, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            className="form-field"
            pattern="[A-Za-zА-Яа-яЁё0-9]{1,13}"
            placeholder="Введите имя"
            value={name}
            onChange={this.handleChangeName}
            required
          />
          <p className="help-text">от 1 до 13 символов</p>
        </div>
        <div>
          <input
            type="tel"
            className="form-field"
            pattern="[0-9]{3,13}"
            placeholder="Введите номер телефона"
            value={number}
            onChange={this.handleChangeNumber}
            required
          />
          <p className="help-text">от 3 до 13 цифр</p>
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

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = {
  addContact,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddContact);

FormAddContact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
