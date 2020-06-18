# Migration `20200613202230-made-teams-optional-for-project`

This migration has been generated by Aravindh Sridharan at 6/13/2020, 8:22:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Project" DROP CONSTRAINT IF EXiSTS "Project_teamId_fkey",
ALTER COLUMN "teamId" DROP NOT NULL;

ALTER TABLE "public"."Project" ADD FOREIGN KEY ("teamId")REFERENCES "public"."Team"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200613155304-add-projects-model..20200613202230-made-teams-optional-for-project
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -28,19 +28,19 @@
     updatedAt          DateTime             @updatedAt
     name               String
     description        String?
     records            Record[]             @relation(references: [id])
-    projects           Project[]            
+    projects           Project[]
 }
 model Project {
     id                 String               @id @default(uuid())
     createdAt          DateTime             @default(now())
     updatedAt          DateTime             @updatedAt
     name               String
     description        String?
     records            Record[]             @relation(references: [id])
-    team               Team                 @relation(fields: [teamId], references: [id])
-    teamId             String
+    team               Team?                 @relation(fields: [teamId], references: [id])
+    teamId             String?
 }
 model Tag {
   id                   String               @id @default(uuid())
   createdAt            DateTime             @default(now())
```

