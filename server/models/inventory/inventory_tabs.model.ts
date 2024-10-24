import {
    Table,
    Column,
    Model,
    HasMany,
    CreatedAt,
    UpdatedAt,
    DataType,
  } from "sequelize-typescript";
  import { InventoryItem } from "./inventory_item.model";
  
  @Table({ tableName: "inventory_tabs" })
  export class InventoryTab extends Model {
    @Column({
      field: "name",
      type: DataType.STRING,
      allowNull: false,
    })
    name: string;
  
    @Column({
      field: "id",
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId: number;
  
    @CreatedAt
    created_at: Date;
  
    @UpdatedAt
    updated_at: Date;
  
    @HasMany(() => InventoryItem)
    inventoryItems: InventoryItem[];
  }
  