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


//-----山崎先生の参考資料----//
let infoboxs  = []; //Put infobox in an array
let locations = []; //Put location in an array
let map;
    //Maps Init
    function GetMap() {
        map = new Microsoft.Maps.Map('#myMap', {
            center: new Microsoft.Maps.Location(35.66953224173969, 139.7029968976961),
            zoom: 20
        });

        //Set:Infobox
        locations[0] = map.getCenter();
        const infobox0 = new Microsoft.Maps.Infobox(locations[0], {
            title: 'ジーズアカデミー',
            description: 'description'
        });
        infoboxs.push(infobox0);
                
        //フラワーケント
        //Set:Infobox
        locations[1] = new Microsoft.Maps.Location(35.697465537491446, 139.79998054297448);
        const infobox1 = new Microsoft.Maps.Infobox(locations[1], {
            title: 'フラワーケント',            
            hight:'300',
            with:'320',
            description: '現在地<br><img src="../img/flower/jpg" width="300">',
            show:false
        });
        infoboxs.push(infobox1);


        //プラスフラワー
        //Set:Infobox
        locations[2] = new Microsoft.Maps.Location(35.70166778080805, 139.80379990266715);
        const infobox2 = new Microsoft.Maps.Infobox(locations[2], {
            title: 'プラスフラワー',
            description: 'decription'
        });
        infoboxs.push(infobox2);
        
        //マーガレットハウス
        //Set:Infobox
        locations[3] = new Microsoft.Maps.Location(35.69054430169188, 139.78630662326452);
        const infobox3 = new Microsoft.Maps.Infobox(locations[3], {
            title: 'マーガレットハウス',
            description: 'decription'
        });
        infoboxs.push(infobox3);
        
        
        //Add:Place an infobox on the map.
        for(var i=0;i<infoboxs.length;i++){
            infoboxs[i].setMap(map); //Add infobox to Map
        }

        //Change the display of the map.
        map.setView({
            bounds: Microsoft.Maps.LocationRect.fromLocations(locations), //fromLocations or fromShapes
            padding: 100
        });



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
  