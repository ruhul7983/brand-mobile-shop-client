import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const AddBanner = () => {
    const handleAddBanner = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const banner = {name,photoUrl};
        console.log(name,photoUrl);
        fetch("https://brand-mobile-shop.onrender.com/banner",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(banner),
        }).
        then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
        form.reset();
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleAddBanner}>
                <div className="mt-16 text-center max-w-md mx-auto px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Add Banner</h2>
                    <div className="text-left">
                        <h2 className="font-semibold mt-9">Banner Name</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="name" id="" required placeholder="Banner Name" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Photo Url</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="photoUrl" id="" required placeholder="Enter photo url" />
                    </div>
                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Add Banner</button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddBanner;