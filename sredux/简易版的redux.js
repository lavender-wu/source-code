const redux = require('redux');

const store = createStore(reducerFn);

// 更新store的reducer函数
function reducerFn(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUB':
      return state + 1;
    default:
      return state;
  }
}

// 订阅 state 并推送给view
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('courter').innerHTML = state;
});

const actions = {
  add: {
    type: 'ADD';
  },
  sub: {
    type: 'SUB';
  }
};

// view监听
document.querySelector('#addButton').addEventListener('click', () => {
  store.dispatch(actions.add);
});

document.querySelector('#subButton').addEventListener('click', () => {
  store.dispatch(actions.sub);
});