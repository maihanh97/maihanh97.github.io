export interface profileModel {
    link: string;
    name: string;
    age: string;
    gender: string,
    phone: string,
    height: string;
    weight: string;
    status: string;
    BMI: string;
    heart: string;
    bloodPressureMax: string;
    bloodPressureMin: string;
};

export interface historyMedical {
    id: number,
    type: string;
    nameDoctor: string;
    date: string
}

export interface workScheduleModel {
    date: string,
    infor: any
}

export interface UserDate {
    id: string;
    name: string;
    title: string;
    age: string;
    gender: string;
    time: string;
    avatar: string;
}
