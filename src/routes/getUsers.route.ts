import { BaseRoute } from "./base.route.ts";
import { UserGateway } from "../gateways/user.gateway.ts";

export class GetUsersRoute extends BaseRoute {
    constructor(userGateway: UserGateway) {
        super({
            path: "/users",
            method: "GET",
            handler: async (request, reply) => {
                try {
                    const users = await userGateway.getUsers();
                    reply.send(users);
                } catch (error) {
                    console.error("Error fetching users:", error);
                    reply.status(500).send({ error: "Internal Server Error" });
                }
            }
        });
    }
}