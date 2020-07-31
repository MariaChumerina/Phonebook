import * as React from 'react';
import PropTypes from 'prop-types';
import './FormSearch.css';
import { connect } from 'react-redux';
import { searchContacts } from '../../Store/actions/contactsActions.js';

class FormSearch extends React.Component {
  state = {
    value: '',
  }

  componentDidMount() {
    const { searchContacts } = this.props;
    searchContacts('');
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const { searchContacts } = this.props;
    searchContacts(value);
  }

  handleClean = (e) => {
    e.preventDefault();
    const { searchContacts } = this.props;
    searchContacts('');
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
            placeholder="Искать"
            value={value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn-search-position">
            Поиск
          </button>
        </div>
        <button type="button" className="btn-link" onClick={this.handleClean}>
          Сбросить значение поиска
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  searchContacts,
};

export default connect(null, mapDispatchToProps)(FormSearch);

FormSearch.propTypes = {
  searchContacts: PropTypes.func.isRequired,
};
