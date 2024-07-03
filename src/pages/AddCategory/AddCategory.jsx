import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const AddCategory = () => {
    const handleAddCategory = (e) => {
        e.preventDefault();
        const form = e.target;
        if(form.selectedPhone.value === ""){
           return alert("Select Phone Category");
        }
        const name = form.selectedPhone.value;
        const photoUrl = form.photoUrl.value;
        const link = name.toLowerCase();
        const category = { name, photoUrl, link };
        console.log(category);

        fetch("https://brand-mobile-shop.onrender.com/category", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(category),
        }).
            then(res => res.json())
            .then(data => {
                console.log(data);
            });
        form.reset();

    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleAddCategory}>
                <div className="mt-16 text-center max-w-md mx-auto px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Add Category</h2>
                    <div className="text-left">
                        <label  className="font-semibold mt-9">
                            Pick Mobile Brand Name: <br />
                            <select className="py-3 pl-2 pr-4 w-full" name="selectedPhone">
                                <option value="">Select Category</option>
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
                        {/* <input className="py-3 pl-2 pr-4 w-full" type="text" name="name" id="" required placeholder="Mobile Brand Name" /> */}
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Photo Url</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="text" name="photoUrl" id="" required placeholder="Enter photo url" />
                    </div>

                    <button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Add Category</button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddCategory;