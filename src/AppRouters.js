import { Route, Routes  } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Options from "./pages/options/Options";
import Account from "./pages/account/Account";

const AppRouters = () => {
    return (
        <Routes>            
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />  
            <Route path="/procurar" element={<Search />} />
            <Route path="/opcoes" element={<Options />} />   
            <Route path="/conta" element={<Account />} />                                        
        </Routes>
    );
};

export default AppRouters;