import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateUser1644788640698 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'int',
                        isNullable: false,
                        isPrimary: true,
                        isUnique: true,
                    }),
                    new TableColumn({
                        name: 'name',
                        type: 'varchar(120)',
                    }),
                    new TableColumn({
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    }),
                    new TableColumn({
                        name: 'password',
                        type: 'varchar'
                    }),
                    new TableColumn({
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'deleted_at',
                        isNullable: true,
                        type: 'timestamp',
                        default: 'NULL',
                    }),
                ]
            })
        ),
        await queryRunner.addColumn('users', new TableColumn({
            name: 'publications',
            type: 'int'
        }))

        /* await queryRunner.createForeignKey("users", new TableForeignKey({
            columnNames: ["publications"],
            referencedColumnNames: ["id"],
            referencedTableName: "publications",
            onDelete: "CASCADE"
        })); */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
