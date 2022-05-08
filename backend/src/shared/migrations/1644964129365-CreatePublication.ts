import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CreatePublication1644964129365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'publications',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'int',
                        isNullable: false,
                        isPrimary: true,
                        isUnique: true,
                    }),
                    new TableColumn({
                        name: 'title',
                        type: 'varchar(255)'
                    }),
                    new TableColumn({
                        name: 'description',
                        type: 'varchar'
                    }),
                    new TableColumn({
                        name: 'owner_id',
                        type: 'int'
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
                ],
                foreignKeys: [
                    {
                        name: 'publications',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['owner_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        ),
        await queryRunner.addColumn('publications', new TableColumn({
            name: 'owner',
            type: 'int'
        }))

        /* await queryRunner.createForeignKey("publications", new TableForeignKey({
            columnNames: ["owner"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        })); */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('publications')
    }

}
