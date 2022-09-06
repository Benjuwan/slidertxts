document.addEventListener("DOMContentLoaded",()=>{
    // 処理の親元となる要素を定数に
    const infiniteTxtWrapper = document.querySelector('.infoTxtSlider');

    // テキスト要素の設置先を生成
    const infiniteUl = infiniteTxtWrapper.querySelector('ul');
    infiniteUl.insertAdjacentHTML('beforeend', `<li class="infiniteTxt"></li>`)

    // ループの基準元となる要素群
    const listsBoxesChildren = infiniteTxtWrapper.querySelectorAll('.listBoxes p');

    // メインの処理（テキストループ）を行う関数の定義
    let counter = 0; // カウンター
    function roopTxt(){
        if(counter < listsBoxesChildren.length){ // カウンターが基準元要素群の配列数（格納数）に達するまでの処理

            // 初めにカウントに準拠した結果の<<中身（文字列）>>（{listsBoxesChildren[counter]<<.textContent>>）を取得して、設置元要素に中身を代入・格納（.textContent）
            document.querySelector('.infiniteTxt').innerHTML = `${listsBoxesChildren[counter].innerHTML}`;

            // 次にカウントアップし、
            counter++;

            // 最後にカウントアップさせてcounterを更新した後に、再度上記の処理を行う（＝指定要素の上限値（listsBoxesChildren.length）まで）
            roopMethod();

        } else { // counterが上限値に達せば、0カウントに戻して上記の処理を再度行う（永遠にループさせる）
            counter = 0;
            roopTxt();
        }
    }

    // 時限式関数には、CSSの@keyframesで指定したアニメーション時間と「同じ数値」をセットする
    function roopMethod(){
        setTimeout(()=>{
            roopTxt();
        },10000);
    }

    roopTxt(); // メインの処理（テキストループ）を行う関数の定義
    
});