export {};
import { InventoryItem } from "../models/inventory_item.model";

const getAllInventoryItems = async () => {
	const inventoryItems = await InventoryItem.findAll();
	return inventoryItems;
};

const getOneInventoryItem = async (id: number) => {
	const inventoryItem = await InventoryItem.findOne();
	return inventoryItem;
};

const createInventoryItem = async (data: any) => {
	console.log("services: creating inventory item...");
	const inventoryItem = await InventoryItem.create(data);
	return inventoryItem;
};

module.exports = {
	getAllInventoryItems,
	createInventoryItem,
};
