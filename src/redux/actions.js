import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//       id: uuidv4(),
//       name,
//       number
//     },
// });

const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number
  }
}));

const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };

// const addTodo = createAction('todos/add', text => ({
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// }));

// const deleteTodo = createAction('todos/delete');

// const changeFilter = createAction('todos/changeFilter');