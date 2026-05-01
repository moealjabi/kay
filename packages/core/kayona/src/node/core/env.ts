import path from 'node:path';
import dotenv from 'dotenv';
import { pathExists } from './files';

/**
 * This is the base of _any_ env set for a strapi project,
 * to build a strapi admin panel we require these env variables.
 */
interface DefaultEnv {
  ADMIN_PATH: string;
  KAYONA_ADMIN_BACKEND_URL: string;
  KAYONA_TELEMETRY_DISABLED: string;
  KAYONA_AI_URL: string;
  KAYONA_ANALYTICS_URL?: string;
}

/**
 * @internal
 *
 * @description Load the .env file if it exists
 */
const loadEnv = async (cwd: string) => {
  const pathToEnv = path.resolve(cwd, '.env');

  if (await pathExists(pathToEnv)) {
    dotenv.config({ path: pathToEnv });
  }
};

/**
 * @internal
 *
 * @description Get all the environment variables that start with `KAYONA_ADMIN_`
 */
const getStrapiAdminEnvVars = (defaultEnv: DefaultEnv): Record<string, string> => {
  return Object.keys(process.env)
    .filter((key) => key.toUpperCase().startsWith('KAYONA_ADMIN_'))
    .reduce(
      (acc, key) => {
        acc[key] = process.env[key] as string;

        return acc;
      },
      defaultEnv as unknown as Record<string, string>
    );
};

export { getStrapiAdminEnvVars, loadEnv };
