/*
  Warnings:

  - The primary key for the `foods_table` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "foods_table" DROP CONSTRAINT "foods_table_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "foods_table_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "foods_table_id_seq";
