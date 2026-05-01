import REPL from 'repl';
import { createCommand } from 'commander';
import { createKayona, compileKayona } from '@strapi/core';

import type { KayonaCommand } from '../types';
import { runAction } from '../utils/helpers';

const action = async () => {
  const appContext = await compileKayona();
  const app = await createKayona(appContext).load();

  app.start().then(() => {
    const repl = REPL.start(app.config.info.name + ' > ' || 'strapi > '); // eslint-disable-line prefer-template

    repl.on('exit', (err: Error) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }

      app.server.destroy();
      process.exit(0);
    });
  });
};

/**
 * `$ strapi console`
 */
const command: KayonaCommand = () => {
  return createCommand('console')
    .description('Open the Kayona framework console')
    .action(runAction('console', action));
};

export { action, command };
