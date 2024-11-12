import { Command } from '@oclif/core';
export default class Mock extends Command {
    static args: {
        schema: import("@oclif/core/interfaces").Arg<string, {
            exists?: boolean;
        }>;
    };
    static description: string;
    static examples: string[];
    static flags: {
        port: import("@oclif/core/interfaces").OptionFlag<number, import("@oclif/core/interfaces").CustomOptions>;
    };
    run(): Promise<void>;
}
