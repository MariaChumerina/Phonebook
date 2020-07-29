import * as React from 'react';
import './Modal.css';

export default function Modal({ handleClose }) {
  const handleClickRemove = React.useCallback(() => handleClose(), [handleClose]);

  return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Добавление контакта</h3>
              <button className="btn-link close" onClick={handleClickRemove}>&#10005;</button>
            </div>
            <div className="modal-body">
              <div>
                <input
                    className="form-field"
                    list="json-datalist"
                    placeholder="Введите имя"
                />
              </div>
              <div>
                <input
                    className="form-field"
                    list="json-datalist"
                    placeholder="Введите номер телефона"
                />
              </div>
              <div>
                <button>
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}