
import { useEffect, useState } from "react";
import Singlebook from "./Singlebook";


const Book = () => {

    const [book, setbook] = useState([]);
    useEffect(() => {
        fetch("Books.json")
            .then(peb => peb.json())
            .then(data => setbook(data))

    }, [])

    return (
        <div className="grid grid-cols-3 place-items-center gap-y-8 my-12">
            
            {
              book.map(bookloop => <Singlebook key={bookloop.bookId} booktransfer = {bookloop} ></Singlebook> )
            }
        </div>
    );
};

export default Book;