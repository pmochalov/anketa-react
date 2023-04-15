const questionsData = [
    {
        title: 'Как вас зовут?',
        type: 'text',
        completed: false,
        answer: ''
    },
    {
        title: 'Ваш возраст:',
        type: 'radio',
        completed: false,
        options: [
            {
                title: '18-29 лет',
                checked: false
            },
            {
                title: '30-40 лет',
                checked: false
            },
            {
                title: '40-50 лет',
                checked: false
            },
            {
                title: 'более 50 лет',
                checked: false
            }           
        ],
    },      
    {
        title: 'С какими из этих технологий вы работали?',
        type: 'checkbox',
        completed: false,
        options: [
            {
                title: 'JavaScript',
                checked: false,
            },
            {
                title: 'Html',
                checked: false,
            },
            {
                title: 'Css',
                checked: false,
            },
            {
                title: 'Php',
                checked: false,
            },
            {
                title: 'MySQL',
                checked: false,
            },
        ],
    },
    {
        title: 'Расскажите о себе',
        type: 'textarea',
        completed: false,
        answer: '',
    }
];

export default questionsData;