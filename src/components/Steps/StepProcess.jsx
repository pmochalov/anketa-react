import React from 'react';
import InputText from './../UI/InputText';
import Textarea from './../UI/Textarea';
import Radio from './../UI/Radio';
import Checkbox from '../UI/Checkbox';

// Шаг 2. Заполнение анкеты

const StepProcess = ({
    step,
    questions,
    question,
    handleQuestionChange,
    stepBack,
    stepForward,
    isFinished,
    isDisabled,
    handleBtnFinish,
}) => {
    return (
        <div className="px-4">
            <div className="py-1 text-muted text-center">
                <small>
                    Вопрос {step + 1} из {questions.length}
                </small>
            </div>

            <div className="py-3 fs-5">
                <h3 className="text-center">{question.title}</h3>

                {question.type === 'text' && (
                    <>
                        <InputText
                            question={question}
                            handleQuestionChange={handleQuestionChange}
                        />
                    </>
                )}

                {question.type === 'textarea' && (
                    <>
                        <Textarea
                            question={question}
                            handleQuestionChange={handleQuestionChange}
                        />
                    </>
                )}

                {question.type === 'radio' && (
                    <>
                        <Radio
                            question={question}
                            handleQuestionChange={handleQuestionChange}
                        />
                    </>
                )}

                {question.type === 'checkbox' && (
                    <>
                        <Checkbox
                            question={question}
                            handleQuestionChange={handleQuestionChange}
                        />
                    </>
                )}
            </div>

            <div className="py-3 text-center">
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        disabled={step === 0}
                        onClick={() => stepBack()}
                        className="btn btn-lg btn-light"
                    >
                        Назад
                    </button>
                    <button
                        type="button"
                        disabled={step === questions.length - 1 || isDisabled}
                        onClick={() => stepForward()}
                        className="btn btn-lg btn-light"
                    >
                        Дальше
                    </button>
                </div>
            </div>

            {isFinished && (
                <>
                    <div className="d-grid py-2">
                        <button
                            className="btn btn-lg btn-success"
                            onClick={() => handleBtnFinish()}
                        >
                            Завершить
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default StepProcess;
