import { BaseRoute } from "./base.route.ts";

export class ErrorRoute extends BaseRoute {
    constructor() {
        super({
            method: 'GET',
            path: '/error',
            handler: async (request, reply) => {
                process.exit(1); // Simulate a crash
            }
        });
    }
}