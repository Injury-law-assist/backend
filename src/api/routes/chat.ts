import { Router } from "express";

export default ({ app }: { app: Router }) => {
    const route = Router();
    app.use("/chat", route);
};
