//表示テキストリスト
const txtlist = [
    "「ここにセリフが表示されます。」", 
    "「2ページ目です」", 
    "「3ページ目です」", 
    "「4ページ目です」", 
    "「5ページ目です」", 
    "「6ページ目です」"
];
//画像リスト
const imglist = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwQ0Rt_D5XNRWZ9ml1fe39qosoTwotUwGotjtghs17btdS-iHGkU_2-05n56v3XRZoNfQ-FO7zNUNRDxdTkFvJhqvhlHwoaUyjrCyzEiOFPJ568w3PFs31k_z89fQ0eNppyrb93-26KTf1/s400/otaku_girl_fashion.png", 
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrf9En3MJtd5ZzEa1Ky0jrp9rxFSTlwU30lzOToxwyVnSd7mprvlkTfhHuDDXFJfcAfF6o7oLbdQ_HL1OkA7n7M_rAVJTHOwg6pc-LO_QwoVEnqT1W3Lhk-KpbE62dvm_yvmu4qgDnass/s400/character_girl_normal.png", 
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKm1v1NZfQDYxjXhOJZxdGMzff1-pRVIojAUTzdapA4FySgjo0mcLaLhJ4fL1Q5BQmgp2_KDhbkx11TaNY3ijlMPkTbXnoWqfO6EzJzL6xnsuv8xYLXCe1NjUGccOIBO53FxX_HXXOkCM/s400/character_boy_normal.png", 
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicsNz4LlhjifPxVYeISh950p2y6_b1au73MPdpCyCq4GCNWl7br_fWbK1U1PlzkZDegkSwQjchr7lQ7Sj8MsGxlzG006V-3hF4p_yFvqWgeBWudWRT1b3okL7yFgksU-5OCSz5G40HmA1C/s400/book_yomu_mushimegane.png", 
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU91omJhkrJHCMw0SnS_1heTTQFDxcc1CjU9R5t9G2ikvHaNLO3UcH3BjarlsB2uQgFNwINxKKGuTDGoJvgmUEBD-qK5msqJFhYWKDSwM3HAadmE_KqtAxa58Mm73zQFqSbSqNa-j92ck/s400/shinpai_ojiisan.png", 
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiljmxhlIubmxVqsfpcm_vD70vLWHarnZuAeZ3J8znAcYAN6arMIMiUkpALqXoXM4nXEy1v1Ja7WF0PhYXB3SYUC69PXZW2ZbTQL8cqxleAZTHx4ExflWfhwRdl0tPwbHbtk2Ds68UjQCM/s400/hige_chobihige.png"
];

//初期値
let num = 0;

//class="text"を指定
const text = document.getElementsByClassName("text")[0];
//class="irasutoya-picture"を指定
const img = document.getElementsByClassName("irasutoya-picture")[0];

//初期画面設定
//urlパラメータの取得
let urlString = window.location.href;
let url = new URL(urlString);
let param = url.searchParams.get("id");
//パラメータのチェック
if(param === !null){
  console.log(1);
  getCookie();
};

//初期画面値設定
text.textContent = txtlist[num];
img.src = imglist[num];

//id="nextButton"を指定し、ボタン押下時にテキストと画像を変更
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click",() => {
  if(num < txtlist.length-1){
    ++num;
    text.textContent = txtlist[num];
    img.src = imglist[num];
  }
});

//id="backButton"を指定し、ボタン押下時にテキストと画像を変更
const backButton = document.getElementById("backButton");
backButton.addEventListener("click",() => {
  if(num > 0){
    --num;
    text.textContent = txtlist[num];
    img.src = imglist[num];
  }
});

//cookieを保存する
const setCookie = () => {
  document.cookie = "page=" + num;
};

//cookieを取得する
const getCookie = () => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === "page") {
      num = parseInt(value);
    }
  }
};

//id="saveButton"を指定し、表示画面をcookieに保存
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",() => {
  setCookie();
});