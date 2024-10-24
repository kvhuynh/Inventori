import {
	AllowNull,
	AutoIncrement,
	BeforeCreate,
	Column,
	CreatedAt,
	DataType,
	Model,
	Table,
	UpdatedAt,
	HasMany,
	Length,
	BelongsTo,
	ForeignKey,
} from "sequelize-typescript";

import { User } from "../user.model";
import { InventoryTab } from "./inventory_tabs.model";

@Table({ tableName: "inventory_items" })
export class InventoryItem extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "company",
		type: DataType.STRING,
	})
	company: string;

	@Column({
		field: "name",
		type: DataType.STRING,
	})
	name: string;

	@Column({
		field: "description",
		type: DataType.STRING,
	})
	description: string;

	@Column({
		field: "catalog_number",
		type: DataType.STRING,
	})
	catalogNumber: string;

	@Column({
		field: "quantity",
		type: DataType.STRING,
	})
	quantity: string;

	@Column({
		field: "price_per_unit",
		type: DataType.FLOAT,
		defaultValue: 0.0,
	})
	pricePerUnit: number;

	@Column({
		field: "url",
		type: DataType.STRING,
	})
	url: string;

	@Column({
		field: "location",
		type: DataType.STRING,
	})
	location: string;

	@ForeignKey(() => InventoryTab)
	@Column({
	  field: "tab_id",
	  type: DataType.INTEGER,
	})
	tabId: number;
  
	@BelongsTo(() => InventoryTab)
	inventoryTab: InventoryTab;

	// @ForeignKey(() => User)
	// @Column({
	//     field: "user_id",
	//     type: DataType.INTEGER,
	//     allowNull: false
	// })

	// userId: number;

	@CreatedAt
	created_at: Date;

	@UpdatedAt
	updated_at: Date;

	// @BelongsTo(() => User)
	// user: User;
}
