import { Router } from "express";
import Container from "typedi";
import ChatController from "../controllers/chat";

export default ({ app }: { app: Router }) => {
    const route = Router();
    app.use("/chat", route);
    route.get("/", Container.get(ChatController).getChatRoom.bind(ChatController));
    route.post("/", Container.get(ChatController).joinChatRoom.bind(ChatController));
    route.delete("/", Container.get(ChatController).exitChatRoom.bind(ChatController));
    route.get("/messages", Container.get(ChatController).getMessages.bind(ChatController));
};
