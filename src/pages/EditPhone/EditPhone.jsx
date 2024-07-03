import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const EditPhone = () => {
    const loadedPhone = useLoaderData();
    const handleEditPhone =(e)=>{
        e.preventDefault();
        const form = e.target;
        
        const brand = form.brand.value;
        const phoneName = form.phoneName.value;
        const details = form.details.value;
        const stock = form.stock.value;
        const regularPrice = form.regularPrice.value;
        const offerPrice = form.offerPrice.value;
        const chipset = form.chipset.value;
        const photoUrl = form.photoUrl.value;
        const storage = form.selectedStorage.value;
        const ram = form.selectedRam.value;
        const variant = form.selectedVariant.value;
        const phone = {brand,phoneName,details,stock,regularPrice,offerPrice,chipset,photoUrl,storage,ram,variant};

        fetch(`https://brand-mobile-shop.onrender.com/phones/${loadedPhone._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(phone),
        }).
        then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleEditPhone}>
                <div className="mt-16 text-center max-w-md mx-auto px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Edit Phone Details</h2>
                    <div className="text-left">
                        <label className="font-semibold mt-9">
                            Pick Mobile Brand Name: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="brand" defaultValue={loadedPhone.brand}>
                                <option value="">Select Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Motorola">Motorola</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Realme">Realme</option>
                                <option value="OnePlus">OnePlus</option>
                                <option value="Google">Google</option>
                                <option value="Infinix">Infinix</option>
                            </select>
                        </label>
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Phone Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="phoneName" defaultValue={loadedPhone.phoneName} id="" required placeholder="Enter phone name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Phone details</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="details" defaultValue={loadedPhone.details} id="" required placeholder="Enter Details" />
                    </div>

                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Stock</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="number" name="stock" defaultValue={loadedPhone.stock} id="" required placeholder="Enter stock" />
                    </div>

                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Regular Price</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="number" name="regularPrice" defaultValue={loadedPhone.regularPrice} id="" required placeholder="Enter Regular Price" />
                    </div>

                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Offer Price</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="number" name="offerPrice" defaultValue={loadedPhone.offerPrice} id="" required placeholder="Enter Offer Price" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Enter Chipset</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="chipset" id="" defaultValue={loadedPhone.chipset} required placeholder="Enter Chipset" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Photo Url</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="photoUrl" id="" defaultValue={loadedPhone.photoUrl} required placeholder="Enter Photo Url" />
                    </div>

                    <div className="text-left">
                        <label className="font-semibold mt-9">
                            Storage: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="selectedStorage" defaultValue={loadedPhone.storage}>
                                <option value="">Select Storage</option>
                                <option value="32 GB">32 GB</option>
                                <option value="64 GB">64 GB</option>
                                <option value="128 GB">128 GB</option>
                                <option value="256 GB">256 GB</option>
                                <option value="512 GB">512 GB</option>
                                <option value="1 TB">1 TB</option>
                                <option value="2 Tb">2 TB</option>
                            </select>
                        </label>
                    </div>
                    <div className="text-left">
                        <label className="font-semibold mt-9">
                            Ram: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="selectedRam" defaultValue={loadedPhone.ram}>
                                <option value="">Select Ram</option>
                                <option value="2 GB">2 GB</option>
                                <option value="3 GB">3 GB</option>
                                <option value="4 GB">4 GB</option>
                                <option value="8 GB">8 GB</option>
                                <option value="16 GB">16 GB</option>
                                <option value="32 GB">32 GB</option>
                            </select>
                        </label>
                    </div>
                    <div className="text-left">
                        <label className="font-semibold mt-9">
                            Enter Variant: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="selectedVariant" defaultValue={loadedPhone.variant}>
                                <option value="">Select Variant</option>
                                <option value="USA">USA</option>
                                <option value="Global">Global</option>
                                <option value="International">International</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Indian">Indian</option>
                                <option value="Bangladeshi">Bangladeshi</option>
                            </select>
                        </label>
                    </div>
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Edit Phone</button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default EditPhone;