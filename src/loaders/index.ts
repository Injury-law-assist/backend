import { Application } from 'express';
import expressLoader from './express';
export default async ({ app }: { app: Application }) => {
    await expressLoader({ app });
    console.log('express loaded successfully 😊');
};
