import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const UpdatePhone = () => {
    const loadedPhones = useLoaderData();
    const [phones,setPhones] = useState(loadedPhones);
    const handleDeletePhone = (id)=>{
        console.log(id);
        fetch(`https://brand-mobile-shop.onrender.com/phones/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = phones.filter(phone => phone._id !== id);
            setPhones(remaining);
        })
    }




    return (
        <div>
            <Navbar></Navbar>
           <div className="overflow-x-auto">
                    <table className="table table-xs">
                      <thead>
                        <tr>
                          <th className="text-lg">Sl.</th>
                          <th className="text-lg">Phone Name</th>
                          <th className="text-lg">Ram</th>
                          <th className="text-lg">Storage</th>
                          <th className="text-lg">Variant</th>
                          <th className="text-lg">Stock</th>
                          <th className="text-lg">Action</th>
                        </tr>
                      </thead>
                      {
                        phones.map((phone,index)=><tbody key={phone._id}>
                            <tr className="">
                              <th className="text-lg">{index+1}</th>
                              <td className="text-lg">{phone.phoneName}</td>
                              <td className="text-lg">{phone.ram}</td>
                              <td className="text-lg">{phone.storage}</td>
                              <td className="text-lg">{phone.variant}</td>
                              <td className="text-lg">{phone.stock}</td>
                              <td className="text-lg"><div className="flex gap-x-2">
                                    <button onClick={()=>handleDeletePhone(`${phone._id}`)}>x</button>
                                    <Link to={`/edit-phone/${phone._id}`}>Edit</Link>
                                </div></td>
                            </tr>
                          </tbody>)
                      }
                    </table>
                  </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdatePhone;