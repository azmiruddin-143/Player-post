import { useContext } from "react";
import { authContext } from "../Auth Provider setup/AuthProvider";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const { user, myProfileUpdate, setuser } = useContext(authContext)

    const updateProfileForm = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const photourl = event.target.photourl.value

    
        // update Profile//
        myProfileUpdate({ displayName: name, photoURL: photourl })
            .then(() => {
                setuser({ ...user, displayName: name, photoURL: photourl })
                toast.success("Registration successful!", {
                    autoClose: 3000,
                });
                event.target.reset();
            })
            .catch((error) => {
                toast.error(`Update failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
    }


    return (
        <div>
            <div className="my-10 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={updateProfileForm} className="card-body">
                            <div className="flex gap-3 items-center">
                                <img className="w-[150px] rounded-full" src={user?.photoURL} alt="" />
                                <div className="space-y-3">
                                    <h1>Name : {user?.displayName}</h1>
                                    <h1>Email : {user?.email}</h1>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your  name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Enter your photourl" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#3c4483] text-white">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;