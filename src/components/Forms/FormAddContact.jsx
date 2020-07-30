import * as React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../Store/actions/contactsActions.js';
import { closeModal } from '../../Store/actions/modalActions.js';

class FormAddContact extends React.Component {
  state = {
    name: '',
    number: '',
  }

  handleChangeName = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handleChangeNumber = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  }

  handleSubmit = () => {
    const { name, number } = this.state;
    this.props.addContact({ name, number });
    this.setState({ name: '', number: ''});
    this.props.closeModal();
  }

  render() {
    const { name, number } = this.state;

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
              className="form-field"
              list="json-datalist"
              placeholder="Введите номер телефона"
              value={number}
              onChange={this.handleChangeNumber}
          />
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

const mapDispatchToProps = {
  addContact,
  closeModal,
};

export default connect(null, mapDispatchToProps)(FormAddContact);