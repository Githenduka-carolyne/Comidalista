/*
  Warnings:

  - Added the required column `time` to the `bookings_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings_table" ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
