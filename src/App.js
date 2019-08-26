import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    inputContent: ''
  }

  contentChangedHandler = (event) => {
    let inputContent = {...this.state.inputContent};
    inputContent = event.target.value;
    this.setState({inputContent: inputContent});
  }

  deleteCharHandler = (index) => {
    const content = this.state.inputContent.split('');
    content.splice(index,1);
    const newInputContent = content.join('');
    this.setState({inputContent: newInputContent}); 
  }

  render() {
    let arrayInputContent = this.state.inputContent;
    return (
      <div className="App">
        <input 
        type="text"
        onChange={(event) => this.contentChangedHandler(event)}
        value={this.state.inputContent}
        />
        <p>{this.state.inputContent}</p>
        <ValidationComponent length={this.state.inputContent.length}/>
        {
          arrayInputContent.split('').map((el, index) => {
            return <CharComponent
                      character={el}
                      key={index}
                      onClick={() => this.deleteCharHandler(index)}
                    />
          })
        }
      </div>
    );
  };
  
}

export default App;
