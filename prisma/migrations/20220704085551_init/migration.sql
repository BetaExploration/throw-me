-- CreateTable
CREATE TABLE "urls" (
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "banned" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_name_key" ON "urls"("name");

-- CreateIndex
CREATE UNIQUE INDEX "banned_id_key" ON "banned"("id");

-- CreateIndex
CREATE UNIQUE INDEX "banned_ip_key" ON "banned"("ip");
