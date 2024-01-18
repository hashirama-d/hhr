import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./components/SignUp";
import {SignIn} from "./components/SignIn";
import {AuthContext} from "./context/AuthContext";
import {Home} from "./components/Home";
import {Protected} from "./components/global/Protected";
import {HeaderBar} from "./components/global/HeaderBar";
function App() {
  return (
    <Box className="App">
        <AuthContext>
            <HeaderBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                {/*<Route path="/signin" element={<SignIn/>}/>*/}
                <Route path="/test" element={<Protected><div>test</div></Protected>}/>
            </Routes>
        </AuthContext>
    </Box>
  );
}

export default App;
