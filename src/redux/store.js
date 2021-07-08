import { combineReducers, createStore } from 'redux';
import contacts from '../contacts';
import { createReducer, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import actions from './actions';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import types from './types'


// const contactsList = (state = contacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
];



// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const contactsList = createReducer(contacts, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// if (contactsList.includes(contactName)) {
//       alert(`${contactName} is already in contacts`)
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, newContact],
//       }));

const filter = createReducer('', {
  [actions.changeFilter]: (_, {payload}) => payload
})

// const combineReducer = combineReducers({
//   contacts: contactsList,
//   filter
// });

const persistConfig = {
  key: contacts,
  storage
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  contacts: contactsList,
  filter
}))

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// const store = createStore(combineReducer);

export default { store, persistor};

// const items = createReducer([], {
//   [actions.addTodo]: (state, { payload }) => [...state, payload],
//   [actions.deleteTodo]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [actions.toggleCompleted]: (state, { payload }) =>
//     state.map(todo =>
//       todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
//     ),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });