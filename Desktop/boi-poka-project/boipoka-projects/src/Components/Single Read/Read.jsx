

const Read = ({storetransfer}) => {

    const { bookName, author, image, totalPages, publisher, yearOfPublishing, rating, category, tags, review } =storetransfer
    return (
        <div>
            <img className="w-[450px] h-[450px]" src={image} alt="" />
            <h1>{totalPages}</h1>
            <h1 className="text-3xl">{rating}</h1>
        </div>
    );
};

export default Read;