import { createCommand } from 'commander';
import CLITable from 'cli-table3';
import chalk from 'chalk';
import { createKayona, compileKayona } from '@strapi/core';

import type { KayonaCommand } from '../../types';
import { runAction } from '../../utils/helpers';

const action = async () => {
  const appContext = await compileKayona();
  const app = await createKayona(appContext).register();

  const list = app.get('hooks').keys();

  const infoTable = new CLITable({
    head: [chalk.blue('Name')],
  });

  list.forEach((name: string) => infoTable.push([name]));

  console.log(infoTable.toString());

  await app.destroy();
};

/**
 * `$ strapi hooks:list`
 */
const command: KayonaCommand = () => {
  return createCommand('hooks:list')
    .description('List all the application hooks')
    .action(runAction('hooks:list', action));
};

export { action, command };
