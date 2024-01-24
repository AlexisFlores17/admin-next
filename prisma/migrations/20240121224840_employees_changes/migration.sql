-- AlterTable
ALTER TABLE "employee" ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY[]::TEXT[];
