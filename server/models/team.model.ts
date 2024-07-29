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

@Table({ tableName: "teams" })
export class Team extends Model {
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
        field: "team_size",
        type: DataType.NUMBER,

    })
    unitSize: number

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
