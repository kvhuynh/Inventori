import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    Model,
    Table,
    UpdatedAt,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { InventoryItem } from "./inventory_item.model"; // Import the InventoryItem model
import { User } from "../user.model"; // Assuming you have a User model for tracking the requestor

@Table({ tableName: "inventory_requests" })
export class InventoryRequest extends Model {
    @AllowNull(false)
    @AutoIncrement
    @Column({ primaryKey: true, type: DataType.INTEGER })
    id: number;

    // Type of request: 'purchase', 'restock', 'borrow', etc.
    @Column({
        field: "request_type",
        type: DataType.ENUM("purchase", "restock", "borrow"),
        allowNull: false,
    })
    requestType: string;

    // Status of the request: 'pending', 'approved', 'rejected', 'completed', etc.
    @Column({
        field: "status",
        type: DataType.ENUM("pending", "approved", "rejected", "completed"),
        defaultValue: "pending", // Default status is 'pending'
        allowNull: false,
    })
    status: string;

    // Quantity requested
    @Column({
        field: "quantity_requested",
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantityRequested: number;

    // Foreign key to the inventory item being requested
    @ForeignKey(() => InventoryItem)
    @Column({
        field: "inventory_item_id",
        type: DataType.INTEGER,
        allowNull: false,
    })
    inventoryItemId: number;

    // Foreign key to the user making the request (if you track users)
    @ForeignKey(() => User)
    @Column({
        field: "user_id",
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    // Optional comment or reason for the request
    @Column({
        field: "comment",
        type: DataType.STRING,
    })
    comment: string;

    // Date the request was created
    @CreatedAt
    createdAt: Date;

    // Date the request was last updated
    @UpdatedAt
    updatedAt: Date;

    // Relationships
    @BelongsTo(() => InventoryItem)
    inventoryItem: InventoryItem;

    @BelongsTo(() => User)
    user: User;
}
