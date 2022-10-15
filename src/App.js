import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import CreateProject from './CreateProject';
import ProjectType from './ProjectType';
import View from './View';
import Access from './Access';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      step: 0
    }
  }

  prevStep(){
    this.setState({step: this.state.step-1})
    console.log(this.state.step);
  }


  nextStep(){
    this.setState({step: this.state.step+1})
    console.log(this.state.step);
  }

  render(){
    switch(this.state.step){
      case 1:
        return <ProjectType prevStep={() => this.prevStep()} nextStep={() => this.nextStep()} step={this.state.step} />
      case 2:
        return <View prevStep={() => this.prevStep()} nextStep={() => this.nextStep()} step={this.state.step} />
      case 3:
        return <Access prevStep={() => this.prevStep()} nextStep={() => this.nextStep()} step={this.state.step} />
      default:
        return <CreateProject nextStep={() => this.nextStep()} step={this.state.step} />
    }
  }
}
export default App;
