import {createStore} from 'redux';
  

let studentattendance = {
    Sweta: 0,
    Vinay: 0,
    Vatsal: 0,
    Ronak: 0

}

function reducer(state, action){
    let newState = Object.assign({}, state || studentattendance)
    if(action.type === "INCREMENT") {
        newState[action.value] += 1;
    }

    if(action.type === "DECREMENT") {
        newState[action.value] -= 1;
    }
     
    // if(action.type === "NAME"){
    //     newState[action.value] === 
    // }

    return newState;

}

var store = createStore(reducer);


export default store;