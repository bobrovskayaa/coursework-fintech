import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormField from '../Form/FormField/FormField'
import Button from '../Button/Button'

import './Enter.css'

import {postLogin} from '../../actions';

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
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  handleSubmitLogIn(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'block';
    this.props.postLogin(this.state);
    document.getElementById('loader').style.display = 'none';
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
        <div className='enter-wrapper'>
          <div className='enter-block'>
            <form className="enter-body">
              <FormField text="Email" color='white'
                value={this.state.email}
                onChange={this.handleLoginChange} />
              <FormField text="Password" color='white'
                value={this.state.password} 
                onChange={this.handlePassChange} />
              <Button text="Log in" btnStyle="banner-button" onClick={this.handleSubmitLogIn}/>
            </form>
          </div>
          <div className='enter-block'>
            <p className='text-small'>
              Токен обновится через некоторое время после входа в систему
            </p>
            <textarea type="text" placeholder='Токен' id='token' value={this.props.token}
              className="form-input-white enter-input" readOnly="readonly" />
            <p className='text-small' id='loader' style={{ display: 'none' }}>Loading&hellip;</p>
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