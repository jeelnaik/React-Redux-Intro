import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {addPhrase} from "./js/actions/index"

function mapDispatchToProps(dispatch){
  return {
    addPhrase: phrase => dispatch(addPhrase(phrase))
  }
}

function mapStateToProps(state){
  return {
    phraseTranslated: state.phraseTranslated
  }
}

class ConnectApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: ' '
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault( )
    console.log("submit");
    this.props.addPhrase(this.state.phrase)
    console.log(this.props);
  }


  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    console.log(this.props);
    return (

      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400' alt="pig with butcher cut names in pig latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.handleSubmit}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.props.phraseTranslated}</p>
          </div>
        </main>
        <footer className="box footer">
          <div className="text-center">
            <p>Coded by Jeel and Samuel!!!</p>
          </div>
        </footer>
      </div>
    );
  }
}


const App = connect(mapStateToProps,mapDispatchToProps)(ConnectApp)
export default App;
