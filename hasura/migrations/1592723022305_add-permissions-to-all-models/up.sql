
ALTER TABLE "public"."dishes" ADD COLUMN "user_id" text NULL;

ALTER TABLE "public"."glucose" ADD COLUMN "user_id" text NULL;

ALTER TABLE "public"."projects" ADD COLUMN "user_id" text NULL;

ALTER TABLE "public"."teams" ADD COLUMN "user_id" text NULL;

ALTER TABLE "public"."transactions" ADD COLUMN "user_id" text NULL;

ALTER TABLE "public"."water" ADD COLUMN "user_id" text NULL;
