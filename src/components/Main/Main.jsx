import * as React from 'react';
import List from '../List/List.jsx';
import Search from '../Search/Search.jsx';
import Modal from '../Modal/Modal.jsx';
import './Main.css';

export default class Main extends React.Component {
  state = {
    modalIsOpen: false,
  }

  handleClick = () => {
    const { modalIsOpen } = this.state;
    this.setState({ modalIsOpen: !modalIsOpen });
  }

  handleClose = () => {
    const { modalIsOpen } = this.state;
    this.setState({ modalIsOpen: !modalIsOpen });
  }

  render() {
    const { modalIsOpen } = this.state;
    return (
        <div className="margin-top-50">
          {modalIsOpen && <Modal handleClose={this.handleClose}/>}
          <h1>
            Телефонный справочник
          </h1>
          <Search />
          <div className="contacts-container margin-top-50">
            <div className="contacts-title-container">
              <h2>
                Контакты
              </h2>
              <button className="btn-link btn-link-position" onClick={this.handleClick}>
                &#43;
              </button>
            </div>
            <List />
          </div>
        </div>
    );
  }
}