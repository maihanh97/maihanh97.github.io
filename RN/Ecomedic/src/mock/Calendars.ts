export const mockData = [
    {
        date: '2020/12/08',
        'infor': [
            {
                id: 1,
                name: 'Đào Phương Anh',
                age: 20,
                gender: 'Nữ',
                hour: '12:00',
                order: 'Hẹn cafe',
            },
            {
                id: 2,
                name: 'Lê Hiên',
                age: 20,
                gender: 'Nữ',
                hour: '14:00',
                order: 'Hẹn khám',
            },
        ],
    },
    {
        date: '2020/12/11',
        'infor': [
            {
                id: 3,
                name: 'Hoàng Đình Trọng',
                age: 30,
                gender: 'Nam',
                hour: '12:00',
                order: 'Hẹn cafe',
            },
        ],
    },
    {
        date: '2020/12/15',
        'infor': [
            {
                id: 4,
                name: 'Khổng Dung',
                age: 22,
                gender: 'Nữ',
                hour: '09:00',
                order: 'Hẹn Cafe',
            },
            {
                id: 5,
                name: 'Lê Ánh',
                age: 17,
                gender: 'Nữ',
                hour: '11:00',
                order: 'Hẹn gặp',
            },
        ],
    },
    {
        date: '2020/12/17',
        'infor': [
            {
                id: 4,
                name: 'Khổng Dung',
                age: 22,
                gender: 'Nữ',
                hour: '09:00',
                order: 'Hẹn Cafe',
            },
            {
                id: 5,
                name: 'Lê Ánh',
                age: 17,
                gender: 'Nữ',
                hour: '11:00',
                order: 'Hẹn gặp',
            },
        ],
    },
];


export const listData = [
    {
        id: '1',
        name: 'Nguyễn Minh Hằng',
        order: 'Hẹn khám',
        age: '31',
        gender: 'Nữ',
        time: '2020-12-02T12:25:30-13:00',
    },
    {
        id: '2',
        name: 'Hoàng Đình Trọng',
        order: 'Hẹn Cafe',
        age: '17',
        gender: 'Nam',
        time: '2020-12-02T14:00:30-13:00',
    },
    {
        id: '3',
        name: 'Đào Phương Anh',
        order: 'Hẹn khám',
        age: '27',
        gender: 'Nữ',
        time: '2020-12-05T08:00:30-13:00',
    },
    {
        id: '4',
        name: 'Tiêu Lam Trường',
        order: 'Tư vấn y tế',
        age: '45',
        gender: 'Nam',
        time: '2020-12-07T16:00:30-13:00',
    },
    {
        id: '5',
        name: 'Đào Phương Anh',
        order: 'Hẹn khám',
        age: '27',
        gender: 'Nữ',
        time: '2020-12-08T08:00:30-13:00',
    },
    {
        id: '6',
        name: 'Tiêu Lam Trường',
        order: 'Tư vấn y tế',
        age: '45',
        gender: 'Nam',
        time: '2020-12-14T16:00:30-13:00',
    },
    {
        id: '7',
        name: 'Nguyễn Xuân Trường',
        order: 'Tư vấn y tế',
        age: '45',
        gender: 'Nam',
        time: '2020-12-02T18:00:30-13:00',
    },
    {
        id: '8',
        name: 'Nguyễn Cao Cường',
        order: 'Tư vấn y tế',
        age: '45',
        gender: 'Nam',
        time: '2020-12-16T16:00:30-13:00',
    },
    {
        id: '9',
        name: 'Nguyễn Phi Yến',
        order: 'Tư vấn y tế',
        age: '45',
        gender: 'Nam',
        time: '2020-12-22T16:00:30-13:00',
    },
];

const fetchData = fetch("https://5fe01c7deca1780017a311db.mockapi.io/Profile");
export const data: any = fetchData
    .then((response) => { return response.json() })
    .then((json) => json)
    .catch(error => console.log(error))
