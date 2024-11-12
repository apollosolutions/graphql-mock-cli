import { Args, Command, Flags } from '@oclif/core';
import { readFileSync } from 'node:fs';
import { startServer } from '../../common/server.js';
export default class Mock extends Command {
    static args = {
        schema: Args.file({ description: 'Schema file to mock', required: true }),
    };
    static description = 'Start a mock GraphQL server from a file';
    static examples = [
        '<%= config.bin %> <%= command.id %> schema.graphql',
        '<%= config.bin %> <%= command.id %> schema.graphql --port 8080',
    ];
    static flags = {
        port: Flags.integer({
            default: 4000,
            description: 'HTTP port for server',
            required: false
        })
    };
    async run() {
        const { args, flags } = await this.parse(Mock);
        this.log(`Reading schema file ${args.schema}...`);
        const sdl = readFileSync(args.schema, 'utf8');
        const promise = await startServer(sdl, flags.port);
        this.log(`🚀 Mock Apollo Server ready at: ${promise.url}`);
    }
}
