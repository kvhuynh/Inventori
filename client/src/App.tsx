import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./views/LoginRegister";
import InventoryTable from "./components/inventory/AllItems";
import AddItem from "./components/inventory/AddItem";
import OneItem from "./components/inventory/OneItem";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/joy";

function App() {
	return (
		<Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
			<Sidebar />
			{/* Main Content Area */}
			<Box

			>
				<Navbar />

				{/* Routes for different pages */}
				<Routes>
					<Route path="/" element={<InventoryTable />}></Route>
					<Route path="/new" element={<AddItem />}></Route>
					<Route path="/:id" element={<OneItem />}></Route>
				</Routes>
			</Box>
		</Box>
	);
}

export default App;
