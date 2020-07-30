import * as React from 'react';
import List from '../List/List.jsx';
import Search from '../Search/Search.jsx';
import Modal from '../Modal/Modal.jsx';
import './Main.css';
import { connect } from 'react-redux';
import { openModal } from '../../Store/actions/modalActions.js';

const Main = ({modalIsOpen, openModal}) => {
  const handleClick = () => {
    openModal();
  }

  return (
      <div className="margin-top-50">
        {modalIsOpen && <Modal  />}
        <h1>
          Телефонный справочник
        </h1>
        <Search />
        <div className="contacts-container margin-top-50">
          <div className="contacts-title-container">
            <h2>
              Контакты
            </h2>
            <button className="btn-link btn-link-position" onClick={handleClick}>
              &#43;
            </button>
          </div>
          <List />
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    modalIsOpen: state.modal.isOpen,
  };
};

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);