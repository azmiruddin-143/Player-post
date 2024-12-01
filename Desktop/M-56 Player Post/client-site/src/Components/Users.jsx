import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Users = () => {
    const allUserLoader = useLoaderData()
    return (
        <div>
            <h1>Users {allUserLoader.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>created At</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                       {
                        allUserLoader.map(user =>
                            <tr>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user.metaTime ?user.metaTime : "Not Available"  } </td>
                        </tr>
                        )
                       }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;