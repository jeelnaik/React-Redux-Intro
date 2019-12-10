import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '',
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The translate function is where you will put your logic to convert the sentence entered by the user to pig location.  What is currently in the function will only directly copy what the user has entered.

   createArray = (str) =>{
      var pun =[]
      var index=[]
      var arr=[]
      var regex = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]";
      for (var i = 0; i < str.length; i++) {
          if (regex.includes(str[i])) {
              pun.push(str[i])
              index.push(i)
          }
      }

      console.log(regex);
      console.log(pun);
      console.log(index);
      let word="";
      for (var i = 0; i < str.length; i++) {
          if (pun.indexOf(str[i]) !== -1) {
              if (str[i] === " ") {
                  arr.push(word)
                  word = ""
              }else{
                  // arr.push(word)
                  if (word !== "") {
                      arr.push(word)
                  }
                  arr.push(str[i])
                  word = ""
              }

          }else{
              word += str[i]
          }
      }
      return arr;
  }

  translate = (e) => {
    e.preventDefault()
    let translated = this.state.phrase
    let answers="";
    let originalString = translated
    var regex = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]0123456789";
    // let words = translated.replace(regex, '')
    // let words = translated.split(/[^a-zA-Z]/g)

    const createArray = (str) =>{
          var pun =[]
          var index=[]
          var arr=[]
          var regex = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]0123456789";
          for (let i = 0; i < str.length; i++) {
              if (regex.includes(str[i])) {
                  pun.push(str[i])
                  index.push(i)
              }
          }

          // console.log(regex);
          // console.log(pun);
          // console.log(index);
          let word="";
          for (let i = 0; i < str.length; i++) {
              if (pun.indexOf(str[i]) !== -1) {
                  if (str[i] === " ") {

                      arr.push(word," ")
                      word = ""
                  }else{
                      // arr.push(word)
                      if (word !== "") {
                          arr.push(word)
                      }
                      arr.push(str[i])
                      word = ""
                  }

              }else{
                  word += str[i]
                  if (i === str.length-1) {
                      arr.push(word)
                  }
              }
          }
          return arr;
      }
    let words = createArray(translated)

    console.log("words:",words);
    // words starting with vowels "aeiou" add 'way' at the end of the string
    for (let i = 0; i < words.length; i++) {
        if (regex.includes(words[i]) !== true && words[i]!== "")
        {
            console.log("after first if");
            translated = words[i]
            console.log(translated,regex.includes(words[i]));
            let index = 0; // index stores the first index of the vowel.
            if ("aeiouAEIOU".includes(translated[0])) {
                translated = translated + "way"
                answers += translated
            }
            //words that does not start with vowels
            else{
                for (let i = 0; i < translated.length; i++) {
                // word starts with consonant and/or word start with Y
                console.log(translated.toLowerCase().search("y"));

                    if (translated.toLowerCase().indexOf("y") === 0 && i === 0) {
                        continue;
                    }

                    else if ("aeiouyAEIOUY".includes(translated[i])) {

                        if(translated[i] === 'u' && translated[i-1] === 'q'){
                            index= i+1
                            break;
                        } else{
                            index=i;
                            console.log("index:",index);
                            break;
                        }

                }
            }
                let slice1 = translated.slice(0,index) + "ay"       // slicing the consonants and adding ay to it.

                let slice2 = translated.slice(index)
                console.log("slice1:",slice1,"slice2:",slice2);
                answers += slice2+slice1

            }
        }
        else{
            // console.log(i,words[i-1].length,translated);
            answers += words[i] +" "
        }

}
    this.setState({phraseTranslated: answers})
  }

  handleChange = (e) => {
    this.setState({phrase: e.target.value})
  }

  render() {
    return (

      <div className="wrapper">
        <header className="box header">
          <div id="pigImage">
            <img src='https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400' alt="pig with butcher cut names in pig latin" id="butcherPig"></img>
          </div>
        </header>
        <sidebar className="box sidebar">
          <div>
            <form className="info" onSubmit={this.translate}>
              <label htmlFor="input-phrase">Translate this: </label>
              <input name="input-phrase" onChange={this.handleChange}></input>
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
        </sidebar>
        <main>
          <div className="text-center box content">
            <p>{this.state.phraseTranslated}</p>
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

export default App;
