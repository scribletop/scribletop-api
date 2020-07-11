import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveSlugFromUsers1594211251496 implements MigrationInterface {
    name = 'RemoveSlugFromUsers1594211251496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_bc0c27d77ee64f0a097a5c269b3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "slug"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_bc0c27d77ee64f0a097a5c269b3" UNIQUE ("slug")`);
    }

}
