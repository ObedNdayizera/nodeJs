import express from 'express';
import path from 'path';
import posts from './routes/posts';

const app = express();

const PORT = process.env.PORT || 8000;

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})