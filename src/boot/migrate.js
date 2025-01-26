import { runMigrations } from "../migrations/migrations";

(async () => {
  await runMigrations();
})();
