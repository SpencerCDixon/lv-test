import React from 'react';
import { Gateway } from 'react-gateway';
import ReactModal2 from 'react-modal2';
import { css } from 'glamor';

const backdrop = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.8)',
});

const modal = css({
  position: 'relative',
  top: '50%',
  transform: 'translate(0, -50%)',
  maxWidth: 400,
  margin: '0 auto',
  padding: 20,
  background: 'white',
  borderRadius: '3px',
  outline: 'none',
});

class Modal extends React.Component {
  static propTypes = {
    onClose: React.PropTypes.func.isRequired,
    closeOnEsc: React.PropTypes.bool,
    closeOnBackdropClick: React.PropTypes.bool
  };

  render() {
    return (
      <Gateway into="modal">
        <ReactModal2
          onClose={this.props.onClose}
          closeOnEsc={this.props.closeOnEsc}
          closeOnBackdropClick={this.props.closeOnEsc}
          backdropClassName={backdrop}
          modalClassName={modal}
        >
          {this.props.children}
        </ReactModal2>
      </Gateway>
    );
  }
}
Modal.defaultProps = {
  closeOnEsc: true,
  closeOnBackdropClick: true,
  onClose: () => {},
};
export default Modal;
