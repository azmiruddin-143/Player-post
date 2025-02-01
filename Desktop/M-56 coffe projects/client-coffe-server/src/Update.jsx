import { useLoaderData } from "react-router-dom";

const Update = () => {

    const upLoader = useLoaderData()
    const { _id, name, chef, taste, photo } = upLoader;

    const  formUpdate = (e) =>{
       e.preventDefault()
       const form = e.target
       const name = form.name.value
       const chef = form.chef.value
       const upObj = {name,chef}
       console.log(upObj);
       fetch(`http://localhost:5000/coffes/${_id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(upObj),
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
       })

    }

    return (
        <div>

            <form onSubmit={formUpdate}  action="">
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
                    </div>
                </div>

                <button>Update Data</button>
            </form>
        </div>
    );
};

export default Update;