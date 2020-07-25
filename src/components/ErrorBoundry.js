import React, { Component} from 'react';

class ErrorBoundry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  compomentDidCatch(error, info) {
    this.setState({hasError: true})
  }

  render(){
    if (this.state.hasError){
      return <h1>Ooooops. That is not good</h1>
    }
    return this.props.children
  }
}

esport default ErrorBoundry;