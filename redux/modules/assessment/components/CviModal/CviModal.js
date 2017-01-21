import React, { Component, PropTypes } from 'react';
import CviResultsForm from '~/forms/CviResultsForm';
import { Modal, H1 } from '~/components';

const propTypes = {
  onClose: PropTypes.func.isRequired,
};

class CviModal extends Component {
  handleSubmit = () => alert('submitted')

  render() {
    const { onClose } = this.props;
    return (
      <Modal onClose={onClose}>
        <CviResultsForm onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}

CviModal.propTypes = propTypes;
export default CviModal;
