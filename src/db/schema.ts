import * as p from "drizzle-orm/pg-core";

export const users = p.pgTable("users", {
    id: p.text("id").primaryKey(),
    name: p.text("name").notNull(),
    email: p.text("email").notNull().unique(),
});