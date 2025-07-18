export function checkTourStatus(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now > end) {
    return {status:"به اتمام رسیده",style:"red"};
  } else if (now >= start && now <= end) {
    return {status:"در حال اجرا",style:"green"};
  } else {
    return {status:"شروع نشده",style:"blue"};
  }
}
