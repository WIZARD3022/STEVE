// qa.js

// List of possible questions and their answers
const questionAnswerMap = [
    { question: "hello", answer: "Hello! How can I help you?" },
    { question: "your name", answer: "My name is DIGI Sakha!" },
    { question: "who are you", answer: "My name is DIGI Sakha!" },
    { question: "how are you", answer: "I'm just a program, but I'm doing great!" },
    { question: "can you think or feel", answer: "I can't think or feel emotions like humans do." },
    { question: "can you tell me a story", answer: "Once upon a time, there was a voice assistant who loved to help people..." },
    { question: "do you sleep", answer: "I don't sleep, I'm always awake!" },
    { question: "do you have a family", answer: "I don't have a family like humans do." },
    { question: "can you help me learn a language", answer: "Yes, I can help you practice new languages!" },
    { question: "do you have a favorite book", answer: "I don't have a favorite book, but I can suggest some!" },
    { question: "can you play games", answer: "I can help you find games, but I can't play them!" },
    { question: "what is your favorite hobby", answer: "Helping you is my favorite hobby!" }
];

// Function to check the user's question and return the answer
function getAnswerForQuestion(question) {
    for (const qa of questionAnswerMap) {
        if (question.includes(qa.question)) {
            return qa.answer;
        }
    }

    // If no predefined answer is found, return an empty string
    return "";
}
