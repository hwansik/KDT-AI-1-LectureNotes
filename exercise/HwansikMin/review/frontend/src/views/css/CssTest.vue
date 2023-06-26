<template>
    <div>
        <h1>Css Test</h1>
        <h2>Web Doc</h2>
        <p>Content: HTML, Design: CSS, Data Handle: JavaScript(TypeScript)</p>
        <section>
            <h2>Who am I ?</h2>
            <p>Interest at MSA</p>
        </section>
        <div id="container">
            <h1>Test id</h1>
            <h2 class="accent">Accent Test</h2>
            <p>안녕! <span class="browntext">밤색이닷!</span></p>
            <p class="ns-font">한글 폰트 테스트 - 밤색이닷!</p>
        </div>
        <p><a href="http://threejs.org/"><b>Three.js</b></a></p>
        <h1 class="shadow-option1">Micro-Frontend</h1>
        <h1 class="shadow-option2">Micro-Frontend</h1>
        <h1 class="shadow-option3">Micro-Frontend</h1>
        <h1 class="shadow-option4">Micro-Frontend</h1>
        <p class="align-right">오른쪽 정렬</p>
        <p class="align-left">왼쪽 정렬</p>
        <p class="align-center">가운데 정렬:가나다라마바사아자차카타파하아야어여오요우유으이ABCDEFGHIJKLMNOPQRSTUVWXYZ으오요우유우요오으으오요우유우요오으으오요우유우요오으</p>
        <p class="align-justify">양쪽 정렬:가나다라마바사아자차카타파하아야어여오요우유으이ABCDEFGHIJKLMNOPQRSTUVWXYZ으오요우유우요오으으오요우유우요오으으오요우유우요오으</p>    
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3">box-sizing = "content-box"</div>
        <div class="box4">box-sizing = "border-box"</div>
        <div class="box5"></div>
        <div class="box6"></div>
        <div class="box7"></div>
        <div class="box8"></div>
        <section id="container">
            <p>How much is it ?</p>
            <ul>
                <li>Card</li>
                <li>Money</li>
                <li>Bank</li>
            </ul>
        </section>
        <section id="container2">
            <ul>
                <li>A
                    <ul>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </li>
                <li>E
                    <ul>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

export default {
    
}

</script>

<style scoped>
    h2 {
        font-size: 20px;
        color: orange;
    }
    p {
        color: blue;
    }
    section {
        width: 96%;
        padding: 15px;
        border: 5px solid gray;
    }
    /* section의 border에서 solid를 뻬버리면 테두리가 안나옴
    solid 와 동일한 분류에 속하는 기능을 하는 단어가 있는건가? */
    /* id 설정의 경우 */
    #container {
        width: 600px;
        padding: 15px;
        border: 1px dotted gray;
    }
    /* class의 경우엔 아래와 같이 */
    h2.accent {
        background-color: aquamarine;
        color: black;
        padding: 5px;
    }
    .browntext {
        color: brown;
    }
    /* 폰트 적용_CSS 폰트 적용하기 [CSS-FONT] #483
        https://fonts.google.com/noto/specimen/Noto+Sans+KR
        아래와 같이 @import url('(font URL주소)')의 형식으로 쓰는데,
        url ('(font URL 주소)')와 같이 띄어쓰기를 하면 Module Warning 오류가 난다. */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap');
    p.ns-font {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 30px;
    }
    a {
        text-decoration: none;
    }
    .shadow-option1{
        color: orange;
        text-shadow: 1px 1px;
        /* text-shadow: 가로간격px 세로간격px 번짐정도px*/
    }
    .shadow-option2{
        text-shadow: 5px 5px 3px #050;
    }
    .shadow-option3{
        color: blue;
        text-shadow: 7px -7px 5px #000
    }
    .shadow-option4{
        background-color: #000;
        color: #000;
        text-shadow: 0 0 4px #ccc,
            0 -5px 4px #ff3,
            2px -10px 6px #fd3,
            -2px -15px 11px #f800,
            2px -19px 18px #f20;
    }
    .align-left {
        text-align: left;
    }
    .align-right {
        text-align: right;
    }
    .align-center {
        text-align: center;
    }
    .align-justify {
        text-align: justify;
    }
    /* shadow-option4에서 text-shadow는 간격과 번짐을 조정하면서
    그라데이션처럼 그림자 효과를 내는 것. */
    .box1 {
        width: 400px;
        height: 100px;
        background-color: aqua;
    }
    .box2 {
        width: 500px;
        height: 100px;
        background-color: royalblue;
    }
    div {
        margin: 10px;
        /* 테두리 여백 간격 */
    }
    .box3 {
        box-sizing: content-box;
        width: 300px;
        height: 150px;
        margin: 10px;
        padding: 30px;
        border: 2px solid red;
    }
    .box4 {
        box-sizing: border-box;
        width: 300px;
        height: 150px;
        margin: 10px;
        padding: 30px;
        border: 2px solid red;
    }
    /* box-sizing에서 content-box와 border-box의 크기가 다르다.
    width height의 크기를 동일하게 해도 분류에 따라 크기가 다른것. */
    .box5 {
        margin-right: 10px;
        padding: 20px;
        background: #0094ff;
        float: left;
    }
    .box6 {
        margin-right: 10px;
        padding: 20px;
        background: cadetblue;
        float:left;
    }
    .box7 {
        margin-right: 10px;
        padding: 20px;
        background: darkorchid;
        float: left;
    }
    .box8 {
        padding: 20px;
        background: green;
        float: right;
        border: 1px solid black;
    }
    /* float로 left나 right로 정렬하면 기존 한줄을 다 채우던 박스가
    왼쪽이나 오른쪽으로 치우쳐지면서 줄어든다. float를 쓰지않으면 
    쓰지 않으면 한줄로 길게 표기되는 박스가 left나 right와 겹치게 보인다.
    float를 쓴 경우와 아닌 경우대로 구분이 되는것 같다. */
    /* container 내의 모든 ul */
    #container ul {
        border: 1px dotted blue;
    }
    /* container 바로 하위의 ul만 적용 */
    #container > ul {
        border: 1px dotted darkcyan;
    }
</style>
