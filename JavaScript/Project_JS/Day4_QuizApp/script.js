const questions =[
    {
        question:"Capital  of the India",
        answer:[
            {text:"New Delhi",correct:"true"},
            {text:"Washington DC",correct:"false"},
            {text:"Jharkhand",correct:"false"},
            {text:"BoPal",correct:"true"},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answer:[
            {text:"Australia",correct:"true"},
            {text:"Asia",correct:"false"},
            {text:"Arctic",correct:"false"},
            {text:"Africa",correct:"true"},
        ]
    },
    {
        question:"Which is the largest desert in thw world",
        answer:[
            {text:"Antarctica",correct:"true"},
            {text:"Gobi",correct:"false"},
            {text:"Sahara",correct:"false"},
            {text:"Kalahari",correct:"true"},
        ]
    },
    {

    } 
];
const questionElement =document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let questionIndex=0
let score =0



