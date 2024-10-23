export {};

const {
	getAllInventoryItems,
	getOneInventoryItem,
	createInventoryItem,
} = require("../services/inventory_item.service");

const handleCreateInventoryItem = async (req: any, res: any) => {
	try {
		const inventoryItem = await createInventoryItem(req.body);
		return res.json(inventoryItem);
	} catch (error: any) {
		console.log(res.status(400).json(error));
	}
};

const handleGetOneInventoryItem = async (req: any, res: any) => {
	try {	
		const inventoryItem = await getOneInventoryItem((req.params.id));
		return res.json(inventoryItem);
	} catch (error: any) {
		// console.log(res.status(400).json(error));

	}
};


const handleGetAllInventoryItems = async (req: any, res: any) => {
	try {
		console.log("Getting all Inventory Items...");
		
		const inventoryItems = await getAllInventoryItems();
        
        
		return res.json(inventoryItems);
	} catch (error: any) {
		return res.status(400).json(error);
	}
};

module.exports = {
	handleCreateInventoryItem,
	handleGetOneInventoryItem,
	handleGetAllInventoryItems,
};
