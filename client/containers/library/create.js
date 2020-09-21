import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

import BarBottom from '../../components/BarBottom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import {updateForm} from './library.module';

const schema = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    required: true,
  },
  {
    type: 'text',
    name: 'author',
    label: 'Author',
    required: true,
  },
  {
    type: 'text',
    name: 'category',
    label: 'Category',
    required: true,
  },
  {
    type: 'text',
    name: 'published_date',
    label: 'Published Date',
    required: true,
  },
  {
    type: 'text-area',
    name: 'descreption',
    label: 'Description',
    textareaRows: 4,
  },
  {
    type: 'text',
    name: 'image',
    label: 'Image',
    required: true,
  },
];
export class Create extends React.Component {
  submit = () => {
    console.log('Submit Value');
  };

  handler = (item) => (value) => {
    this.props.updateForm({
      [item.name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="cloumn large-6 medium-6 small-12">
          <Form>
            {schema.map((item) => {
              const value = get(this.props, ['form', item.name]);
              return (
                <Input {...item} value={value} handler={this.handler(item)} />
              );
            })}
          </Form>
        </div>
        <BarBottom>
          <button type="button" className="button" onClick={this.submit}>
            Submit
          </button>
        </BarBottom>
      </>
    );
  }
}

Create.propTypes = {
  updateForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  form: state.library.create,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: (data) => dispatch(updateForm(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
