import { Migration } from "sqlitecapacitor/src/Migration";

export const runMigrations = async () => {
  const migration = new Migration();
  migration.registerMigration(
    "create_users_table",
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)"
  );
  migration.registerMigration(
    "create_categories_table",
    "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
  );
  migration.registerMigration(
    "create_wallets_table",
    "CREATE TABLE IF NOT EXISTS wallets (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, name TEXT, balance TEXT)"
  );
  migration.registerMigration(
    "create_transactions_table",
    "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, description TEXT, amount TEXT, category_id INTEGER, date_created TEXT)"
  );
  //Ajoute une table transferts entre wallets
  migration.registerMigration(
    "create_transfers_table",
    "CREATE TABLE IF NOT EXISTS transfers (id INTEGER PRIMARY KEY AUTOINCREMENT, from_wallet_id INTEGER, to_wallet_id INTEGER, amount TEXT, date_created TEXT)"
  );
  //Ajoute une colonne user_id à la table wallets
  migration.registerMigration(
    "add_user_id_to_wallets",
    "ALTER TABLE wallets ADD COLUMN user_id INTEGER"
  );
  //Ajoute une colonne user_id à la table transactions
  migration.registerMigration(
    "add_user_id_to_transactions",
    "ALTER TABLE transactions ADD COLUMN user_id INTEGER"
  );
  migration.registerMigration(
    "add_category_id_to_transactions",
    "ALTER TABLE transactions ADD COLUMN category_id INTEGER"
  );
  migration.registerMigration(
    "add_date_created_to_transactions",
    "ALTER TABLE transactions ADD COLUMN date_created TEXT"
  );
  migration.registerMigration(
    "add_foreign_key_to_wallets_table",
    "ALTER TABLE wallets ADD FOREIGN KEY (user_id) REFERENCES users(id)"
  );
  migration.registerMigration(
    "add_foreign_key_to_transactions_table",
    "ALTER TABLE transactions ADD FOREIGN KEY (user_id) REFERENCES users(id)"
  );
  migration.registerMigration(
    "add_foreign_key_to_transactions_table",
    "ALTER TABLE transactions ADD FOREIGN KEY (category_id) REFERENCES categories(id)"
  );
};
