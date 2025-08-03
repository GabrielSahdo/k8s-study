import Fastify from 'fastify';
import { HealthRoute } from './routes/health.route.ts';
import { BaseRoute } from './routes/base.route.ts';

function registerRoute(fastifyApp: any, route: BaseRoute) {
    fastifyApp.route({
        method: route.method,
        url: route.path,
        handler: route.handler
    });
}

const app = Fastify({
    logger: true,
});

registerRoute(app, new HealthRoute());

try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    app.log.info(`Server listening on http://localhost:3000`);
} catch (err) {
    app.log.error(err);
    process.exit(1);
}

