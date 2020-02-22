import {createStore} from "redux"
import {rootReducer} from "../reducers/index"


// createStore is a fucntion from redux library
// createStore takes reducer as a first argument.
//createStore may take initial state as a second argument.

//State in the react comes from the Reducer. Reducers produce the state of your application.
const store = createStore(rootReducer);

export default store;
