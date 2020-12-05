export interface profileModel{   
    link: string;
    name: string;
    age: string;
    gender: string,
    phone: string,
    height: string;
    weight: string;
    status: string;
    BMI: string;
    heart : string;
    bloodPressureMax: string;
    bloodPressureMin: string;
};

export interface historyMedical{
    id: number,
    type: string;
    nameDoctor: string;
    date : string
}


export interface homeModel{
    navigation : any;
    navigate : any
}


