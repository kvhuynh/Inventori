import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./views/LoginRegister";
import { Dashboard } from "@mui/icons-material";

function App() {
	return (
		// <LoginRegisterTemp></LoginRegisterTemp>
		<Routes>
      <Route path="/" element={<LoginRegister/>}></Route>
	  <Route path="/dashboard" element={<Dashboard/>}></Route>
		</Routes>
	);
}

export default App;
