import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./views/LoginRegister";

function App() {
	return (
		// <LoginRegisterTemp></LoginRegisterTemp>
		<Routes>
      <Route path="/" element={<LoginRegister/>}></Route>
		</Routes>
	);
}

export default App;
