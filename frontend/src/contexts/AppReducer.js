export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_BOOK":
        return {
          ...state,
          books: [...state.books, action.payload],
        };
  
      case "EDIT_BOOK":
        const updatedBook = action.payload;
  
        const updatedBooks = state.books.map((book) => {
          if (book.id === updatedBook.id) {
            return updatedBook;
          }
          return book;
        });
  
        return {
          ...state,
          books: updatedBooks,
        };
  
      case "REMOVE_BOOK":
        return {
          ...state,
          books: state.books.filter(
            (book) => book.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };