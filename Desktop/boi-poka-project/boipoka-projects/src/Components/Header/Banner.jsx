
import bannerimage from '../../assets/books.jpg'
const Banner = () => {
    return (


        <div className="my-5">
            <div className="hero bg-base-200 py-20  min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerimage} />
                    <div>
                        <h1 className="text-5xl w-8/12 font-bold leading-tight">Books to freshen up your bookshelf</h1>
                       
                        <button className="btn bg-[#2cbf58] my-5 text-white font-bold ">View The List</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;