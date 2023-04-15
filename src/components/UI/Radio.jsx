import React from 'react';

const Radio = ({ question, handleQuestionChange }) => {
    const [options, setOptions] = React.useState([]);

    const handleChange = (e) => {
        const newOptions = options.map((obj, index) => {
            if (+e.target.value === index) {
                return { ...obj, checked: true };
            } else {
                return { ...obj, checked: false };
            }
        });

        setOptions(newOptions);

        handleQuestionChange({
            ...question,
            options: newOptions,
            completed: newOptions.findIndex((o) => o.checked) !== -1,
        });
    };

    React.useEffect(() => {
        setOptions(question.options.map((el) => el));
    }, [question]);

    return options.map((option, index) => {
        return (
            <Item
                key={index}
                index={index}
                handleChange={handleChange}
                checked={option.checked}
                title={option.title}
            />
        );
    });
};

const Item = ({ index, handleChange, checked, title }) => {
    return (
        <div className="form-check" key={index}>
            <input
                className="form-check-input"
                type="radio"
                name="radioInput"
                value={index}
                id={`radioInput${index}`}
                checked={checked}
                onChange={handleChange}
            />
            <label className="form-check-label" htmlFor={`radioInput${index}`}>
                {title}
            </label>
        </div>
    );
};

export default Radio;
