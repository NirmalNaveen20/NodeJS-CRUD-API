import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 23,
        preferLanguage: "Java"
    },
    {
        firstName: "Sia",
        lastName: "Shim",
        age: 21,
        preferLanguage: "React"
    }
]

router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    
});

export default router;