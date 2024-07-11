export {}

const {
    getAllInventoryItems,
    createInventoryItem
    
} = require("../services/inventory_item.service");

const handleCreateInventoryItem = async (req: any, res: any) => {
    try {
        const inventoryItem = await createInventoryItem(res.data);
        return res.json(inventoryItem);
   } catch (error: any) {
        console.log(res.status(400).json(error));
    }
}

const handleGetAllInventoryItems = async (req: any, res: any) => {
    try {
        const inventoryItems = await getAllInventoryItems()
        return res.json(inventoryItems);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateInventoryItem,
    handleGetAllInventoryItems
}