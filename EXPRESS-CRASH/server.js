import express from 'express';
import path from 'path';
import logger from './middleware/logger.js';
import posts from './routes/posts.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logger Middleware
app.use(logger);


//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})