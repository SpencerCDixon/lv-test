import React, { Component, PropTypes } from 'react';
import { SelectionBox } from '~/components';
import { Flex, Box } from 'reflexbox';

const propTypes = {
};

class ParagraphSelect extends Component {
  render() {
    const { input: { value, onChange }, paras } = this.props

    return (
      <Flex>
        {paras.map(({val, content}) => (
          <SelectionBox 
            mx={1}
            key={val} 
            onClick={() => onChange(val)} 
            style={{width: '50%'}}
            active={val === value}
          >
            {content}
          </SelectionBox>
        ))}
      </Flex>
    );
  }
}

ParagraphSelect.propTypes = propTypes;
export default ParagraphSelect;
