const express=require('express')

const router=express.Router()
const triviaQuestions = [
    {
    question: "What is the capital of France?",
    answer: "Paris",
    },
    {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    },
    {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
    },
    ];

let score = 0;   
let index = 0;

router.get('/quiz',(req,res) =>{
    score = 0;
    index = 0;
    if (triviaQuestions.length > 0) {
        
        res.json({
        question: triviaQuestions[index].question,
        });
        } else {
        
        res.status(400).send("No trivia questions available");
        }
        });

router.post("/quiz", (req, res) => {
    const userAnswer = req.body.answer;
    if (userAnswer === triviaQuestions[index].answer) {
        
    score++;
    res.send("Correct!");
    } 
    else {
        res.send("Wrong!");
        }
    
    index++;
        
    if (index < triviaQuestions.length) {
        res.json({
        question: triviaQuestions[index].question,
        });
    } 
    else {
        res.send("End of quiz");
        }
        });

router.get("/quiz/score", (req, res) => {
    res.json({score: score});
    });

module.exports=router;
        
