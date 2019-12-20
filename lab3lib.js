function z1() {
    let str = 'Дата : ';
    let date = new Date();
    str += date.getDate() + ' ';
    switch (date.getUTCMonth()) {
        case 0: str += 'січня'; break;
        case 1: str += 'лютого'; break;
        case 2: str += 'березня'; break;
        case 3: str += 'квітня'; break;
        case 4: str += 'травня'; break;
        case 5: str += 'червня'; break;
        case 6: str += 'липня'; break;
        case 7: str += 'серпня'; break;
        case 8: str += 'вересня'; break;
        case 9: str += 'жовтня'; break;
        case 10: str += 'листопада'; break;
        case 11: str += 'грудня'; break;
    }
    str += ' ';
    str += date.getUTCFullYear() + '\nДень тижня : ';
    switch (date.getDay()) {
        case 0: str += 'неділя'; break;
        case 1: str += 'понеділок'; break;
        case 2: str += 'вівторок'; break;
        case 3: str += 'середа'; break;
        case 4: str += 'четвер'; break;
        case 5: str += 'пятниця'; break;
        case 6: str += 'субота'; break;
    }
    str += '\nЧас : ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
}

function z2() {
    let date = new Date();
    let str = 'Номер дня : ';
    str += (date.getDay() == 0 ? 7 : date.getDay()) + '\nНазва дня : ';
    switch (date.getDay()) {
        case 0: str += 'неділя'; break;
        case 1: str += 'понеділок'; break;
        case 2: str += 'вівторок'; break;
        case 3: str += 'середа'; break;
        case 4: str += 'четвер'; break;
        case 5: str += 'пятниця'; break;
        case 6: str += 'субота'; break;
    }
    return str;
}

function z3(days) {
    let date1 = new Date();
    let date = new Date(date1.getTime() - days * 24 * 60 * 60 * 1000);
    return date;
}

function z4(year, month) {
    let date = new Date(year, month, 0);
    let str = '';
    switch (date.getDay()) {
        case 0: str += 'неділя'; break;
        case 1: str += 'понеділок'; break;
        case 2: str += 'вівторок'; break;
        case 3: str += 'середа'; break;
        case 4: str += 'четвер'; break;
        case 5: str += 'пятниця'; break;
        case 6: str += 'субота'; break;
    }
    return str;
}

function z5() {
    let date = new Date();
    let date1 = {
        fromBegin:
            date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds(),
        toEnd:
            (24 * 60 * 60 - this.fromBegin)
        

    }

    return date1;
}

function z6() {
    let date = new Date();
    let str = '';
    str += date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getUTCFullYear();
    return str;
}

function z7(date1, date2) {
    return date1.getTime() - date2.getTime();
}

function z8(date) {
    let date1 = new Date();
    let str = '';
    let div = Math.abs(date1.getTime() - date.getTime());
    console.log(div);
    if (div / 1000 < 1) {
        str = 'тільки що';
    }
    else if ((div / 1000) / 60 < 1) {
        str = `${Math.round(div / 1000)} сек. назад`;
    }
    else if (((div / 1000) / 60) / 60 < 1) {
        str = `${Math.round((div / 1000) / 60)} хв. назад`;
    }
    else {
        str = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getUTCFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }
    return str;
}
function z9(input) {
    let str = '';
    let arr = [];
    let regex = /([0-9].{1,4})(\.|\:)([0-9].{1,2})(\.|\:)([0-9].{1,2})/;
    arr = input.match(regex);
    console.log(arr);
    if (arr.length == 6) {
        return new Date(Number(arr[1]), Number(arr[3])-1, Number(arr[5]));
    }
}
function z10(string) {
    let str = '';
    let date = new Date();
    if (string == 'en') {
        switch (date.getDay()) {
            case 0: str += 'sunday'; break;
            case 1: str += 'monday'; break;
            case 2: str += 'tuesday'; break;
            case 3: str += 'wednesday'; break;
            case 4: str += 'thursday'; break;
            case 5: str += 'friday'; break;
            case 6: str += 'saturday'; break;
        }
        str += ", " + date.getDate() + " ";

        switch (date.getUTCMonth()) {
            case 0: str += 'junuary'; break;
            case 1: str += 'februery'; break;
            case 2: str += 'march'; break;
            case 3: str += 'april'; break;
            case 4: str += 'may'; break;
            case 5: str += 'june'; break;
            case 6: str += 'july'; break;
            case 7: str += 'august'; break;
            case 8: str += 'september'; break;
            case 9: str += 'october'; break;
            case 10: str += 'november'; break;
            case 11: str += 'december'; break;
        }
        str += ' ' + date.getFullYear() + ' AC, ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
    if (string == 'ua') {
        switch (date.getDay()) {
            case 0: str += 'неділя'; break;
            case 1: str += 'понеділок'; break;
            case 2: str += 'вівторок'; break;
            case 3: str += 'середа'; break;
            case 4: str += 'четвер'; break;
            case 5: str += 'пятниця'; break;
            case 6: str += 'субота'; break;
        }
        str += ", " + date.getDate() + " ";

        switch (date.getUTCMonth()) {
            case 0: str += 'січня'; break;
            case 1: str += 'лютого'; break;
            case 2: str += 'березня'; break;
            case 3: str += 'квітня'; break;
            case 4: str += 'травня'; break;
            case 5: str += 'червня'; break;
            case 6: str += 'липня'; break;
            case 7: str += 'серпня'; break;
            case 8: str += 'вересня'; break;
            case 9: str += 'жовтня'; break;
            case 10: str += 'листопада'; break;
            case 11: str += 'грудня'; break;
        }
        str += ' ' + date.getFullYear() + ' нашої ери, ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    }
    return str;
}
