export const NavLinks = [
    { href: '#choice', key: 'choice', text: 'Туры' },
    { href: '#constructor', key: 'constructor', text: 'Создать тур' },
    { href: '#response', key: 'response', text: 'Отзывы' },
    { href: '#story', key: 'story', text: 'Истории' },
]

export const ChoiceOptions = [
    { href: '#!', key: 'Authentic', text: 'Авторские' },
    { href: '#!', key: 'Campaign', text: 'Походы' },
    { href: '#!', key: 'Rafting', text: 'Сплавы' },
    { href: '#!', key: 'Cycling', text: 'Велопрогулки' },
]

export const cardsData = [
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-1.jpg' },
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-2.jpg' },
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-3.jpg' },
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-4.jpg' },
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-5.jpg' },
    { title: 'Путешествие в горы', price: 80000, imageSrc: '/image/card-tour/card-tour-photo-6.jpg' },
];

export const responseData = [
    { name: 'Мария', text: ['Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.'], tour: "Вдали от дома", imageSrc: '/image/review-photo/review-photo-1.jpg' },
    {
        name: 'Павел', text: ["Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу(специалистов) участие в формировании новых предложений.", "Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."], tour: "Путешествие в горы", imageSrc: '/image/review-photo/review-photo-2.jpg'
    },
];

export const photoArray = [
    ['/image/travel-photo/travel-photo-1.jpg', '/image/travel-photo/travel-photo-2.jpg', '/image/travel-photo/travel-photo-3.jpg', '/image/travel-photo/travel-photo-4.jpg'],
    ['/image/travel-photo/travel-photo-5.jpg', '/image/travel-photo/travel-photo-6.jpg', '/image/travel-photo/travel-photo-7.jpg', '/image/travel-photo/travel-photo-8.jpg', '/image/travel-photo/travel-photo-9.jpg'],
    ['/image/travel-photo/travel-photo-10.jpg', '/image/travel-photo/travel-photo-11.jpg', '/image/travel-photo/travel-photo-12.jpg', '/image/travel-photo/travel-photo-13.jpg'],
];

export const stories = [
    {
        title: 'Автостопом',
        transfer: 'в Стамбул',
        content: [
            {
                type: 'paragraph',
                text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
            },
            {
                type: 'list',
                items: [
                    'вкусная еда',
                    'дешевый транспорт',
                    'красивый город.',
                ],
            },
        ],
        socialLinks: [
            { url: '#!', text: 'instagram' },
            { url: '#!', text: 'facebook' },
            { url: '#!', text: 'YouTube' },
        ],
        imageUrl: '/image/story-photo/story-photo-1.jpg',
    },

    {
        title: 'Автостопом',
        transfer: 'в Стамбул',
        content: [
            {
                type: 'paragraph',
                text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
            }
        ],
        text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров...',
        socialLinks: [
            { url: '#!', text: 'instagram' },
            { url: '#!', text: 'ВКонтакте' },
        ],
        imageUrl: '/image/story-photo/story-photo-2.jpg',
    },
    {
        title: 'Автостопом',
        transfer: 'в Стамбул',
        content: [
            {
                type: 'paragraph',
                text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
            }
        ],
        text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров...',
        socialLinks: [
            { url: '#!', text: 'instagram' },
            { url: '#!', text: 'facebook' },
            { url: '#!', text: 'ВКонтакте' },
        ],
        imageUrl: '/image/story-photo/story-photo-3.jpg',
    },
];

export const footerLinks = [
    {
        url: '#!',
        name: 'instagram',
        imageUrl: {
            small: '/image/socials/inst-small.svg',
            full: '/image/socials/inst.svg'
        }
    },
    {
        url: '#!',
        name: 'facebook',
        imageUrl: {
            small: '/image/socials/fb-small.svg',
            full: '/image/socials/fb.svg'
        }
    },
    {
        url: '#!',
        name: 'vkontakte',
        imageUrl: {
            small: '/image/socials/vk-small.svg',
            full: '/image/socials/vk.svg'
        }
    },
];