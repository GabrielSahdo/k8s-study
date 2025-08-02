import { BaseRoute } from "./base.route.ts";

export class HealthRoute extends BaseRoute {
    constructor() {
        super({
            path: '/health',
            method: 'GET',
            handler: async (request, reply) => {
                reply.send({ status: 'ok' });
            }
        });
    }
}