import * as p from "drizzle-orm/pg-core";

export const users = p.pgTable("users", {
    id: p.serial("id").primaryKey(),
    name: p.text("name").notNull(),
});