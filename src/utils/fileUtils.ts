import { promises as fs } from "fs";
import * as path from "path";

export const resolvePath = (...segments: string[]): string =>
  path.resolve(...segments);

export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const readJsonFile = async <T = unknown>(
  filePath: string,
): Promise<T> => {
  const content = await fs.readFile(filePath, "utf8");
  return JSON.parse(content) as T;
};

export const writeJsonFile = async (
  filePath: string,
  data: unknown,
  pretty = true,
): Promise<void> => {
  const content = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  await ensureDirectoryExists(path.dirname(filePath));
  await fs.writeFile(filePath, content, "utf8");
};

export const readTextFile = async (filePath: string): Promise<string> =>
  fs.readFile(filePath, "utf8");

export const writeTextFile = async (
  filePath: string,
  content: string,
): Promise<void> => {
  await ensureDirectoryExists(path.dirname(filePath));
  await fs.writeFile(filePath, content, "utf8");
};

export const ensureDirectoryExists = async (
  directoryPath: string,
): Promise<void> => {
  await fs.mkdir(directoryPath, { recursive: true });
};

export const appendTextFile = async (
  filePath: string,
  content: string,
): Promise<void> => {
  await ensureDirectoryExists(path.dirname(filePath));
  await fs.appendFile(filePath, content, "utf8");
};
