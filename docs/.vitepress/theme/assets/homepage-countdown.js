/**
 * 计算所有的倒计时
 */
export function calcAllCountdowns() {
    calcCwlCountdown();
    calcRaidWeekendCountdown();
    calcTraderCountDown();
    calcClanGamesCountDown();
    calcLeagueCountdown();
    calcGoldPassCountDown();
}

/**
 * 获取当前的 UTC 时间
 * @returns {number}
 */
function getCurrentUTCTime() {
    const d = new Date();
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth(); // 由于 js 的 “特性”，d.getMonth() 和 d.getUTCMonth() 的结果要比实际小 1
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    const minutes = d.getUTCMinutes();
    const seconds = d.getUTCSeconds();
    return Date.UTC(year, monthMinusOne, date, hours, minutes, seconds);
}

/**
 * 倒计时使用的时间转换函数
 * 当时间大于一小时的时候，该函数的返回值显示到分钟一级，如 ”1天6小时8分“；
 * 当时间小于一小时的时候，该函数的返回值显示到秒一级，如 ”36分18秒“。
 * @param sec 数字类型的秒
 * @returns {string|*}
 */
function isNumber(num) {
    return Number(num).toString() !== "NaN";
}

function timeExchangeCountdown(sec) {
    if (!isNumber(sec) || sec < 0) {
        return sec;
    }
    let timeUnits = ["天", "小时", "分", "秒"];
    const UNIT_D = timeUnits[0];
    const UNIT_H = timeUnits[1];
    const UNIT_M = timeUnits[2];
    const UNIT_S = timeUnits[3];
    let days = Math.floor(sec / 86400);
    let hours = Math.floor((sec % 86400) / 3600);
    let minutes = Math.floor(((sec % 86400) % 3600) / 60);
    let seconds = Math.floor(((sec % 86400) % 3600) % 60);

    let duration;
    if (days === 0) {
        // 小于1天
        if (hours === 0) {
            // 小于1小时
            if (minutes === 0) {
                // 小于1分钟
                duration = seconds + UNIT_S;
            } else {
                // 大于1分钟
                duration = minutes + UNIT_M + seconds + UNIT_S;
            }
        } else {
            // 大于1小时，只显示到分钟，不显示秒
            duration = hours + UNIT_H + minutes + UNIT_M;
        }
    } else {
        // 大于1天，只显示三级精度，不显示秒
        duration = days + UNIT_D + hours + UNIT_H + minutes + UNIT_M;
    }
    return duration;
}

/**
 * 计算联赛相关的倒计时
 * 联赛在每月一号下午四点开始报名，三号下午四点报名结束，十号下午四点所有部落打完（北京时间）
 */
function calcCwlCountdown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth(); // 由于 js 的“特性”，这里的月份要比实际小 1
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    let stage;
    let remainingTimeMs;

    if (date === 1) {
        if (hours < 8) {
            // 联赛报名未开始，计算距离报名开始的时间
            stage = 1;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 1, 8) - currentUTCTimeMs;
        } else {
            // 联赛报名中，计算距离报名结束的时间
            stage = 2;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 3, 8) - currentUTCTimeMs;
        }
    } else if (date === 2) {
        // 联赛报名中
        stage = 2;
        remainingTimeMs = Date.UTC(year, monthMinusOne, 3, 8) - currentUTCTimeMs;
    } else if (date === 3) {
        if (hours < 8) {
            // 联赛报名中
            stage = 2;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 3, 8) - currentUTCTimeMs;
        } else {
            stage = 3;
            // 联赛进行中，计算距离联赛结束的时间
            remainingTimeMs = Date.UTC(year, monthMinusOne, 11, 8) - currentUTCTimeMs;
        }
    } else if (date > 3 && date < 11) {
        // 联赛进行中
        stage = 3;
        remainingTimeMs = Date.UTC(year, monthMinusOne, 11, 8) - currentUTCTimeMs;
    } else if (date === 11) {
        if (hours < 8) {
            // 联赛进行中
            stage = 3;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 11, 8) - currentUTCTimeMs;
        } else {
            // 联赛已结束，也可以说是下个月的联赛报名未开始
            stage = 1;
            remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 1, 8) - currentUTCTimeMs;
        }
    } else {
        // 联赛已结束
        stage = 1;
        remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 1, 8) - currentUTCTimeMs;
    }

    const countdownCwlDom = document.getElementById("countdown-cwl");
    switch (stage) {
        case 1:
            countdownCwlDom.querySelector(".stage-1").style.display = "block";
            countdownCwlDom.querySelector(".stage-2").style.display = "none";
            countdownCwlDom.querySelector(".stage-3").style.display = "none";
            break;
        case 2:
            countdownCwlDom.querySelector(".stage-1").style.display = "none";
            countdownCwlDom.querySelector(".stage-2").style.display = "block";
            countdownCwlDom.querySelector(".stage-3").style.display = "none";
            break;
        case 3:
            countdownCwlDom.querySelector(".stage-1").style.display = "none";
            countdownCwlDom.querySelector(".stage-2").style.display = "none";
            countdownCwlDom.querySelector(".stage-3").style.display = "block";
            break;
        default:
        // 加载失败
    }
    const timeDom = countdownCwlDom.querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    // 数据无变化的时候才重新写入数据，避免频繁操作 DOM 造成性能损耗
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}

