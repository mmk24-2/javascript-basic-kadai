// 今日の日付を取得する
const today = new Date();

// 年月日を取得する
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// コンソールに出力する
console.log(`${year}年${month}月${day}日`);
