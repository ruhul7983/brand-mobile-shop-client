import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Login from "../Login/Login";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user){
        return children;
    }else{
        return <Login></Login>
    }
};

export default PrivateRoute;