/**
 * 计算突袭周末相关的倒计时
 * 突袭周末在每周周五下午三点开始，周一下午三点结束（北京时间）
 */
function calcRaidWeekendCountdown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const dayOfTheWeek = d.getUTCDay();
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth();
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    let stage;
    let remainingTimeMs;

    if (dayOfTheWeek === 1) {
        if (hours < 7) {
            // 突袭周末尚未结束
            stage = 2;
            remainingTimeMs = Date.UTC(year, monthMinusOne, date, 7) - currentUTCTimeMs;
        } else {
            // 突袭周末已结束
            stage = 1;
            // 如果今天是周一，则再过 4 天就是周五，这里的 date + 4 会直接锁定到下次突袭的日期
            remainingTimeMs = Date.UTC(year, monthMinusOne, date + 4, 7) - currentUTCTimeMs;
        }
    } else if (dayOfTheWeek === 5) {
        if (hours < 7) {
            // 突袭周末尚未开始
            stage = 1;
            remainingTimeMs = Date.UTC(year, monthMinusOne, date, 7) - currentUTCTimeMs;
        } else {
            // 突袭周末已开始（尚未结束）
            stage = 2;
            // 如果今天是周五，则再过 3 天就是周一，这里的 date + 3 会直接锁定到突袭结束的日期
            remainingTimeMs = Date.UTC(year, monthMinusOne, date + 3, 7) - currentUTCTimeMs;
        }
    } else if (dayOfTheWeek === 6 || dayOfTheWeek === 0) {
        // 突袭正在进行中
        // 如果今天是周日，则 dayOfTheWeek === 0，而不是 7
        stage = 2;
        let dayCountToRaidEnd = dayOfTheWeek === 6 ? 2 : 1;
        remainingTimeMs = Date.UTC(year, monthMinusOne, date + dayCountToRaidEnd, 7) - currentUTCTimeMs;
    } else {
        // 突袭尚未开始或已结束
        stage = 1;
        let dayCountToRaidEnd = 5 - dayOfTheWeek;
        remainingTimeMs = Date.UTC(year, monthMinusOne, date + dayCountToRaidEnd, 7) - currentUTCTimeMs;
    }

    const countdownRaidDom = document.getElementById("countdown-raid-weekend");
    switch (stage) {
        case 1:
            countdownRaidDom.querySelector(".stage-1").style.display = "block";
            countdownRaidDom.querySelector(".stage-2").style.display = "none";
            break;
        case 2:
            countdownRaidDom.querySelector(".stage-1").style.display = "none";
            countdownRaidDom.querySelector(".stage-2").style.display = "block";
            break;
        default:
        // 加载失败
    }
    const timeDom = countdownRaidDom.querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}

/**
 * 计算商人刷新的倒计时
 * 商人的物品在每周二下午四点更新
 */
function calcTraderCountDown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const dayOfTheWeek = d.getUTCDay();
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth();
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    let remainingTimeMs;

    if (dayOfTheWeek === 1) {
        // 只有周一才能进入这个分支，直接用第二天的刷新时间减去现在的即可
        remainingTimeMs = Date.UTC(year, monthMinusOne, date + 1, 8) - currentUTCTimeMs;
    } else if (dayOfTheWeek === 2) {
        if (hours < 8) {
            // 如果今天是周二，且商人未刷新，则使用今天的刷新时间减去现在的刷新时间
            remainingTimeMs = Date.UTC(year, monthMinusOne, date, 8) - currentUTCTimeMs;
        } else {
            // 如果今天是周二，且商人已刷新，则使用下周二的刷新时间减去现在的刷新时间
            remainingTimeMs = Date.UTC(year, monthMinusOne, date + 7, 8) - currentUTCTimeMs;
        }
    } else {
        // 本周商人已刷新，使用下周的刷新时间
        // 如果现在是周日，则商人还剩两天刷新，dayCountToRaidEnd 为 2，否则 dayCountToRaidEnd 的值就是 9 减去 dayOfTheWeek
        let dayCountToRaidEnd = dayOfTheWeek === 0 ? 2 : 9 - dayOfTheWeek;
        remainingTimeMs = Date.UTC(year, monthMinusOne, date + dayCountToRaidEnd, 8) - currentUTCTimeMs;
    }

    const timeDom = document.getElementById("countdown-trader").querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}

/**
 * 计算部落竞赛的倒计时
 * 部落竞赛在每月 22 日下午四点开始，28 日下午四点结束（北京时间）
 */
