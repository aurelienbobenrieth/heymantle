import * as path from "path";
import { config } from "dotenv";

const envPath =
  process.env.NODE_ENV === "test"
    ? path.resolve(__dirname, "../../../../.env.test")
    : undefined;

if (envPath) config({ path: envPath });
