export function getPastMonth(date) {
    const d = new Date(date);
    const m = d.getMonth();
    d.setMonth(d.getMonth() - 1);

    if (d.getMonth() === m) d.setDate(0);
    d.setHours(0, 0, 0);
    d.setMilliseconds(0);

    return new Date(d);
}

export function dateMMMDD(date) {
    return date.toString().substring(4, 10);
}

export function formatBytes(bytes, decimals = 1) {
    if (bytes === 0) return [0, 'B'];

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return [parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), sizes[i]];
}

export function getDaysArray(month, year) {
    const today = new Date();
    const daysArr = new Array(42);
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);

    for (let i = 1; i <= lastDay.getDate(); i++) {
        let date = new Date(year, month, i);
        daysArr[i+firstDay.getDay()-1] = {
            date,
            number: i,
            className: date.getMonth() === today.getMonth() && date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear() ? 'today' : ''
        }
    }

    for (let i = prevMonthLastDay.getDate() - (firstDay.getDay() - 1); i <= prevMonthLastDay.getDate(); i++) {
        daysArr[i - (prevMonthLastDay.getDate() - (firstDay.getDay() - 1))] = {
            date: new Date(prevMonthLastDay.getFullYear(), prevMonthLastDay.getMonth(), i),
            number: i,
            className: 'disabled'
        }
    }

    for (let i = 1 ; i <= 42 - lastDay.getDate() - firstDay.getDay(); i++) {
        daysArr[i + lastDay.getDate() + firstDay.getDay() - 1] = {
            date: new Date(year, month + 1, i),
            number: i,
            className: 'disabled'
        }
    }

    return daysArr
}

export function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

export const monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];