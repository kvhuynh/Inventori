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

@Table({ tableName: "users" })
export class User extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "first_name",
		type: DataType.STRING,
		validate: {
			notEmpty: {
				msg: "First name is required",
			},
		},
	})
	firstName: string;

	@Column({
		field: "last_name",
		type: DataType.STRING,
		validate: {
			notEmpty: {
				msg: "Last name is required",
			},
		},
	})
	lastName: string;

	@Column({
		field: "email",
		type: DataType.STRING,
		validate: {
			notEmpty: {
				msg: "Email is required",
			},
		},
	})
	email: string;

	@Column({
		field: "permissions",
		type: DataType.STRING,
	})
	permissions: string;

	@CreatedAt
	created_at: Date;

	@UpdatedAt
	updated_at: Date;
}
