import * as React from 'react';
import './Modal.css';
import { closeModal } from '../../Store/actions/modalActions.js';
import { connect } from 'react-redux';
import FormAddContact from '../FormAddContact/FormAddContact.jsx';

class Modal extends React.Component {
  handleClose = () => {
    this.props.closeModal();
  }

  render() {

    return (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">
                  Добавление контакта
                </h3>
                <button className="btn-link close" onClick={this.handleClose}>
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
  }
}

const mapStateToProps = state => {
  return {
    modalIsOpen: state.modal.isOpen,
  };
};

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);