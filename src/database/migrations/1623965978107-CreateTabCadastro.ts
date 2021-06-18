import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabCadastro1623965978107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "tab_clientes",
                columns:[
                    {name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "cpf_cnpj", type: "varchar", length: "15"},
                    {name: "name", type: "varchar", length: "50"},
                    {name: "ativo", type: "boolean", default: true},
                    {name: "dt_inclusao", type: "timestamp", default: "now()"},
                    {name: "dt_alteracao", type: "timestamp", default: "now()", onUpdate: "now()"}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable( "tab_clientes" )
    }

}
