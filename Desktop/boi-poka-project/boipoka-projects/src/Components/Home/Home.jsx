import Book from "../Books/Book";
import Banner from "../Header/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Book Laibery</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Book></Book>
            </div>
        </div>
    );
};

export default Home;