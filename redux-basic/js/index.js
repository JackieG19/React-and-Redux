const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

function myreducer(state = initState, action){
  if (action.type == 'ADD_TODO') {
    return {
      todos: [...state.todos, action.todo]
    }
  }
}

const store = createStore(myreducer);

store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
})

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction)


// console

// "state updated"

// Object {
//   todos: ["buy milk"]
// }
