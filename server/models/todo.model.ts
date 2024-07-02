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

@Table({ tableName: "todo" })
export class Todo extends Model {
	@AllowNull(false)
	@AutoIncrement
	@Column({ primaryKey: true, type: DataType.INTEGER })
	id: number;

	@Column({
		field: "title",
		type: DataType.STRING,
        allowNull: false
	})
    title: string

    @Column({
        field: "description",
        type: DataType.STRING,

    })
    description: string

    @Column({
        field: "is_completed",
        type: DataType.BOOLEAN,
        defaultValue: false
    })
	isCompleted: boolean;

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
