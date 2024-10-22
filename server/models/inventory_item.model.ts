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

import { User } from "./user.model";

@Table({ tableName: "inventory_items" })
export class InventoryItem extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "company",
		type: DataType.STRING,
        allowNull: false
	})
    company: string

	@Column({
		field: "name",
		type: DataType.STRING,
        allowNull: false
	})
    name: string

	@Column({
		field: "description",
		type: DataType.STRING,
        allowNull: false
	})
    description: string

	@Column({
		field: "catalog_number",
		type: DataType.STRING,
        allowNull: false
	})
    catalogNumber: string


    @Column({
		field: "quantity",
		type: DataType.STRING,
        allowNull: false
	})
    quantity: string

    @Column({
        field: "price_per_unit",
        type: DataType.FLOAT,
        defaultValue: 0.00
    })
	pricePerUnit: number;

    @Column({
        field: "location",
        type: DataType.STRING
    })
	location: string;

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
