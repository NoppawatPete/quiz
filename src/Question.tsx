import React, { useEffect, useState } from 'react';
import questionsMaster from './QuestionMaster';
import { IQuestion, IAnswers, IUserAnswers } from './types';

interface QuestionProps {
    handleScore(score: number, name: string): void;
}

const Question: React.FC<QuestionProps> = ({ handleScore }) => {
    const [questionList, setQuestionList] = useState<IQuestion[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<IUserAnswers[]>([]);
    const [name, setName] = useState('');

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        const randomQuestions = getRandomQuestions();
        setQuestionList(randomQuestions);
        setName('');
        setSelectedAnswer([]);
    }

    const getRandomQuestions = (): IQuestion[] => {
        const shuffledQuestions = questionsMaster.sort(() => Math.random() - 0.5);

        return shuffledQuestions.map(question => ({
            ...question,
            answers: getRandomAnswers(question),
        }));
    };
      
    const getRandomAnswers = (question: IQuestion): IAnswers[] => {
        return question.answers.sort(() => Math.random() - 0.5);
    };
    
    const handleAnswerSelection = (questionId: number, answerId: number) => {
        setSelectedAnswer(prevSelectedAnswers => {
            const index = prevSelectedAnswers.findIndex(answer => answer.questionId === questionId);
            if (index >= 0) {
                return prevSelectedAnswers.map((answer, i) => {
                    if (i === index) {
                        return { ...answer, answersId: answerId };
                    }
                    return answer;
                });
            }
            return [...prevSelectedAnswers, { questionId, answersId: answerId }];
        });
    };

    const handleCheckRadio = (questionId: number, answerId: number): boolean => {
        return selectedAnswer.some(s => s.questionId == questionId && s.answersId == answerId);;
    }

    const handleSubmit = () => {
        if (name == '') {
            alert('Please enter name.');
            window.scrollTo(0, 0);
            return;
        }

        const answeredQuestions = selectedAnswer.length;
        if (answeredQuestions < questionList.length) {
            alert(`You have only answered ${answeredQuestions} out of ${questionList.length} questions.`);
            return;
        }
        
        let score = 0;
        selectedAnswer.forEach(selected => {
            const question = questionList.find(q => q.id === selected.questionId);
            if (question) {
                const selectedAnswer = question.answers.find(a => a.id === selected.answersId);
                if (selectedAnswer && selectedAnswer.isCorrect) {
                    score++;
                }
            }
        });
        alert(`Your score: ${score}/${questionList.length}`);
        handleScore(score, name);
        window.scrollTo(0, 0);
        init();
    };
    
    return (
        <div className='question'>
            <div>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            {questionList.map((q, i) => (
                <div key={i}>
                    <h2>{q.question}</h2>
                    <ul>
                        {q.answers.map((answer, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question_${i}_${index}`}
                                        value={answer.name}
                                        checked={handleCheckRadio(q.id, answer.id)}
                                        onChange={() => handleAnswerSelection(q.id, answer.id)}
                                    />
                                    {answer.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Question;
