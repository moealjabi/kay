import { createCommand } from 'commander';
import CLITable from 'cli-table3';
import chalk from 'chalk';

import { createKayona, compileKayona } from '@strapi/core';

import type { KayonaCommand } from '../../types';
import { runAction } from '../../utils/helpers';

const action = async () => {
  const appContext = await compileKayona();
  const app = await createKayona(appContext).register();

  const list = app.get('content-types').keys();

  const infoTable = new CLITable({
    head: [chalk.blue('Name')],
  });

  list.forEach((name: string) => infoTable.push([name]));

  console.log(infoTable.toString());

  await app.destroy();
};

/**
 * `$ strapi content-types:list`
 */
const command: KayonaCommand = () => {
  return createCommand('content-types:list')
    .description('List all the application content-types')
    .action(runAction('content-types:list', action));
};

export { action, command };
