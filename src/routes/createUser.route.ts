import { BaseRoute } from "./base.route.ts";
import { UserGateway } from "../gateways/user.gateway.ts";

export class CreateUserRoute extends BaseRoute {
    constructor(userGateway: UserGateway) {
        super({
            path: "/users",
            method: "POST",
            handler: async (request, reply) => {
                try {
                    const user = request.body;
                    const newUser = await userGateway.createUser({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    });
                    reply.status(201).send(newUser);
                } catch (error) {
                    console.error("Error creating user:", error);
                    reply.status(500).send({ error: "Internal Server Error" });
                }
            }
        });
    }
}