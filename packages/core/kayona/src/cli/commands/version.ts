import { createCommand } from 'commander';
import type { KayonaCommand } from '../types';
import { version } from '../../../package.json';

/**
 * `$ strapi version`
 */

const command: KayonaCommand = () => {
  // load the Kayona package.json to get version and other information
  return createCommand('version')
    .description('Output the version of Kayona')
    .action(() => {
      process.stdout.write(`${version}\n`);
      process.exit(0);
    });
};

export { command };
