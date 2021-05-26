/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/**
 * 时间格式化
 * @param {*} date Date对象 或 时间戳
 * @param {*} fmt "yyyy-MM-dd hh:mm:ss"
 */
export function formatTime(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (!date) return date;
    if (/^\d+$/.test(date)) {
        date = +date;
    }
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    };
    // 格式化年
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    // 格式化毫秒
    if (/(S+)/.test(fmt)) {
        const tmp = date.getMilliseconds();
        fmt = fmt.replace(RegExp.$1, (`000${tmp}`).substr((`${tmp}`).length));
    }
    // 格式化其它
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length));
        }
    }
    return fmt;
}

/**
 * 通过最近时间和单位（最近一周，最近一月等），获取时间段（时间戳数组）
 * @param {*} timeValue 最近时间
 * @param {*} timeUnit  时间单位
 */
export function getTimeRangeByUnit(timeValue, timeUnit) {
    let rangeArr = [];

    if (!timeValue || !timeUnit || timeValue <= 0) return rangeArr;

    const start = new Date().getTime();
    const end = new Date().getTime();

    switch (timeUnit) {
    case 'hours':
        rangeArr = [start - 3600 * 1000 * timeValue, end];
        break;
    case 'day':
        rangeArr = [start - 3600 * 1000 * 24 * timeValue, end];
        break;
    case 'week':
        rangeArr = [start - 3600 * 1000 * 24 * 7 * timeValue, end];
        break;
    case 'month':
        rangeArr = [start - 3600 * 1000 * 24 * 30 * timeValue, end];
        break;
    case 'year':
        rangeArr = [start - 3600 * 1000 * 24 * 365 * timeValue, end];
        break;
    }
    return rangeArr;
}

/**
 * 换算得到毫秒值
 * @param {*} timeValue
 * @param {*} timeUnit
 */
export function getMilliSecond(timeValue, timeUnit) {
    switch (timeUnit) {
    case 'second':
        return timeValue * 1000;
    case 'minute':
        return timeValue * 1000 * 60;
    case 'hour':
        return timeValue * 1000 * 3600;
    case 'day':
        return timeValue * 1000 * 3600 * 24;
    case 'week':
        return timeValue * 1000 * 3600 * 24 * 7;
    case 'month':
        return timeValue * 1000 * 3600 * 24 * 30;
    case 'year':
        return timeValue * 1000 * 3600 * 24 * 365;
    }
}

/**
 * 标准时间转化时间戳 Mon Oct 23 2018 17:20:13 GMT+0800 (中国标准时间)
 * @param {*} date
 */
export function dateToMs(date) {
    const result = new Date(date).getTime();
    return result;
}
