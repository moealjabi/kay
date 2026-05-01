import { createCommand } from 'commander';

import type { KayonaCommand } from '../../types';
import { runAction } from '../../utils/helpers';
import { action as generate } from './generate';

/**
 * `$ strapi openapi`
 */
const command: KayonaCommand = () => {
  const openapi = createCommand('openapi').description(
    'Manage OpenAPI specifications for your Kayona application'
  );

  // `$ strapi openapi generate [-o, --output <path>]`
  openapi
    .command('generate')
    .description('Generate an OpenAPI specification for the current Kayona application')
    .option('-o, --output <path>', 'Output file path for the OpenAPI specification')
    .action(runAction('openapi:generate', generate));

  return openapi;
};

export { command };
