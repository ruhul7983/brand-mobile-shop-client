import { useLoaderData } from "react-router-dom";
import PhoneCard from "../Shared/PhoneCard";

const BrandPhones = () => {
    const phones = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto">
                <h1 className="my-4 text-4xl font-semibold">Our Phones</h1>

            <div className="grid grid-cols-5  gap-6">
            {
                phones.map(phone=><PhoneCard key={phone._id} phone={phone}></PhoneCard>)
            }
            </div>
        </div>
    );
};

export default BrandPhones;