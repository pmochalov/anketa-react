import React from 'react';
import { AnketaContext } from '../../App';

// Шаг 3. Анкета заполнена. Финиш

const StepFinished = ({ handleBtnReload }) => {
    const { questions } = React.useContext(AnketaContext);

    return (
        <div className="px-4 text-center">
            <div className="py-1 fs-5">
                <p className="text-success fw-bold">Спасибо за ответы!</p>
            </div>

            <div className="py-3">
                <table className="table table-bordered">
                    {questions.map((q, index) => (
                        <TableRow
                            key={index}
                            rowData={q}
                            className={'text-danger'}
                        />
                    ))}
                </table>
            </div>

            <div className="d-grid py-2">
                <button
                    className="btn btn-success btn-lg"
                    onClick={() => handleBtnReload()}
                >
                    В начало
                </button>
            </div>
        </div>
    );
};


const TableRow = ({ rowData }) => {
    return (
        <tbody>
            <tr>
                <td className="py-1 text-start text-bold fw-bold">
                    {rowData.title}
                </td>
                <td className="py-1 text-start">
                    {(rowData.type === 'text' || rowData.type === 'textarea') &&
                        rowData.answer}

                    {(rowData.type === 'checkbox' ||
                        rowData.type === 'radio') &&
                        rowData.options
                            .filter((q) => q.checked)
                            .map((q, i) => (
                                <p key={i} className="my-0">
                                    &middot; {q.title}
                                </p>
                            ))}
                </td>
            </tr>
        </tbody>
    );
};

export default StepFinished;
