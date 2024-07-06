import { Application } from 'express';
import expressLoader from './express';
import mysqlLoader from './mysql';
import dependencyInjectionLoader from './dependency-injection';
export default async ({ app }: { app: Application }) => {
    await expressLoader({ app });
    console.log('express loaded successfully 😊');

    const pool = await mysqlLoader();
    console.log('promise mysql2 loaded successfully 😊');

    await dependencyInjectionLoader();
};
