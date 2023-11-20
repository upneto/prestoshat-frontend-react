import { Route, Routes  } from "react-router-dom";
import Login from "./pages";

const AppRouters = () => {
    return (
        <Routes>            
            <Route path="/" element={<Login />} />
                            
        </Routes>
    );
};

export default AppRouters;