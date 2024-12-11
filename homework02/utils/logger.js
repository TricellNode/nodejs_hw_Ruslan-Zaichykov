import colors from "colors/safe.js";
import dotenv from "dotenv";

dotenv.config();

const COLORS_ENABLED = process.env.COLORS_ENABLED
  ? parseInt(process.env.COLORS_ENABLED, 10)
  : 0;

function createLogger(prefix) {
  const colorizePrefix = (method) => {
    if (COLORS_ENABLED === 1) {
      if (method === "log") {
        return colors.green(prefix + ":");
      } else if (method === "warn") {
        return colors.yellow(prefix + ":");
      }
    }
    return prefix + ":";
  };

  return {
    log: (message) => {
      console.log(colorizePrefix("log") + " " + message);
    },
    warn: (message) => {
      console.error(colorizePrefix("warn") + " " + message);
    },
  };
}

export default createLogger;
