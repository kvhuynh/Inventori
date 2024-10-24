import { useState, useEffect } from "react";
import { getInventoryItems } from "../../services/inventory.service";
import { useNavigate } from "react-router-dom";
import { InventoryItem } from "../../types/InventoryTypes";

import {
	Typography,
	Table,
	Button,
	Box,
	Option,
	Select,
	MenuItem,
} from "@mui/joy";

export const AllItems = () => {
	const [inventoryItems, setInventoryItems] = useState<Array<InventoryItem>>();
	const navigate = useNavigate();
	const [selectedValue, setSelectedValue] = useState<string>("");

	useEffect(() => {
		getInventoryItems().then((inventoryItems) => {
			setInventoryItems(inventoryItems);
		});
	}, []);

	const arr = ["All Items", "Tab1", "Tab2", "Tab3", "Tab4"];
	// Handle select change
	const handleChange = (event) => {
		setSelectedValue(event.target.innerText);
	};

	return (
		<>
			<Box sx={{ mt: 4 }}>
				<Button onClick={() => navigate("/new")}> + Add item</Button>{" "}
				<Button onClick={() => navigate("/requests")}> + Requests</Button>
			</Box>
			<Select onChange={handleChange} placeholder="Select an option">
				{arr?.map((item) => (
					<Option value={item}>{item}</Option>
				))}
			</Select>
			<Box sx={{ mt: 3 }}>
				{selectedValue === "1" && (
					<Table hoverRow={true}>
						<thead>
							<tr>
								<th>
									<Typography fontWeight="bold">
										Company {selectedValue}
									</Typography>
								</th>
								<th>
									<Typography fontWeight="bold">Name</Typography>
								</th>
								<th>
									<Typography fontWeight="bold">Description</Typography>
								</th>
								<th>
									<Typography fontWeight="bold">Price per Unit</Typography>
								</th>
								<th>
									<Typography fontWeight="bold">Location</Typography>
								</th>
							</tr>
						</thead>
						<tbody>
							{inventoryItems?.map((item, index) => (
								<tr key={index} onClick={() => navigate(`/${item.id}`)}>
									<td>{item.company}</td>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.pricePerUnit}</td>
									<td>{item.location}</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
				{selectedValue === "2" && <Typography>You Option 2</Typography>}
				{selectedValue === "3" && (
					<Typography>You selected Option 3</Typography>
				)}
				{!selectedValue && (
					<Typography>Please select an option above</Typography>
				)}
			</Box>
		</>
	);
};

export default AllItems;
