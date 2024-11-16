/*
  Warnings:

  - The primary key for the `foods_table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `foods_table` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "foods_table" DROP CONSTRAINT "foods_table_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "foods_table_pkey" PRIMARY KEY ("id");
