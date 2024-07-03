import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const PhoneDetails = () => {
    const phone = useLoaderData();
    const {_id,brand,phoneName,details,stock,regularPrice,offerPrice,chipset,photoUrl,storage,ram,variant} = phone;
    const stockInt = parseInt(stock);
    let newStock = "Stock Available";

    if(stockInt>0){
         newStock = "Stock Available";
    }else{
         newStock = "Unavailable";
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="col-span-2 rounded-lg  bg-[#b4d5ee]">
                        <img className="rounded-lg" src={photoUrl} alt="" />
                    </div>
                    <div className="col-span-3 gap-3 grid grid-rows-4  ">
                        <div className=" bg-[#f4f8fb] text-black p-4 rounded row-span-2 ">
                            <h1 className="text-xl font-semibold">{phoneName}</h1>
                            <p className="my-3">{ram} | {variant}</p>
                            <p>{details}</p>
                            <div className="flex gap-x-3">
                                <div className="bg-white py-2 px-1 rounded">
                                    <h1>Status: <span className="font-semibold">{
                                        newStock
                                        }</span></h1>
                                </div>
                            </div>
                            <div className="flex gap-x-3 mt-2">
                                <div className="bg-white py-2 px-1 rounded">
                                    <h1>Regular Price: <span className="font-semibold line-through">Tk: {regularPrice}</span></h1>
                                </div>
                                <div className="bg-white py-2 px-1 rounded">
                                    <h1>Offer Price: <span className="font-semibold">Tk: {offerPrice}</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-2 bg-[#f4f8fb] rounded ">
                            <div className="  text-black p-4 row-span-2 ">

                                <div className="flex gap-x-3">
                                    <div className="bg-white py-2 px-1 rounded flex gap-x-4 items-center">
                                        <h1>Color: </h1>
                                        <div className="w-8 h-8 rounded-full bg-black"></div>
                                        <div className="w-8 h-8 rounded-full bg-green-400"></div>
                                        <div className="w-8 h-8 rounded-full bg-red-950"></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap  gap-x-3 my-3 ">
                                    <div className="bg-white py-2 px-1 rounded">
                                        <h1>Ram: <span className="font-semibold ">{ram}</span></h1>
                                    </div>
                                    <div className="bg-white py-2 px-1 rounded">
                                        <h1>Storage: <span className="font-semibold">{storage}</span></h1>
                                    </div>
                                </div>
                                <div className="inline-block">
                                    <div className="bg-white py-2 px-1 my-3 rounded">
                                        <h1>Regional: <span className="font-semibold ">{variant}</span></h1>
                                    </div>
                                    <div className="bg-white py-2 px-1 rounded">
                                        <h1 className="">Chipset: <span className="font-semibold ">{chipset}</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PhoneDetails;