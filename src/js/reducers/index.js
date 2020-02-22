import { ADD_PHRASE } from "../constants/action-types";

const initialState = {
    phrase: '',
    phraseTranslated: ''
}

export function rootReducer(state = initialState , action){
  if (action.type === ADD_PHRASE) {
      console.log(action.payload);
      let ans = translate(action.payload)
      return Object.assign('',state,{
        phraseTranslated: state.phraseTranslated.concat(ans)
      })
  }
  return state;
}


function translate(translated){
  let words = createArray(translated)
  return translated.toUpperCase()
}

function createArray(translated){
  return translated.split(/\s*\b\s*/)
}
