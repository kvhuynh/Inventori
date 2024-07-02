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
export class InventoryItems extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "name",
		type: DataType.STRING,
        allowNull: false
	})
    name: string

    @Column({
        field: "description",
        type: DataType.STRING,

    })
    description: string

    @Column({
        field: "unit_size",
        type: DataType.STRING,

    })
    unitSize: string

    @Column({
        field: "price",
        type: DataType.FLOAT,
        defaultValue: 0.00
    })
	price: number;

    @ForeignKey(() => User)
    @Column({
        field: "user_id",
        type: DataType.INTEGER,
        allowNull: false
    })


    userId: number;

    @CreatedAt
	created_at: Date;

	@UpdatedAt
	updated_at: Date;

    @BelongsTo(() => User)
    user: User;
}
