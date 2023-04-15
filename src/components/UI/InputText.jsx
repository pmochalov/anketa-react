import React from 'react';

const InputText = ({ question, handleQuestionChange }) => {

    const [text, setText] = React.useState('');

    const handleChange = (e) => {
        const answerText = e.target.value;
        const isCompleted = answerText.trim().length !== 0;

        setText(answerText);        
        
        handleQuestionChange({ ...question, answer: answerText, completed: isCompleted });    
    };

    React.useEffect(() => {
        setText(question.answer);
    }, [question]);

    return (
        <input type="text" value={text} onChange={handleChange} className="form-control" />
    );
};

export default InputText;