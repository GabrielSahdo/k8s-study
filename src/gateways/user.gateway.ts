import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { users as usersTable } from "../db/schema.ts";

type User = {
    id: string;
    name: string;
    email: string;
}

export class UserGateway {
    private db: NodePgDatabase;

    constructor(db: NodePgDatabase) {
        this.db = db;
    }

    async getUsers(): Promise<any[]> {
        const users = await this.db.select().from(usersTable);
        return users;
    }

    async createUser(user: User): Promise<any> {
        const newUser = await this.db.insert(usersTable).values({
            id: user.id,
            name: user.name,
            email: user.email,
        }).returning().execute();
        return newUser;
    }
}