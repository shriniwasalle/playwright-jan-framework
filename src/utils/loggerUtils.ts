const formatMessage = (level: string, message: string): string => {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
};

export const logInfo = (message: string): void => {
  console.log(formatMessage("INFO", message));
};

export const logWarn = (message: string): void => {
  console.warn(formatMessage("WARN", message));
};

export const logError = (message: string, error?: unknown): void => {
  console.error(formatMessage("ERROR", message));
  if (error instanceof Error) {
    console.error(error.stack);
  } else if (error !== undefined) {
    console.error(error);
  }
};

export const logDebug = (message: string): void => {
  if (process.env.DEBUG?.toLowerCase() === "true") {
    console.debug(formatMessage("DEBUG", message));
  }
};
