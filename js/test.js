//-----やりたいこと-----//
  //firebaseの認証機能実装 
  //画像保存ならstore使うのがいい
  //地域ごとに好きな店を選ぶ(日本国内)
  //選択したらコレクションとしてデータベースに溜まる
  //評価の高い順にお店を並べる？（評価まで見れるかな？）
  //上をするのに適したAPIを使う
  //特定の項目を順番に非活性にしていく
  //その地域のニュース・天気情報を取得
  //ピンで止めた場書を順番にまわる（地図上で）
  //ピンで写真を入れる
  //行き方を表示 車か歩きか
  //自分のいる場所から何km以内で探すを出来るようにする
  //総武線沿い
  //進捗何パーセントか示す
  //選んだリストお店をクリックすると地図上に反映される

function buttonClick(){
  alert('おされました！');
}


// document.getElementById('exec').addEventListener('click', () => {
//   if (document.getElementById('address').value) {
//   getLatLng(document.getElementById('address').value, (latlng) => {
//   // map.setCenter(latlng)
//   console.log(latlng.lat, latlng.lng);
//   document.getElementById('lat').value = latlng.lat;
//   document.getElementById('lng').value = latlng.lng;
//   })
//   }
  // })



    //画像入れる

    function GetMap() {
      //------------------------------------------------------------------------
      //1. Instance
      //------------------------------------------------------------------------
      const map = new Bmap("#myMap");
      //------------------------------------------------------------------------
      //2. Display Map
      //------------------------------------------------------------------------
      map.startMap(35.66947987482731, 139.70296469890292, "load", 12);

      //----------------------------------------------------
      //3. Infobox
      //   options = new Array();
      //   options[index] = { lat, lon, width, height, title, pinColor, description, show };
      //----------------------------------------------------
      const options = [];
      options[0]={
          "lat":35.66130953780814,
          "lon": 139.74309446998464,
          "title":"FlowerShop",
          "pinColor":"#ff0000",
          "height":300,
          "width":320,
          "description": '東京ガーデン<input type="button" value="button" id="btn"><br><img src="../img/flower.jpg" width="300">',
          "show":false,
      };
      options[1]={
          "lat":35.64802382112685, 
          "lon":139.71768858873585,
          "title":"FlowerShop",
          "pinColor":"#ff0000",
          "height":300,
          "width":320,
          "description": '恵比寿の花屋<input type="button" value="button" id="btn"><br><img src="../img/ebisu.jpg" width="300">',
          "show":false
      };
      options[2]={
          "lat":35.68346505234354, 
          "lon":139.6863400140517,
          "title":"FlowerShop",
          "pinColor":"#ff0000",
          "height":300,
          "width":320,
          "description": 'クラウディア東京オペラシティ店<input type="button" value="button" id="btn"><br><img src="../img/operacity.jpg" width="300">',
          "show":false
      };

      //----------------------------------------------------
      //4. Switch infoboxs
      //   infoboxLayers(options, true); //true=one, false=Multiple
      //----------------------------------------------------
      map.infoboxLayers(options,true);

      $("#decide").on("click",function(){
        alert("OK");
      })

      $("#koko").on("click",function(){  
        getLatLng(["東京都千代田区霞が関1-3-1"], (result) => {
          console.log("緯度: ", result.lat);
          console.log("経度: ", result.lng);
        });
      
      })

      // let button = document.getElementById('btn');

      // button.addEventListener('click', function(){
      // console.log('Click');
      // });

  }




    // //****************************************
    // //成功関数
    // //****************************************
    // let map;

    // function mapsInit(position) {
    //   console.log(position,"data取得");
    //   //lat=緯度、lon=経度 を取得
    //   const lat = position.coords.latitude;
    //   const lon = position.coords.longitude;

    //   //Map表示
    //   map = new Bmap("#myMap");
    //   map.startMap(lat, lon, "load", 20); //The place is Bellevue.
    //   //Pinを追加
    //   let pin = map.pin(lat, lon, "#ff0000"); // ピンの色を変えられる
    //   //Infoboxを追加
    //   // map.infobox(lat, lon, "タイトル", "詳細情報を記載");
    //   map.infobox(lat, lon, "おすすめの場所", "料理！");
    // };

    // //****************************************
    // //失敗関数
    // //****************************************
    // function mapsError(error) {
    //   let e = "";
    //   if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
    //     e = "位置情報が許可されてません";
    //   }
    //   if (error.code == 2) { //2＝現在地を特定できない
    //     e = "現在位置を特定できません";
    //   }
    //   if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
    //     e = "位置情報を取得する前にタイムアウトになりました";
    //   }
    //   alert("エラー：" + e);
    // };

    // //****************************************
    // //オプション設定
    // //****************************************
    // const set = {
    //   enableHighAccuracy: true, //より高精度な位置を求める
    //   maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
    //   timeout: 10000 //10秒以内に現在地情報を取得できなければ、処理を終了
    // };


    // //最初に実行する関数
    // function GetMap() {
    //   navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
    // }
  