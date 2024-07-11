export {}
const {
    handleGetAllInventoryItems,
    handleCreateInventoryItem
} = require("../controllers/inventory_item.controller");


const express = require("express");

const router = express.Router();

router.get("/", handleGetAllInventoryItems);
router.post("/new", handleCreateInventoryItem);

module.exports = { inventoryItemRouter: router };