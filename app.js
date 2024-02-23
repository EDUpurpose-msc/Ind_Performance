const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB with the database name
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connected to MongoDB...');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Define Course schema
const courseSchema = new mongoose.Schema({
    year: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },
    units: { type: Number, required: true },
    tags: [{ type: String }],
});

// Define Course model
const Course = mongoose.model('Course', courseSchema);

// Retrieve all published backend courses, sort them alphabetically by name, select and extract the name and specialization of each course
app.get('/courses/backend', async (req, res) => {
    try {
        const backendCourses = await Course.find({ tags: 'backend', published: true })
            .sort({ name: 1 }) // Sort by name in ascending order
            .select('name specialization'); // Select name and specialization fields

        res.json(backendCourses);
    } catch (error) {
        console.error('Error retrieving published backend courses:', error);
        res.status(500).send('Internal server error');
    }
});

// Retrieve all published BSIS courses
app.get('/courses/bsis', async (req, res) => {
    try {
        const bsisCourses = await Course.find({ program: 'BSIS', published: true });
        res.json(bsisCourses);
    } catch (error) {
        console.error('Error retrieving published BSIS courses:', error);
        res.status(500).send('Internal server error');
    }
});

// Retrieve all published BSIT courses
app.get('/courses/bsit', async (req, res) => {
    try {
        const bsitCourses = await Course.find({ program: 'BSIT', published: true });
        res.json(bsitCourses);
    } catch (error) {
        console.error('Error retrieving published BSIT courses:', error);
        res.status(500).send('Internal server error');
    }
});
