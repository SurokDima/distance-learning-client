/**
 * Reads an environment variable by provided `key` and throws an error if it's not defined.
 *
 * @param key - environment variable key
 * @param errorMessage - error message to throw if the variable is not defined
 * @returns environment variable value
 */
export const getEnvOrThrow = (key: string, errorMessage?: string): string => {
  const value = import.meta.env[key] as string | undefined;

  if (!value) {
    throw new Error(errorMessage ?? `Missing env var ${key}`);
  }

  return value;
};
