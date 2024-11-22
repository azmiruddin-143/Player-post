import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

const Singlebook = ({booktransfer}) => {
    const {bookName,author,image,rating,category,tags,bookId} = booktransfer;
    return (
        <Link to={`/books/${bookId}`}>
      
        <div className="bg-stone-200 py-4 px-5 rounded-lg">
            <img className="w-[400px] h-[300px]" src={image} alt="" />
            <div className="flex gap-10 my-4">
                {
                 tags.map(tamap =><h2 className="bg-stone-100 py-1 px-4 rounded-md text-green-500" >{tamap}</h2> )
                }
            </div>
            <h1 className="text-black text-3xl my-2">{bookName}</h1>
            <p className="text-lg text-stone-600 my-3">by : {author}</p>
            {/* <hr /> */}

            <div className="flex justify-between my-3 border-t border-dashed">
                <h1>{category}</h1>
                <h1>{rating}</h1>
            </div>
        </div>
        </Link>
    );
};

Singlebook.propTypes = {
    booktransfer: PropTypes.object.isRequired
}

export default Singlebook;