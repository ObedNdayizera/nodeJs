const express = require('express');
const path = require('path');
const posts = require('./routes/posts')

const app = express();

const PORT = process.env.PORT || 8000;

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})