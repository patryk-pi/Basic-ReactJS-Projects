import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import Book from "./book";

import './index.css'

/*

const Greeting = () => {
    return (
        <>
            <Person />
            <Message />
        </>
    )
}

const Person = () => <h2>John Doe</h2>
const Message = () =>  {
    return <p>This is my message</p>
}
*/


// Druga wersja z React.createElement (element, props, wartosc)
/*const Greeting = () => {
    return React.createElement(h2, {}, 'hello world')
}*/


const root = ReactDOM.createRoot(document.getElementById('root'));


const BookList = () => {
    return (
        <>
            <h1> Amazon Best Sellers</h1>
            <section className='booklist'>
                {books.map(({title, author, img, id}, index) => {
                    return (
                        <Book key={id} img={img} author={author} title={title} index={index}/>
                    )
                })}
            </section>
        </>
    )
};


// INNA OPCJA
/*const Book = ({ img, title, author }) => {
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
};*/


/*const Image = (props) => <img src={props.img} alt="book cover"/>;
const Title = (props) => {
    return <h2>{props.title}</h2>
};

const Author = (props) => {
    return <h4>{author.toUpperCase()}</h4>;
}*/

root.render(<BookList/>)
