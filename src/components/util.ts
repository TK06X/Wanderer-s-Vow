// 定义一个枚举类型，用于表示周几
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// 定义一个公共方法，用于获取传入日期是周几
export function getWeekday(date: Date): string {
    // 获取传入日期对应的周几（0 表示星期日）
    const weekday = date.getDay();

    // 根据周几返回相应字符串
    switch (weekday) {
        case Weekday.Sunday:
            return "周日";
        case Weekday.Monday:
            return "周一";
        case Weekday.Tuesday:
            return "周二";
        case Weekday.Wednesday:
            return "周三";
        case Weekday.Thursday:
            return "周四";
        case Weekday.Friday:
            return "周五";
        case Weekday.Saturday:
            return "周六";
        default:
            return "";
    }
}

// 定义一个公共方法，用于获取传入日期是周几
export function test(date: Date): string {
    // 获取传入日期对应的周几（0 表示星期日）
    const weekday = date.getDay();

    // 根据周几返回相应字符串
    switch (weekday) {
        case Weekday.Sunday:
            return "周日";
        case Weekday.Monday:
            return "周一";
        case Weekday.Tuesday:
            return "周二";
        case Weekday.Wednesday:
            return "周三";
        case Weekday.Thursday:
            return "周四";
        case Weekday.Friday:
            return "周五";
        case Weekday.Saturday:
            return "周六";
        default:
            return "";
    }
}

