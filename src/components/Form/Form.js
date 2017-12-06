import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'
import FormField from './FormField/FormField'

import './Form.css';

import {postForm} from '../../actions';

const descr = "Have questions? Want to order? Please, feel free to contact us.";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      theme: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    if (event.target.placeholder === "Name") {
      this.setState({name: event.target.value});
    }
    if (event.target.placeholder === "Email") {
      this.setState({email: event.target.value});
    }
    if (event.target.placeholder === "Theme") {
      this.setState({theme: event.target.value});
    }
    if (event.target.placeholder === "Message") {
      this.setState({message: event.target.value});
    }
  }

  handleSubmitForm(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.postForm(this.state);
  }

    render() {
      return (
    <Wrapper
      header="Contact us" descr={descr} tag="form" wrpStyle='main'>
        <form className="form-body">
          <FormField text="Name" color='black' onChange={this.handleChange}/>
          <FormField text="Email" color='black' onChange={this.handleChange}/>
          <FormField text="Theme" color='black' onChange={this.handleChange}/>
          <FormField isBig='1' text="Message" color='black' className='textarea-big' 
            onChange={this.handleChange}/>
          <Button text="Отправить" btnStyle="form-button" onClick={this.handleSubmitForm}/>
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
