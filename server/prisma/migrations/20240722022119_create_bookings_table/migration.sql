-- CreateTable
CREATE TABLE "bookings_table" (
    "id" SERIAL NOT NULL,
    "table" INTEGER NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_table_pkey" PRIMARY KEY ("id")
);
