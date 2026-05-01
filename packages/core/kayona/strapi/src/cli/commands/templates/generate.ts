import { createCommand } from 'commander';

import type { KayonaCommand } from '../../types';

/**
 *`$ strapi templates:generate <directory>`
 */
const command: KayonaCommand = () => {
  return createCommand('templates:generate <directory>')
    .description('(deprecated) Generate template from Kayona project')
    .action(() => {
      console.warn('This command is deprecated and will be removed in the next major release.');
      console.warn('You can now copy an existing app and use it as a template.');
    });
};

export { command };