function calcClanGamesCountDown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth();
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    let stage;
    let remainingTimeMs;

    if (date < 22) {
        // 本月竞赛未开始
        stage = 1;
        remainingTimeMs = Date.UTC(year, monthMinusOne, 22, 8) - currentUTCTimeMs;
    } else if (date === 22) {
        if (hours < 8) {
            // 本月竞赛未开始
            stage = 1;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 22, 8) - currentUTCTimeMs;
        } else {
            // 本月竞赛正在进行
            stage = 2;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 28, 8) - currentUTCTimeMs;
        }
    } else if (date > 22 && date < 28) {
        // 本月竞赛正在进行
        stage = 2;
        remainingTimeMs = Date.UTC(year, monthMinusOne, 28, 8) - currentUTCTimeMs;
    } else if (date === 28) {
        if (hours < 8) {
            // 本月竞赛正在进行
            stage = 2;
            remainingTimeMs = Date.UTC(year, monthMinusOne, 28, 8) - currentUTCTimeMs;
        } else {
            // 本月竞赛已结束
            stage = 1;
            remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 22, 8) - currentUTCTimeMs;
        }
    } else {
        // 本月竞赛已结束，或者说下个月的竞赛未开始
        stage = 1;
        remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 22, 8) - currentUTCTimeMs;
    }

    const countdownClanGamesDom = document.getElementById("countdown-clan-games");
    switch (stage) {
        case 1:
            countdownClanGamesDom.querySelector(".stage-1").style.display = "block";
            countdownClanGamesDom.querySelector(".stage-2").style.display = "none";
            break;
        case 2:
            countdownClanGamesDom.querySelector(".stage-1").style.display = "none";
            countdownClanGamesDom.querySelector(".stage-2").style.display = "block";
            break;
        default:
        // 加载失败
    }
    const timeDom = countdownClanGamesDom.querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}

/**
 * 获取下次赛季刷新时的日期
 */
function getLeagueResetTime(year, monthMinusOne, dayOfMonth, hours) {
    // 获取每月最后一周的周一，作为赛季刷新日
    // 将下个月 1 号减去一天，获得本月最后一天，参数 day 这里的 1 -1 就代表这个月 1 号再减一天
    let leagueResetDay = new Date(Date.UTC(year, monthMinusOne + 1, 1 - 1));
    // 每次减去一天，遇到周一时停止循环
    do {
        leagueResetDay.setUTCDate(leagueResetDay.getUTCDate() - 1);
    } while (leagueResetDay.getUTCDay() !== 1);

    // 获取刷新当天的日期（比如 1日、2日 等）
    let leagueResetDateOfMonth = leagueResetDay.getUTCDate();
    // 如果本月已经重置过赛季了，则获取下个月的赛季刷新日期
    // dayOfMonth === leagueResetDateOfMonth && hours >= 5 代表赛季重置当天的北京时间下午一点以后
    // dayOfMonth > leagueResetDateOfMonth 代表赛季重置过后但本月尚未结束的那几天
    if (dayOfMonth === leagueResetDateOfMonth && hours >= 5 || dayOfMonth > leagueResetDateOfMonth) {
        leagueResetDay = new Date(Date.UTC(year, monthMinusOne + 2, 1 - 1));
        do {
            leagueResetDay.setUTCDate(leagueResetDay.getUTCDate() - 1)
        } while (leagueResetDay.getUTCDay() !== 1);
    }

    // 由于赛季刷新时间是 UTC 时间的早上五点，所以这里需要 +5 小时
    leagueResetDay.setUTCHours(leagueResetDay.getUTCHours() + 5);
    return leagueResetDay;
}

/**
 * 计算赛季结算的倒计时
 * 赛季结算时间是每月最后一周周一的下午一点（北京时间）
 */
function calcLeagueCountdown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth();
    const dayOfMonth = d.getUTCDate();
    const hours = d.getUTCHours();
    let remainingTimeMs;

    const leagueResetTime = getLeagueResetTime(year, monthMinusOne, dayOfMonth, hours);
    remainingTimeMs = leagueResetTime - currentUTCTimeMs;

    const timeDom = document.getElementById("countdown-league-reset").querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}

/**
 * 计算月卡结算的倒计时
 */
function calcGoldPassCountDown() {
    const currentUTCTimeMs = getCurrentUTCTime();
    const d = new Date(currentUTCTimeMs);
    const year = d.getUTCFullYear();
    const monthMinusOne = d.getUTCMonth();
    const date = d.getUTCDate();
    const hours = d.getUTCHours();
    let remainingTimeMs;

    if (date === 1) {
        if (hours < 8) {
            // 本月月卡尚未结算
            remainingTimeMs = Date.UTC(year, monthMinusOne, 1, 8) - currentUTCTimeMs;
        } else {
            // 本月月卡已结算
            remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 1, 8) - currentUTCTimeMs;
        }
    } else {
        // 本月月卡已结算
        remainingTimeMs = Date.UTC(year, monthMinusOne + 1, 1, 8) - currentUTCTimeMs;
    }

    const timeDom = document.getElementById("countdown-gold-pass").querySelector(".homepage-countdown-time");
    const newTime = timeExchangeCountdown(remainingTimeMs / 1000);
    if (timeDom.innerHTML !== newTime.toString()) {
        timeDom.innerHTML = newTime;
    }
}