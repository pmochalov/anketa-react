import React from 'react';

const Checkbox = ({ question, handleQuestionChange }) => {
    const [options, setOptions] = React.useState([]);

    const handleChange = (e) => {
        const newOptions = options.map((obj, index) => {
            if (+e.target.value === index) {
                return { ...obj, checked: !obj.checked };
            }
            return { ...obj };
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
                type="checkbox"
                name="checkboxInput[]"
                value={index}
                id={`checkboxInput${index}`}
                onChange={handleChange}
                checked={checked}
            />
            <label
                className="form-check-label"
                htmlFor={`checkboxInput${index}`}
            >
                {title}
            </label>
        </div>
    );
};

export default Checkbox;
