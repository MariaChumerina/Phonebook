import * as React from 'react';
import { connect } from 'react-redux';
import './Modal.css';
import { closeModal } from '../../Store/actions/modalActions.js';
import FormAddContact from '../Forms/FormAddContact.jsx';
import PropTypes from 'prop-types';

const Modal = ({ closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">
              Добавление контакта
            </h3>
            <button type="button" className="btn-link close" onClick={handleClose}>
              &#10005;
            </button>
          </div>
          <div className="modal-body">
            <FormAddContact />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.modal.isOpen,
  };
};

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
}