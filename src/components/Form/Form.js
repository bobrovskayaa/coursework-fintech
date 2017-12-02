import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'
import FormField from './FormField/FormField'

import './Form.css';

import {postForm} from '../../actions';

const descr = "Have questions? Want to order? Please, feel free to contact us.";


class Form extends Component {
    render() {
      return (
    <Wrapper
      header="Contact us" descr={descr} tag="form" wrpStyle='main'>
        <form className="form-body">
          <FormField text="Name" color='black' />
          <FormField text="Mail" color='black' />
          <FormField text="Theme" color='black' />
          <FormField isBig='1' text="Message" color='black' className='textarea-big' />
          <Button text="Отправить" btnStyle="form-button" />
        </form>
    </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    form: state.form
  }
};

const mapDispatchToProps = {
  postForm
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
