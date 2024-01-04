import express from 'express';

import authorRouter from './routes/author.routes';
import bookRouter from './routes/book.routes';

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/author', authorRouter);
app.use('/api/book', bookRouter)

app.get("/ping", (req, res) => {
    res.json({
        message:"Pong"
    }).status(200);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});