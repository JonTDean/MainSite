// Preps the incoming [date :: time] to be dynamically transposed. 
export function pubDatePrep(time){
    // Split the incoming string into an array of strings to be further transposed.
    // Destructure time into two separate variables 
    const [ ymd, hms ] = time.split(" ");

    // Destructure further into definitive categories
    // YMD
    const [year, month, day] = ymd.split("-");
    // HMS
    const [hour, minute, second] = hms.split(":");

    return `${monthTransposal(month)} ${dayTransposal(day)}, ${year} at ${timeTransposal(hour, minute, second)}`
}

// Converts Military time to AM/PM.
export function timeTransposal(hour, minute, second){
    if(hour > 12){
        return(`${hour-12}:${minute}PM`);
    }else{
        return(`${hour}:${minute}AM`);
    }
}

// Converts Day to proper english string format.
export function dayTransposal(day){
    
    const st = {
        1 : true,
        21 : true,
        31 : true
    }

    const nd = {
        2 : true,
        22 : true
    }

    const rd = {
        3 : true,
        23 : true
    }

    const th = {
        4 : true,
        5 : true,
        6 : true,
        7 : true,
        8 : true,
        9 : true,
        10 : true,
        11 : true,
        12 : true,
        13 : true,
        14 : true,
        15 : true,
        16 : true,
        17 : true,
        18 : true,
        19 : true,
        20 : true,
        24 : true,
        25 : true,
        26 : true,
        27 : true,
        28 : true,
        29 : true,
        30 : true
    }

    if(st[parseInt(day)]){     
        return(`${day}st`);
    }else if(nd[parseInt(day)]){
        return(`${day}nd`);
    }else if(rd[parseInt(day)]){
        return(`${day}rd`);
    }else if(th[parseInt(day)]){
        return(`${day}th`);
    }
}

// Converts numerical month to english month
export function monthTransposal(month){

    const months ={
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 :"December"
    }

    for(const key in months){
        // Only works if key is also parseInt'd otherwise throws undefined
        if(parseInt(key) === parseInt(month)){
            return months[parseInt(month)];
        }
    }
}