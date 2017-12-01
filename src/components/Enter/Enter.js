import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormField from '../Form/FormField/FormField'
import Button from '../Button/Button'
import R from 'ramda'

import './Enter.css'

import {
  postLogin
} from '../../actions';

class Enter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  handleSubmitLogIn(event) {
    event.preventDefault();
    this.props.postLogin(this.state);
  }

  handleSubmitRegister(event) {
    event.preventDefault();
    this.props.postLogin(this.state);
  }
  
  handleLoginChange(event) {
    this.setState({email: event.target.value});
  }

  handlePassChange(event) {
    this.setState({password: event.target.value});
  }
  
  render() {
    return (
      <div>
        <div style={{ margin: '150px auto 80px' }}>
          <div className='enter-block'>
            <form className="enter-body">
              <FormField text="Email" color='white'
                value={this.state.email}
                onChange={this.handleLoginChange} />
              <FormField text="Password" color='white'
                value={this.state.password} 
                onChange={this.handlePassChange} />
              <Button text="Log in" btnStyle="banner-button" onClick={this.handleSubmitLogIn}/>
              <Button text="Register" btnStyle="banner-button" onClick={this.handleSubmitRegister}/>
            </form>
          </div>
          <div className='enter-block'>
            <p className='text-small'>
              Вы сможете обновить токен после входа в систему
            </p>
            <input type="text" placeholder='Токен' id='token' value={this.props.token}
              className="form-input-white enter-input" readOnly="readonly" />
          </div>
        </div>
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
};

const mapDispatchToProps = {
  postLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Enter);