import React from 'react';

import Title from './components/Title';
import Container from './components/Container';
import StepPending from './components/Steps/StepPending';
import StepProcess from './components/Steps/StepProcess';
import StepFinished from './components/Steps/StepFinished';

import questionsData from './questions';


export const AnketaContext = React.createContext();

function App() {

    const [status, setStatus] = React.useState('pending'); // pending, process, finished
    const [step, setStep] = React.useState(0);

    const [questions, setQuestions] = React.useState([]);
    const [question, setQuestion] = React.useState({});

    const [isDisabled, setIsDisabled] = React.useState(true);
    const [isFinished, setIsFinished] = React.useState(false);

    const handleBtnStart = () => {
        setStatus('process');
        setStep(0);
        setQuestion(questions.find((_, index) => index === 0));
    };

    const handleQuestionChange = (answer) => {
        const newQuestions = questions.map((obj, index) => {
            if (index === step) {
                return { ...answer };
            }
            return { ...obj };
        });

        setQuestions(newQuestions);
        setIsDisabled(!answer.completed);
        setIsFinished(newQuestions.findIndex(obj => obj.completed === false) === -1);
    };

    const stepBack = () => {
        setStep(step - 1);
        setQuestion(questions.find((_, index) => index === step - 1));
        setIsDisabled(!questions[step - 1].completed);
    };

    const stepForward = () => {
        setStep(step + 1);
        setQuestion(questions.find((_, index) => index === step + 1));
        setIsDisabled(!questions[step + 1].completed);
    };

    const handleBtnFinish = () => {
        setIsFinished(false);
        setStatus('finished');
    };

    const handleBtnReload = () => {
        setStep(0);
        setStatus('pending');
        setQuestions([...questionsData]);
    };

    React.useEffect(() => {
        setQuestions([...questionsData]);
    }, []);

    return (
        <AnketaContext.Provider value={{ questions }}>

            <Container>

                <Title title="Анкета" />

                {status === 'pending' && <StepPending handleBtnStart={handleBtnStart} />}

                {status === 'process' && <StepProcess step={step}
                    questions={questions}
                    question={question}
                    handleQuestionChange={handleQuestionChange}
                    stepBack={stepBack}
                    stepForward={stepForward}
                    isFinished={isFinished}
                    isDisabled={isDisabled}
                    handleBtnFinish={handleBtnFinish}
                />}

                {status === 'finished' && <StepFinished handleBtnReload={handleBtnReload} />}

            </Container>

        </AnketaContext.Provider>
    );
}

export default App;
