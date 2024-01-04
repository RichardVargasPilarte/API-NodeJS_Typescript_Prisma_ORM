import { Router } from "express";

import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor} from "../controllers/author.controllers";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);


export default authorRouter;