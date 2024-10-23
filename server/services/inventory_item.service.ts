export {};
import { InventoryItem } from "../models/inventory_item.model";

const getAllInventoryItems = async () => {
	const inventoryItems = await InventoryItem.findAll();
	return inventoryItems;
};

const getOneInventoryItem = async (id: number) => {
	console.log(`id is ${id}`);
	
	const inventoryItem = await InventoryItem.findOne({ where: { id: id } });
	console.log(inventoryItem);
	
	return inventoryItem;
};

const createInventoryItem = async (data: any) => {
	console.log("services: creating inventory item...");
	const inventoryItem = await InventoryItem.create(data);
	return inventoryItem;
};

module.exports = {
	getAllInventoryItems,
	getOneInventoryItem,
	createInventoryItem,
};
