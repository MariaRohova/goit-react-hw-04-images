import { Component } from 'react';
import { ModalWindow, Overlay } from './Styled';

export class Modal extends Component {
  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <Overlay className="Overlay" onClick={this.onBackdropClick}>
        <ModalWindow className="Modal">
          <img src={this.props.url} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
