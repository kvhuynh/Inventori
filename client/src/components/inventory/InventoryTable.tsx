import { useState, useEffect } from "react";
import { getInventoryItems } from "../../services/inventory.service";
import { useNavigate } from "react-router-dom";
import { InventoryItem } from "../../types/InventoryTypes";

import { Typography, Table, Button } from "@mui/joy";

export const InventoryTable = () => {
	const [inventoryItems, setInventoryItems] = useState<Array<InventoryItem>>();
	const navigate = useNavigate();

	useEffect(() => {
		console.log("fsadfsdfasdfasdf");

		getInventoryItems().then((inventoryItems) => {
			console.log(inventoryItems);

			setInventoryItems(inventoryItems);
		});
	}, []);

	return (
		<>
			<Button onClick={() => navigate("/new")}> + Add item</Button>
			<Table hoverRow={true}>
				<thead>
					<tr>
						<th>
							<Typography fontWeight="bold">Company</Typography>
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
						<tr key={index} onClick={()=> navigate(`/${item.id}`)}>
							<td>{item.name}</td>
							<td>{item.description}</td>
							<td>{item.description}</td>
							<td>{item.description}</td>
							<td>{item.description}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default InventoryTable;
