import { Application } from "express";
import request from "supertest";
import createApp from "../../src/app";

describe("/api/auth test", () => {
    let app: Application;
    beforeAll(async () => {
        app = await createApp();
    });

    it("✅[GET /login] login", async () => {
        const res = await request(app).post("/api/auth/login");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("msg");
        expect(res.body.msg).toBe("login");
    });
    it("✅[GET /join] join", async () => {
        const res = await request(app).post("/api/auth/join");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("msg");
        expect(res.body.msg).toBe("join");
    });
});
