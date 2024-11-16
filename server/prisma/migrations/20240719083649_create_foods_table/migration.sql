-- CreateTable
CREATE TABLE "foods_table" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "foods_table_pkey" PRIMARY KEY ("id")
);
