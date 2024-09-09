import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})