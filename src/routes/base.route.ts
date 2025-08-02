export class BaseRoute {
    path: string;
    method: string;
    handler: (request: any, reply: any) => void;

    constructor(props: { path: string; method: string; handler: (request: any, reply: any) => void }) {
        this.path = props.path;
        this.method = props.method;
        this.handler = props.handler;

        if (this.constructor.name === 'BaseRoute') {
            throw new Error('BaseRoute cannot be instantiated directly. Please extend it.');
        }
    }
}