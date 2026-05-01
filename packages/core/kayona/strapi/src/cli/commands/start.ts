import { createCommand } from 'commander';
import fs from 'fs';
import tsUtils from '@strapi/typescript-utils';
import { createKayona } from '@strapi/core';

import type { KayonaCommand } from '../types';
import { runAction } from '../utils/helpers';

const action = async () => {
  const appDir = process.cwd();

  const isTSProject = await tsUtils.isUsingTypeScript(appDir);

  const outDir = await tsUtils.resolveOutDir(appDir);
  const distDir = isTSProject ? outDir : appDir;

  const buildDirExists = fs.existsSync(outDir);
  if (isTSProject && !buildDirExists)
    throw new Error(
      `${outDir} directory not found. Please run the build command before starting your application`
    );

  createKayona({ appDir, distDir }).start();
};

/**
 * `$ strapi start`
 */
const command: KayonaCommand = () => {
  return createCommand('start')
    .description('Start your Kayona application')
    .action(runAction('start', action));
};

export { command };
