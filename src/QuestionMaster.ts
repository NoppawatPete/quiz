import { IQuestion } from './types';
const questionsMaster: IQuestion[] = [
    {
        id: 1,
        question: 'What is the capital of France?',
        answers: [
            { id: 1, name: 'Paris', isCorrect: true },
            { id: 2, name: 'London', isCorrect: false },
            { id: 3, name: 'Berlin', isCorrect: false },
            { id: 4, name: 'Rome', isCorrect: false }
        ]
    },
    {
        id: 2,
        question: 'What is the chemical symbol for water?',
        answers: [
            { id: 1, name: 'H2O', isCorrect: true },
            { id: 2, name: 'CO2', isCorrect: false },
            { id: 3, name: 'O2', isCorrect: false },
            { id: 4, name: 'NaCl', isCorrect: false }
        ]
    },
    {
        id: 3,
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { id: 1, name: 'William Shakespeare', isCorrect: true },
            { id: 2, name: 'Charles Dickens', isCorrect: false },
            { id: 3, name: 'Jane Austen', isCorrect: false },
            { id: 4, name: 'J.K. Rowling', isCorrect: false }
        ]
    },
    {
        id: 4,
        question: 'What is the tallest mammal?',
        answers: [
            { id: 1, name: 'Giraffe', isCorrect: true },
            { id: 2, name: 'Elephant', isCorrect: false },
            { id: 3, name: 'Rhino', isCorrect: false },
            { id: 4, name: 'Hippopotamus', isCorrect: false }
        ]
    },
    {
        id: 5,
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { id: 1, name: 'Mars', isCorrect: true },
            { id: 2, name: 'Jupiter', isCorrect: false },
            { id: 3, name: 'Saturn', isCorrect: false },
            { id: 4, name: 'Venus', isCorrect: false }
        ]
    },
    {
        id: 6,
        question: 'Who painted the Mona Lisa?',
        answers: [
            { id: 1, name: 'Leonardo da Vinci', isCorrect: true },
            { id: 2, name: 'Michelangelo', isCorrect: false },
            { id: 3, name: 'Pablo Picasso', isCorrect: false },
            { id: 4, name: 'Vincent van Gogh', isCorrect: false }
        ]
    },
    {
        id: 7,
        question: 'What is the largest ocean on Earth?',
        answers: [
            { id: 1, name: 'Pacific Ocean', isCorrect: true },
            { id: 2, name: 'Atlantic Ocean', isCorrect: false },
            { id: 3, name: 'Indian Ocean', isCorrect: false },
            { id: 4, name: 'Arctic Ocean', isCorrect: false }
        ]
    },
    {
        id: 8,
        question: 'What is the chemical symbol for gold?',
        answers: [
            { id: 1, name: 'Au', isCorrect: true },
            { id: 2, name: 'Ag', isCorrect: false },
            { id: 3, name: 'Cu', isCorrect: false },
            { id: 4, name: 'Fe', isCorrect: false }
        ]
    },
    {
        id: 9,
        question: 'What is the capital of Japan?',
        answers: [
            { id: 1, name: 'Tokyo', isCorrect: true },
            { id: 2, name: 'Beijing', isCorrect: false },
            { id: 3, name: 'Seoul', isCorrect: false },
            { id: 4, name: 'Bangkok', isCorrect: false }
        ]
    },
    {
        id: 10,
        question: 'Who discovered gravity?',
        answers: [
            { id: 1, name: 'Isaac Newton', isCorrect: true },
            { id: 2, name: 'Albert Einstein', isCorrect: false },
            { id: 3, name: 'Galileo Galilei', isCorrect: false },
            { id: 4, name: 'Nikola Tesla', isCorrect: false }
        ]
    },
    {
        id: 11,
        question: 'What is the powerhouse of the cell?',
        answers: [
            { id: 1, name: 'Mitochondria', isCorrect: true },
            { id: 2, name: 'Nucleus', isCorrect: false },
            { id: 3, name: 'Ribosome', isCorrect: false },
            { id: 4, name: 'Golgi Apparatus', isCorrect: false }
        ]
    },
    {
        id: 12,
        question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
        answers: [
            { id: 1, name: 'Venus', isCorrect: true },
            { id: 2, name: 'Mars', isCorrect: false },
            { id: 3, name: 'Jupiter', isCorrect: false },
            { id: 4, name: 'Saturn', isCorrect: false }
        ]
    },
    {
        id: 13,
        question: 'Who invented the telephone?',
        answers: [
            { id: 1, name: 'Alexander Graham Bell', isCorrect: true },
            { id: 2, name: 'Thomas Edison', isCorrect: false },
            { id: 3, name: 'Nikola Tesla', isCorrect: false },
            { id: 4, name: 'Albert Einstein', isCorrect: false }
        ]
    },
    {
        id: 14,
        question: 'What is the largest organ in the human body?',
        answers: [
            { id: 1, name: 'Skin', isCorrect: true },
            { id: 2, name: 'Liver', isCorrect: false },
            { id: 3, name: 'Brain', isCorrect: false },
            { id: 4, name: 'Heart', isCorrect: false }
        ]
    },
    {
        id: 15,
        question: 'What is the capital of Australia?',
        answers: [
            { id: 1, name: 'Canberra', isCorrect: true },
            { id: 2, name: 'Sydney', isCorrect: false },
            { id: 3, name: 'Melbourne', isCorrect: false },
            { id: 4, name: 'Brisbane', isCorrect: false }
        ]
    },
    {
        id: 16,
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { id: 1, name: 'Harper Lee', isCorrect: true },
            { id: 2, name: 'J.D. Salinger', isCorrect: false },
            { id: 3, name: 'F. Scott Fitzgerald', isCorrect: false },
            { id: 4, name: 'Ernest Hemingway', isCorrect: false }
        ]
    },
    {
        id: 17,
        question: 'What is the chemical symbol for oxygen?',
        answers: [
            { id: 1, name: 'O', isCorrect: true },
            { id: 2, name: 'Ox', isCorrect: false },
            { id: 3, name: 'Om', isCorrect: false },
            { id: 4, name: 'Oxg', isCorrect: false }
        ]
    },
    {
        id: 18,
        question: 'What is the main ingredient in guacamole?',
        answers: [
            { id: 1, name: 'Avocado', isCorrect: true },
            { id: 2, name: 'Tomato', isCorrect: false },
            { id: 3, name: 'Onion', isCorrect: false },
            { id: 4, name: 'Garlic', isCorrect: false }
        ]
    },
    {
        id: 19,
        question: 'Who is known as the father of modern physics?',
        answers: [
            { id: 1, name: 'Albert Einstein', isCorrect: true },
            { id: 2, name: 'Isaac Newton', isCorrect: false },
            { id: 3, name: 'Galileo Galilei', isCorrect: false },
            { id: 4, name: 'Nikola Tesla', isCorrect: false }
        ]
    },
    {
        id: 20,
        question: 'What is the largest desert in the world?',
        answers: [
            { id: 1, name: 'Sahara Desert', isCorrect: true },
            { id: 2, name: 'Arabian Desert', isCorrect: false },
            { id: 3, name: 'Gobi Desert', isCorrect: false },
            { id: 4, name: 'Antarctic Desert', isCorrect: false }
        ]
    }
];

export default questionsMaster;