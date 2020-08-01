import * as React from 'react';
import { connect } from 'react-redux';
import FormSearch from '../Forms/FormSearch.jsx';
import Modal from '../Modal/Modal.jsx';
import './Main.css';
import { openModal } from '../../Store/actions/modalActions.js';
import PropTypes from 'prop-types';
import ContactsList from '../ContactsList/ContactsList.jsx';
import FormAddContact from '../Forms/FormAddContact.jsx';

const Main = ({ modalIsOpen, openModal }) => {
  const handleClick = () => {
    openModal();
  };

  return (
    <div className="margin-top-50">
      <h1>
        Телефонный справочник
      </h1>
      <FormSearch />
      <div className="contacts-container margin-top-50">
        <div className="contacts-title-container">
          <h2>
            Контакты
          </h2>
          <button type="button" className="btn-link btn-link-position" onClick={handleClick}>
            +
          </button>
          {modalIsOpen && <Modal modalBody={FormAddContact} />}
        </div>
        <ContactsList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalIsOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};
