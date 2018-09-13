const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

function myreducer(state = initState, action){
  console.log(action, state);
}

const store = createStore(myreducer);

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction)


// Console

//  Object {
//  type: "@@redux/INIT9.k.9.e.l.8"
//  } Object {
//    posts: []
//    todos: []
//  }
// ___________________________________

//  Object {
//  todo: "buy milk",
//  type: "ADD_TODO"
//  } Object {
//    posts: []
//    todos: []
//  }
