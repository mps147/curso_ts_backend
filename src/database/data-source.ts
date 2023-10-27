import { DataSource } from "typeorm";
import "reflect-metadata";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "ts_curso",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/**/*.entity.ts"],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize();

export default AppDataSource;
