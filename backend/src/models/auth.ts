import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'Auth', timestamps: true })
export class Auth extends Model {
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
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Password is required' },
        },
    })
    Password!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;
}