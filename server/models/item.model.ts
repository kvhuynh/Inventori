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
} from "sequelize-typescript";

const bcrypt = require("bcrypt");

@Table({ tableName: "items" })
export class Item extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "name",
		type: DataType.STRING,
		validate: {
			notEmpty: {
				msg: "Name is required",
			},
		},
	})
	name: string;

	@Column({
		field: "description",
		type: DataType.STRING,
	})
	description: string;

	@Column({
		field: "price",
		type: DataType.INTEGER,
	})
	price: string;

	@Column({
		field: "type",
		type: DataType.INTEGER,
	})
	type: string;

    @Column({
		field: "catalog_number",
		type: DataType.INTEGER,
	})
	catalogNumber:string;
}
