import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

import BarBottom from '../../components/BarBottom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import {updateForm} from './library.module';
import Option from './options';

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
    type: 'radio',
    name: 'type',
    label: 'Book Type',
    placeholder: 'Select Book Type',
    options: Option.BOOK_TYPES,
    required: true,
  },
  {
    type: 'select',
    name: 'category',
    label: 'Category',
    optionKeys: 'form.type',
    placeholder: 'Select Book Type before selecting Book Category',
    options: (item) => {
      if (typeof item === 'string') {
        return Option.BOOK_CATEGORIES[item];
      }
      if (item && item.value) {
        return Option.BOOK_CATEGORIES[item.value];
      }
      return [];
    },
    required: true,
  },
  {
    type: 'select',
    name: 'language',
    label: 'Language',
    placeholder: 'Select Language for Book',
    options: Option.BOOK_LANGUAGES,
    required: true,
  },
  {
    type: 'date',
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
    type: 'file',
    name: 'image',
    label: 'Image',
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

  fileHandler = () => (files) => {
    console.log(files);
  };

  selectHandler = () => (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <div className="cloumn large-6 medium-6 small-12">
          <Form>
            {schema.map((item) => {
              const value = get(this.props, ['form', item.name]);
              return (
                <Input
                  {...item}
                  value={value}
                  handler={this.handler(item)}
                  fileHandler={this.fileHandler(item)}
                  selectHandler={this.selectHandler(item)}
                  options={
                    typeof item.options === 'function'
                      ? item.options(get(this.props, item.optionKeys))
                      : item.options
                  }
                />
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
