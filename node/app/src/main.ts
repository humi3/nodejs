export class testTableEntity {
    public id: number;
    public name: String;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const user1 = new testTableEntity(1, 'kuri');

console.dir(user1.id);
console.dir(user1.name);

import * as mysql from 'mysql';
import { Connection, MysqlError } from "mysql";

export interface DbConfig {
    host: string;
    user: string;
    password: string;
    database: string;
}

const dbConfig: DbConfig = {
    host: 'mysql_host',
    user: 'docker',
    password: 'docker',
    database: 'test_database'
}

const connection = mysql.createConnection(dbConfig);

connection.connect();

const select: string = 'select * from test_table';

connection.query(select, (err: MysqlError | null, results: any) => {
    if (err) {
        console.dir(err);
        return;
    }
    console.dir(results);
});

connection.end();