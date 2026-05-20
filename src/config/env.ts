import { devConfig } from "./environments/dev";
import { stageConfig } from "./environments/stage";
import { prodConfig } from "./environments/prod";
import { qaConfig } from "./environments/qa";

type Env = "dev" | "qa" | "stage" | "prod";

const env = (process.env.ENV || "dev").toLowerCase() as Env; // qa

const configMap = {
  dev: devConfig,
  qa: qaConfig,
  prod: prodConfig,
  stage: stageConfig,
};

export const currentEnv = configMap[env]; // configMap[qa]
