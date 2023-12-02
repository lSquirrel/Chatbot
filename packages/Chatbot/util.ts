import moment from 'moment';

// 进行时间转换，传入时间戳，返回类似聊天记录中的时间，刚刚，昨天。。。
//判断传入日期是否为昨天
function isYestday(timeValue: number) {
  const today = moment().startOf('day').valueOf(); //今天凌晨
  const yestday = new Date(today - 24 * 3600 * 1000).getTime(); // 昨天凌晨
  return timeValue < today && yestday <= timeValue;
};
//判断传入日期是否属于今年
function isYear(timeValue: number) {
  const takeNewYear = moment().year(); //当前时间的年份
  const takeTimeValue = moment(timeValue).year(); //传入时间的年份
  return takeTimeValue === takeNewYear;
}
//60000 1分钟
//3600000 1小时
//86400000 24小时
//对传入时间进行时间转换 
export const getChatTime = (timeValue: number) => {
  const timeNew = Date.now(); //当前时间
  const timeDiffer = timeNew - timeValue; //与当前时间误差
  let returnTime = '';
  if (timeDiffer <= 60000) { //一分钟内	
    returnTime = '刚刚';
  } else if (timeDiffer > 60000 && timeDiffer < 3600000) { //1小时内
    returnTime = Math.floor(timeDiffer / 60000) + '分钟前';
  } else if (timeDiffer >= 3600000 && timeDiffer < 86400000 && !isYestday(timeValue)) { //今日
    returnTime = moment(timeValue).format('HH:mm');
  } else if (timeDiffer > 3600000 && isYestday(timeValue)) { //昨天
    returnTime = '昨天 ' + moment(timeValue).format('HH:mm');
  } else if (timeDiffer > 86400000 && !isYestday(timeValue) && isYear(timeValue)) {	//今年
    returnTime = moment(timeValue).format('M月D日 HH:mm');
  } else if (timeDiffer > 86400000 && !isYestday(timeValue) && !isYear(timeValue)) { //不属于今年
    returnTime = moment(timeValue).format('YYYY年M月D日 HH:mm');
  }
  return returnTime;
}