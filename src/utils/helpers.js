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