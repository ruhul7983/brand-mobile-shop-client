import { Link } from "react-router-dom";

const PhoneCard = ({phone}) => {
    const {_id,brand,phoneName,details,stock,regularPrice,offerPrice,chipset,photoUrl,storage,ram,variant} = phone;
    return (
        <Link to={`/phones/${_id}`} className="text-center py-6 px-4 rounded-lg bg-[#c4e8ee] text-black">
            <img className="w-52 h-48 mx-auto rounded-lg" src={photoUrl} alt="" />
            <h1 className="text-xl font-semibold my-3">{phoneName}</h1>
            <div className="flex justify-center gap-x-2">
                <h1 className="">TK: {offerPrice}</h1>
                <h1 className="line-through">TK: {regularPrice}</h1>
            </div>
        </Link>
    );
};

export default PhoneCard;