/*
  Warnings:

  - Added the required column `category` to the `foods_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foods_table" ADD COLUMN     "category" TEXT NOT NULL;
