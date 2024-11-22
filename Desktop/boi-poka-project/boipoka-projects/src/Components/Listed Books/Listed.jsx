
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Localstorage/Utilitis';
import Read from '../Single Read/Read';
import Wish from '../Wishlist/Wish';



const Listed = () => {

    const [store, setStore] = useState([])

    // const [sortData, setsortData] = useState('')


    const listdata = useLoaderData()

    useEffect(() => {

        const storreadBook = getStoredReadList()
        const storenewbook = storreadBook.map(id => parseInt(id))

        const dataincluds = listdata.filter(books => storenewbook.includes(books.bookId))
        setStore(dataincluds)
    }, [])


    const shortbtn = () => {
            const datashort = [...store].sort((a, b) => b.totalPages - a.totalPages)
            setStore(datashort)
        
    }
    const shortbtn2 = () => {
            const datashort = [...store].sort((a, b) => b.rating - a.rating)
            setStore(datashort)
        
    }

    return (
        <div className='mx-24'>
            <h1>All Listed</h1>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                     <h1>click</h1>
                    {/* {

                        sortData ?`Sort by : ${sortData}` : "Sort by"

                    } */}
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={shortbtn}><a> Short By pages</a></li>
                    <li onClick={shortbtn2}><a> Short By rating</a></li>
    
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 my-10'>
                        {
                            store.map(storeloop => <div><Read storetransfer={storeloop} ></Read>  </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <div className='grid grid-cols-3 my-10'>
                        {
                            store.map(wishstore => <Wish wishlisttransfer={wishstore}></Wish>)
                        }

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Listed;