/**
 * const,let変数宣言
 */
// var val1 = "変数";
// console.log(val1);

// var val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは変数の再宣言不可
// val2 = "上書き";
// console.log(val2);

// //const定数上書き不可
// const val3 = "定数";
// console.log(val3);

// //再宣言・上書き不可
// const val3 = "上書き";
// console.log(val3);

// val3 = "変更";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: "名前",
//   age: 28
// };

// val4.name = "お名前";
// console.log(val4);

// val4.add = "東京";

//constで定義した配列はプロパティの変更可能
// const val5 = ["hairetsu1", "hairetsu2"];
// val5[0] = "hairetsu0";
// val5.push("hairetsu3");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "太郎";
// const age = 32;

//従来(結合のたびに+を書く)
// const message = "私は" + name + "です。年齢は" + age + "です。";
// console.log(message);

//テンプレート文字列の使用
// const message2 = `私は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const profile = {
//   name: "太郎",
//   age: 32
// };
// const message1 = `私は${profile.name}です。年齢は${profile.age}です。`;
// console.log(message1);

// const { name, age } = profile;
// const message2 = `私は${name}です。年齢は${age}です。`;
// console.log(message2);

// const profile = ["太郎", 32];
// const message3 = `私は${profile[0]}です。年齢は${profile[1]}です。`;
// console.log(message3);

/**
 * デフォルト値、引数
 */
// const say = (name = "ゲスト") => {
//   console.log(`こんにちは${name}さん！`);
// };
// say("多呂");

/**
 * スプレッド構文 ...
 */
//配列展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
