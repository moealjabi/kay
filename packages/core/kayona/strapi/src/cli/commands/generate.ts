import { createCommand } from 'commander';
import { assertCwdContainsKayonaProject } from '../utils/helpers';
import type { KayonaCommand } from '../types';

/**
 * `$ strapi generate`
 */
const command: KayonaCommand = ({ argv }) => {
  return createCommand('generate')
    .description('Launch the interactive API generator')
    .action(() => {
      assertCwdContainsKayonaProject('generate');
      argv.splice(2, 1);

      // NOTE: this needs to be lazy loaded in order for plop to work correctly
      import('@strapi/generators').then((gen) => gen.runCLI());
    });
};

export { command };
