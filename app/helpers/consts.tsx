import exportedFn from "./functions";

const initialMonth = (val: any) => {
    switch (val){
        case 0: return 'Januari';
        case 1: return 'Februari';
        case 2: return 'Maret';
        case 3: return 'April';
        case 4: return 'Mei';
        case 5: return 'Juni';
        case 6: return 'July';
        case 7: return 'Agustus';  
        case 8: return 'September';
        case 9: return 'Oktober';
        case 10: return 'November';
        case 11: return 'Desember';
    }
}

const dayName = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

const convertDayToFullname = (val: any) => {
    switch(val) {
        case 'Mon': return 'Senin';
        case 'Tue': return 'Selasa';
        case 'Wed': return 'Rabu';
        case 'Thu': return 'Kamis';
        case 'Fri': return 'Jumat';
        case 'Sat': return 'Sabtu';
        case 'Sun': return 'Minggu';
    }
}

const timeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9]) ([AaPp][Mm])$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const events = [
    {
        id: exportedFn.getRandomColor(),
        date: `${new Date(2022, 7, 8)}`,
        name: 'string',
        email: 'string@gmail.com',
        time: '07:08 pm',
        color: 'FFFFFF',
    }
]

const exportedConstant = {
    initialMonth,
    convertDayToFullname,
    dayName,
    events,
    timeRegex,
    emailRegex
}


export default exportedConstant;