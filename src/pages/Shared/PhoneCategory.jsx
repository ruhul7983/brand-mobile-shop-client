import { Link } from "react-router-dom";

const PhoneCategory = ({phoneC}) => {
    const {name,photoUrl,link} = phoneC; 
    return (
        <Link to={`phones/category/${link}`} className="text-center">
            <img className="rounded-full w-32 mx-auto border border-white hover:border-2 hover:border-green-500 transition-all" src={photoUrl} alt="" />
            <h1 className="text-xl font-bold">{name}</h1>
        </Link>
    );
};

export default PhoneCategory;