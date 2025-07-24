import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Forms', timestamps: true })
export class Form extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Full name is required' },
        },
    })
    fullName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: 'Invalid email format' },
            notEmpty: { msg: 'Email is required' },
        },
    })
    email!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Message is required' },
        },
    })
    message!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}