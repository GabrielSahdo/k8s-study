import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { users as usersTable } from "../db/schema.ts";

type User = {
    id: string;
    name: string;
}

export class UserGateway {
    private db: NodePgDatabase;

    constructor(db: NodePgDatabase) {
        this.db = db;
    }

    async getUsers(): Promise<User[]> {
        const users = await this.db.select().from(usersTable);
        return users.map(user => ({
            id: user.id.toString(),
            name: user.name
        }));
    }
}