/*
  Warnings:

  - You are about to drop the column `day` on the `bookings_table` table. All the data in the column will be lost.
  - Added the required column `date` to the `bookings_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings_table" DROP COLUMN "day",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
