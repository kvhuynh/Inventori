import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./views/LoginRegister";
import InventoryTable from "./components/inventory/InventoryTable";
import AddItem from "./components/inventory/AddItem";
import { OneItem } from "./components/inventory/OneItem";

function App() {
	return (
		<>
			{/* <LoginRegisterTemp></LoginRegisterTemp> */}
			<Routes>
				<Route path="/" element={<InventoryTable />}></Route>
				<Route path="/new" element={<AddItem/>}></Route>
				<Route path="/:id" element={<OneItem />}></Route>
			</Routes>
		</>
	);

	// return (
	// 	<div>
	// 		<h1>Inventory</h1>
	// 		<InventoryTable />
	// 	</div>
	// );
}

export default App;
