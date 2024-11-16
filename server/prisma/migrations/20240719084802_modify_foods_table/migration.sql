/*
  Warnings:

  - Changed the type of `price` on the `foods_table` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "foods_table" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
