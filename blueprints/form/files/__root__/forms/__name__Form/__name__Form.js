import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Flex, Box } from 'reflexbox';
import { Button } from '~/components';
import validate from './validate';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  submitText: PropTypes.string,
};

const defaultProps = {
  submitText: 'Save',
};

class <%= pascalEntityName %>Form extends Component {
  render() {
    const { handleSubmit, invalid, pristine, submitting } = this.props;

    return (
      <Flex flexColumn>
        <Box>
          <Field
            name="TODO"
            hintText="TODO"
            component={TextField}
            fullWidth
          />
        </Box>

        <Box mt={2} flex justify="flex-end" align="center">
          <Button
            primary
            onClick={handleSubmit}
            disabled={pristine || submitting || invalid}
          >
            {this.props.submitText}
          </Button>
        </Box>
      </Flex>
    );
  }
}

<%= pascalEntityName%>Form.propTypes = propTypes;
<%= pascalEntityName%>Form.defaultProps = defaultProps;
const enhance = reduxForm({
  form: '<%= pascalEntityName %>Form',
  fields: [],
  validate,
});
export default enhance(<%= pascalEntityName %>Form);
