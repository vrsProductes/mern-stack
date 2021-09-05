/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Button, Card, CardBody,CardBlock, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import history from '../../index';
import axios from 'axios';



class Login extends Component {
  
  constructor(props) {
    super(props);
  

      this.login = {};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlechange = this.handlechange.bind(this);
  };

  handlechange (event) {
    this.login[event.target.name] = event.target.value;
      this.setState(this.login);
  };

  handleSubmit (){
    // axios.post('http://localhost:9090/userlogin',{params:this.login}).then((response)=>{
    //   console.log(response)
    //   if(response.data !== null){
    //     localStorage.setItem('loginDetails',JSON.stringify(response.data));
    //     history.push('/dashboard');
    //   }
    // }).catch((error) => {
    //   console.log(error);
    // })

    
    if(this.login.email === "vempallavenkaiah@gmail.com"){
      history.push('/dashboard')
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center login">
        <Container>
          <div className="text-center mb-5">
          <img src="img/sos-logo.png"  className='custom-logo'/>
          </div>
          <MuiThemeProvider>
            <Row className="justify-content-center">
              <Col md="6">
                <CardGroup className="mb-0">
                  <Card className="p-4">
                  <CardBlock className="card-body">

                      <h3 className="text-center">User Login</h3>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="email" onChange={this.handlechange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={this.handlechange}/>
                      </InputGroup>
                      <RaisedButton label="Login" type="submit" className="mb-2" primary={true} fullWidth={true}  onClick={this.handleSubmit}/>
                      <FlatButton label="Forgot Password?" primary={true} fullWidth={true} />   
                  </CardBlock>                 
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </MuiThemeProvider>
        </Container>
      </div>
    );
  }
}

export default Login;
