import {
	AllowNull,
	AutoIncrement,
	Column,
	CreatedAt,
	DataType,
	Model,
	Table,
	UpdatedAt,
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
		allowNull: false,
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
		allowNull: false,
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
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
			notEmpty: {
				msg: "Email is required",
			},
		},
	})
	email: string;

	@Column({
		field: "password",
		type: DataType.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: "Password is required",
			},
			len: {
				args: [8, 50],
				msg: "Password must be between 8 and 50 characters",
			},
			hashPassword() {
				if (this.password === this.confirmPassword) {
					this.password = bcrypt.hashSync(this.confirmPassword, 10);
				} else {
					throw new Error("passwords must match");
				}
			},
		},
	})
	password: string;

	@Column(DataType.VIRTUAL)
	confirmPassword: string;

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
