import React, {Component} from 'react';
import FormField from '../Form/FormField/FormField'
import Button from '../Button/Button'

import './Enter.css'

class Enter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: ''
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted and login is', this.state.login, ' password is', this.state.pass);
  }
  
  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }

  handlePassChange(event) {
    this.setState({pass: event.target.value});
  }
  
  render() {
    return (
      <div>
        <div style={{ margin: '150px auto 80px' }}>
          <div className='enter-block'>
            <form className="enter-body">
              <FormField text="Login" color='white'
                value={this.state.login} 
                onChange={this.handleLoginChange} />
              <FormField text="Password" color='white'
                value={this.state.pass} 
                onChange={this.handlePassChange} />
              <Button text="Log in" style="banner-button" onClick={this.handleSubmit}/>
            </form>
          </div>
          <div className='enter-block'>
            <p className='text-small'>
              Вы сможете обновить токен после входа в систему
            </p>
            <input type="text" placeholder='Токен' className="form-input-white enter-input" readOnly="readonly" />
            <Button text="Обновить токен" style="banner-button" />
          </div>
        </div>
      </div> 
    )
  }
}

export default Enter;