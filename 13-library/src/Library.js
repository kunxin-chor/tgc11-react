import React from "react";

export default class Library extends React.Component {
  state = {
    books: [
      {
        id: 101,
        title: "Dune",
        author: "Frank Herbert",
        genre: "science-fiction",
        tags: ["futuristic", "classic"]
      },
      {
        id: 102,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R Tolkien",
        genre: "fantasy",
        tags: ["doorstopper", "trilogy"]
      }
    ],
    book_id:0,
    title: "",
    author: "",
    genre: "",
    tags: [],
    editingBook:false
  };

  addBook = () => {
    let newBookObject = {
      id: Math.floor(Math.random() * 100000) + 99999,
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      tags: this.state.tags
    };

    // let cloned the original array
    let clone = this.state.books.slice();

    // change the clone
    clone.push(newBookObject);

    // put the clone back into the state
    this.setState({
        'books':clone
    })

    // const { title, author, genre, tags } = this.state;
    // let newBookObject = { 
    //     id: Math.floor(Math.random() * 100000) + 9999,
    //     title, author, genre, tags
    //  };
  };

  updateBook = () => {
      let modifiedBook = {
          id: this.state.book_id,
          title: this.state.title,
          author: this.state.author,
          genre: this.state.genre,
          tags: this.state.tags
      }

      // clone the original array
      let clone = this.state.books.slice();

      // change the array
      let index = -1;
      for (let i =0; i < this.state.books.length; i++) {
          let currentBook = this.state.books[i];
          if (currentBook.id == modifiedBook.id) {
              index = i;
              break;
          }
      }

      clone[index] = modifiedBook;

      // put the array back into the state
      this.setState({
          'books': clone
      })
  };

  displayEditBook = (book) => {
      this.setState({
          editingBook:true,
          title: book.title,
          author: book.author,
          genre: book.genre,
          tags: book.tags,
          book_id:book.id
      })
  };

  cancelEditBook = () => {
      this.setState({
          'editingBook': false,
          'title': '',
          'author': '',
          'genre': '',
          'tags':''
      })
  };

  updateFormField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayBooks = () => {
    let bookList = [];
    for (let b of this.state.books) {
      bookList.push(
        <div key={b.id}>
          <ul>
            <li>ID: {b.id}</li>
            <li>Title: {b.title}</li>
            <li>Author: {b.author}</li>
            <li>Genre:{b.genre}</li>
            <li>Tags: {b.tags.join(",")}</li>
            <li>
                <button onClick={()=>{
                    this.displayEditBook(b)
                }}>Edit</button>
            </li>
          </ul>
        </div>
      );
    }

    // must return of an array of JSX elements
    return bookList;
  };

  updateTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  updateAuthor = e => {
    this.setState({
      author: e.target.value
    });
  };

  updateGenre = e => {
    this.setState({
      genre: e.target.value
    });
  };

  updateTags = e => {
    if (this.state.tags.includes(e.target.value) === false) {
      // case 1: the tag is not in the array
      // since not in array, we add to the array
      let clone = this.state.tags.slice();

      clone.push(e.target.value);

      this.setState({
        tags: clone
      });
    } else {
      // case 2: the tag already is in the array
      // means we remove from the array
      const clone = this.state.tags.slice();

      // find the index to remove
      const index = this.state.tags.indexOf(e.target.value);

      // remove the index from the clone
      // splice will modify the calling array
      clone.splice(index, 1); // this does not change the array in an immutable manner
      // this can lead potential side effects

      this.setState({
        tags: clone
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col">{this.displayBooks()}</div>

          <div className="col">
            <h3>Add Book</h3>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                onChange={this.updateTitle}
                value={this.state.title}
              />
            </div>
            <div>
              <label>Author</label>
              <input
                type="text"
                name="author"
                onChange={this.updateAuthor}
                value={this.state.author}
              />
            </div>
            <div>
              <label>Genre</label>
              <input
                type="radio"
                name="genre"
                value="fantasy"
                checked={this.state.genre === "fantasy"}
                onChange={this.updateGenre}
              />
              <label>Fantasy</label>
              <input
                type="radio"
                name="genre"
                value="science-fiction"
                checked={this.state.genre === "science-fiction"}
                onChange={this.updateGenre}
              />
              <label>Science Fiction</label>
              <input
                type="radio"
                name="genre"
                value="romance"
                checked={this.state.genre === "romance"}
                onChange={this.updateGenre}
              />
              <label>Romance</label>
            </div>
            <div>
              <label>Tags</label>
              <input
                type="checkbox"
                name="tags"
                value="classic"
                onChange={this.updateTags}
                checked={this.state.tags.includes('classic')}
              />
              <label>Classic</label>
              <input
                type="checkbox"
                name="tags"
                value="doorstopper"
                onChange={this.updateTags}
                checked={this.state.tags.includes('doorstopper')}
              />
              <label>Doorstopper</label>
              <input
                type="checkbox"
                name="tags"
                value="futuristic"
                onChange={this.updateTags}
                   checked={this.state.tags.includes('futuristic')}
              />
              <label>futuristic</label>
              <input
                type="checkbox"
                name="tags"
                value="trilogy"
                onChange={this.updateTags}
                checked={this.state.tags.includes('trilogy')}
              />
              <label>trilogy</label>
            </div>
            {this.displayControls()}
          </div>
        </div>
      </React.Fragment>
    );
  }

  displayControls = () => {
    if (this.state.editingBook == false) {
        return <button onClick={this.addBook}>Add Book</button>;
    } else {
        return (
            <React.Fragment> 
                <button onClick={this.updateBook}>Update Book</button>
                <button onClick={this.cancelEditBook}>Cancel</button>
            </React.Fragment>
        )
        
    }
  }
}
