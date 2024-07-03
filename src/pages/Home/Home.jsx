import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import PhoneCard from "../Shared/PhoneCard";
import PhoneCategory from "../Shared/PhoneCategory";
import { useEffect, useState } from "react";

const Home = () => {
    const bannerData = useLoaderData();
    const [phoneCategory,setPhoneCategory] = useState([]);
    const [phones,setPhones] = useState([]);
    useEffect(()=>{
        fetch("https://brand-mobile-shop.onrender.com/category")
        .then(res=>res.json())
        .then(data=>setPhoneCategory(data));
    },[])
    useEffect(()=>{
        fetch("https://brand-mobile-shop.onrender.com/phones")
        .then(res=>res.json())
        .then(data=>setPhones(data));
    },[])



    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                {/* slider */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3 rounded-lg">
                        <div className="carousel w-full h-96">
                            {bannerData.map((banner, index) => (
                                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                                    <img
                                        src={banner.photoUrl}
                                        className="w-full"
                                        alt={`Slide ${index + 1}`}
                                    />
                                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a href={`#slide${index === 0 ? bannerData.length : index}`} className="btn btn-circle">❮</a>
                                        <a href={`#slide${(index + 2) > bannerData.length ? 1 : (index + 2)}`} className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Hot Details */}
                    <div className="rounded-lg bg-[#c4e8ee] h-96">
                        <h1 className="text-3xl text-center text-black font-semibold">Today Hot Deals</h1>
                        <div className="flex gap-5 bg-white text-black m-2 my-2 rounded-lg">
                            <img className="w-24 rounded-lg" src="https://iili.io/dFgKSNn.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Motorola Edge 50 pro</h1>
                                <div className="flex gap-x-7 mt-2">
                                    <h1>TK: 45000</h1>
                                    <h1 className="line-through">TK: 50000</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-white text-black m-2 my-5 rounded-lg">
                            <img className="w-24 rounded-lg" src="https://iili.io/dFgKSNn.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Motorola Edge 50 pro</h1>
                                <div className="flex gap-x-7 mt-2">
                                    <h1>TK: 45000</h1>
                                    <h1 className="line-through">TK: 50000</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 bg-white text-black m-2 my-5 rounded-lg">
                            <img className="w-24 rounded-lg" src="https://iili.io/dFgKSNn.png" alt="" />
                            <div>
                                <h1 className="text-xl font-bold">Motorola Edge 50 pro</h1>
                                <div className="flex gap-x-7 mt-2">
                                    <h1>TK: 45000</h1>
                                    <h1 className="line-through">TK: 50000</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Phones category */}
                <div className="my-6">
                    <h1 className="text-4xl font-bold mb-5">Phone Category</h1>
                    <div className="grid grid-cols-11 gap-3">
                        {
                            phoneCategory.map(phoneC=><PhoneCategory key={phoneC._id} phoneC={phoneC}></PhoneCategory>)
                        }
                    </div>
                </div>
                {/* Our Phone Sections */}
                <div>
                    <h1 className="text-4xl font-bold mb-5">Our Phones</h1>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        {
                            phones.map(phone=><PhoneCard phone={phone} key={phone._id}></PhoneCard>)
                        }
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
