

const Wish = ({wishlisttransfer}) => {

    const { bookName, author, image, totalPages, publisher, yearOfPublishing, rating, category, tags, review } =wishlisttransfer
    return (
        <div>
              <h1>{bookName}</h1>
              <img className="w-[450px] h-[450px]" src={image} alt="" />
        </div>
    );
};

export default Wish;