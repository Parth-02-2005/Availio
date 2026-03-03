/*
  Warnings:

  - You are about to drop the column `event_type_id` on the `event_registrations` table. All the data in the column will be lost.
  - You are about to drop the column `guest_id` on the `event_registrations` table. All the data in the column will be lost.
  - You are about to drop the column `host_id` on the `event_registrations` table. All the data in the column will be lost.
  - The `status` column on the `event_registrations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `event_slots` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event_types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_event_id` to the `event_registrations` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "registration_status" AS ENUM ('pending', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Days" AS ENUM ('sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday');

-- DropForeignKey
ALTER TABLE "event_registrations" DROP CONSTRAINT "event_registrations_event_type_id_fkey";

-- DropForeignKey
ALTER TABLE "event_registrations" DROP CONSTRAINT "event_registrations_guest_id_fkey";

-- DropForeignKey
ALTER TABLE "event_registrations" DROP CONSTRAINT "event_registrations_host_id_fkey";

-- DropForeignKey
ALTER TABLE "event_slots" DROP CONSTRAINT "event_slots_host_id_fkey";

-- DropForeignKey
ALTER TABLE "event_types" DROP CONSTRAINT "event_types_host_id_fkey";

-- DropIndex
DROP INDEX "event_registrations_event_type_id_idx";

-- DropIndex
DROP INDEX "event_registrations_host_id_idx";

-- AlterTable
ALTER TABLE "event_registrations" DROP COLUMN "event_type_id",
DROP COLUMN "guest_id",
DROP COLUMN "host_id",
ADD COLUMN     "user_event_id" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "registration_status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- DropTable
DROP TABLE "event_slots";

-- DropTable
DROP TABLE "event_types";

-- DropEnum
DROP TYPE "RegistrationStatus";

-- CreateTable
CREATE TABLE "user_events" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "duration" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_event_slots" (
    "id" TEXT NOT NULL,
    "user_event_id" TEXT NOT NULL,
    "day_of_week" "Days" NOT NULL,
    "start_time" TEXT NOT NULL,
    "break_start" TEXT,
    "break_end" TEXT,
    "end_time" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_event_slots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "user_events_user_id_idx" ON "user_events"("user_id");

-- CreateIndex
CREATE INDEX "user_event_slots_user_event_id_idx" ON "user_event_slots"("user_event_id");

-- CreateIndex
CREATE INDEX "event_registrations_user_event_id_idx" ON "event_registrations"("user_event_id");

-- AddForeignKey
ALTER TABLE "user_events" ADD CONSTRAINT "user_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_event_slots" ADD CONSTRAINT "user_event_slots_user_event_id_fkey" FOREIGN KEY ("user_event_id") REFERENCES "user_events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_user_event_id_fkey" FOREIGN KEY ("user_event_id") REFERENCES "user_events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
