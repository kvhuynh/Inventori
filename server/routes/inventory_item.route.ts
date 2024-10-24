export {}
const {
    handleGetAllInventoryItems,
    handleGetOneInventoryItem,
    handleCreateInventoryItem
} = require("../controllers/inventory_item.controller");


const express = require("express");

const router = express.Router();

router.get("/", handleGetAllInventoryItems);
router.get("/:id", handleGetOneInventoryItem)
router.post("/new", handleCreateInventoryItem);
router.post("/tabs")

module.exports = { inventoryItemRouter: router };