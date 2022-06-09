import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';
var books = require('./books.json');

console.log({books})
const initialState = books

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addBook(book) {
    dispatch({
      type: "ADD_BOOK",
      payload: book
    });
  }

  function editBook(book) {
    dispatch({
      type: "EDIT_BOOK",
      payload: book
    });
  }

  function removeBook(id) {
    dispatch({
      type: "REMOVE_BOOK",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        books: state.books,
        addBook,
        editBook,
        removeBook
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};