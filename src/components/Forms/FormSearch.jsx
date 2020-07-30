import * as React from 'react';
import './FormSearch.css';
import { connect } from 'react-redux';
import { searchContacts } from '../../Store/actions/contactsActions.js';

class FormSearch extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleSubmit = () => {
    const { value } = this.state;
    this.props.searchContacts(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-container">
          <input
              className="form-field"
              list="json-datalist"
              placeholder="Введите имя"
              value={value}
              onChange={this.handleChange}
          />
          <button type="submit" className="btn-search-position">
            Поиск
          </button>
        </div>
        <button className="btn-link">
          Сбросить значение поиска
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  searchContacts,
}

export default connect(null, mapDispatchToProps)(FormSearch);