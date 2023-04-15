import React from 'react';

// Шаг 1. Начало.

const StepPending = ({ handleBtnStart }) => {
    return (
        <div className="px-4">
            <div className="py-3 text-center fs-5">
                <p>Это анкета на React.js. Заполните ее.</p>
            </div>
            <div className="d-grid py-3">
                <button
                    className="btn btn-success btn-lg"
                    onClick={() => handleBtnStart()}
                >
                    Заполнить
                </button>
            </div>
        </div>
    );
};

export default StepPending;
