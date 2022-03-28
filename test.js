// let : 変数を宣言するもの。　後ろの言葉を変数にする
// 変数の例 : let ○○○ = "○○○"; 
let Sio = "Hello world!!";


// クイズ
const question = '正しいのは次のうちどれ？';
const answers = [
  'const',
  'ret',
  'vel',
  'kol'
];

const correct = 'const';

// 定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

// HTMLのオブジェクトを撮ってくる場合は $ を入れる。
// 沢山変数が増えると混乱してくる為、＄をつけてHTMLのオブジェクトが入っている事が理解しやすい！！
const $button = document.getElementsByTagName('button');

// 何度も使うものは変数・定数にして纏める。以下例。
// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];

// 更にリファクタリングをして纏める。以下例
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// while文を使って繰り返し処理をさけた。
const setupQuiz = () => {
  let buttonIndex = 0;
  let buttonLength = $button.length
  while(buttonIndex < buttonLength){
    // ここに命令　　[0] から [buttonIndex] に変更することで0から始まり、下記で1づつ足して処理される。
    $button[buttonIndex].textContent = answers[buttonIndex];
    // ++で1づつ足して処理
    buttonIndex++;
  }
}
setupQuiz();





// 更にリファクタリングとして e target を使用。

const clickHandler = (e) => {
  if(correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};

// ボタンを押したら正誤判定（クリックしたら）
$button[0].addEventListener('click', (e) => {
  clickHandler();
});

$button[1].addEventListener('click', (e) => {
  clickHandler();
});

$button[2].addEventListener('click', (e) => {
  clickHandler();
});

$button[3].addEventListener('click', (e) => {
  clickHandler();
});


// $button[0].addEventListener('click', (e) => {
//   if(correct === e.target.textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// });

// $button[1].addEventListener('click', (e) => {
//   if(correct === e.target.textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// });

// $button[2].addEventListener('click', (e) => {
//   if(correct === e.target.textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// });

// $button[3].addEventListener('click', (e) => {
//   if(correct === e.target.textContent) {
//     window.alert('正解！');
//   } else {
//     window.alert('不正解！');
//   }
// });