import React from 'react';

const Textarea = ({question, handleQuestionChange}) => {

    const [text, setText] = React.useState('');

    const handleChange = (e) => {
        const answerText = e.target.value;
        const isCompleted = answerText.trim().length !== 0;

        setText(answerText);

        handleQuestionChange({...question, answer: answerText, completed: isCompleted});
    };

    React.useEffect(() => {
        setText(question.answer);
    }, [question]);

    return (
        <textarea value={text} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1"
            rows="3"></textarea>
    );
};

export default Textarea;