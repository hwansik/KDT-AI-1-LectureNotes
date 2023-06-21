<template lang="">
    <!-- vueinit 입력하면 자동 완성 포맷으로 만들어짐 -->
    <div>
        <!-- h 태그 1 ~ 6까지 존재함 -->
        <h3>실제 코드 형태로 입력해보기</h3>
        <h6>원래는 코드 형태 출력이 아닌 실제 코드가 동작해야 합니다.</h6>
        <h4>chatgpt 같은 것을 만든다면 필요할지도 모르겠네요.</h4>
        <!--
            강제 스타일 먹이기는 아래와 같이 style="css속성"
            여기서 css 속성은 text-align으로
            글자를 정렬할 때 사용하며 디폴트로 center 정렬이였으나
            아래 function saveLocal ... 에 대해서는 left 정렬을 적용하는 작업입니다.
        -->
        <pre style="text-align: left;">
            function saveLocalData () {
                let second = document.getElementById("second")
                let value = second.value
                localStorage.setItem(1, value)
                getLocalData()
            }
        </pre>
        <!-- strong은 강조표현, b도 강조표현으로 BOLD체에 해당함. -->
        <p><strong>TypeScript</strong>, <b>Javascript</b>, Python</p>
        <!-- em과 i는 모두 이탤릭체를 표현함 -->
        <P><em>Rust</em>, <i>C</i>, Verilog</P>
        <!-- mark로 형광팬 효과를 낼 수 있음 -->
        <h2>Python <mark>TensorFlow</mark></h2>
        <!-- span은 줄바꿈이 없습니다 - 특정 스타일을 적용할 때 많이 사용하는 편 -->
        <P>Deep Learning <span style="color: green;">Keras</span></p>
        <!--
            ul은 Unordered List의 약자로 순서가 필요하지 않은 경우 사용
            li는 느낌 그대로 list에 해당함
        -->
        <ul style="text-align: left;">
            <li>EDDI</li>
            <li>Electric Car</li>
            <li>MSA</li>
            <li>Deep Learning</li>
            <li>Distribution Server</li>
        </ul>

        <ul style="text-align: left;">
            <li>Vue
                <ol type="a" start="3">
                    <li>Vue Init</li>
                    <li>Vue Router</li>
                    <li>bue Template</li>
                    <li>Vue Script</li>
                    <li>Vue props</li>
                    <li>Vue v-model</li>
                    <li>Vue axios</li>
                    <li>Vue Local Component</li>
                    <li>Vue Global Component</li>
                    <li>Vuetify</li>
                    <li>Image Gallary</li>
                    <li>File Upload</li>
                    <li>Login/Logout</li>
                    <li>V-Dialog</li>
                    <li>Carousel</li>
                    <li>Card</li>
                    <li>Grid</li>
                </ol>
            </li>
            <li>DDD
                <ol type="a">
                    <li>Domain Driven Development</li>
                    <li>How to write Backlog</li>
                    <li>Behavioral Domain</li>
                    <li>Value Object</li>
                    <li>Domain Service</li>
                    <li>Repository</li>
                </ol>
            </li>
            <li>Hexagonal Architecture
                <ol>
                    <li>Hexagonal Architecture</li>
                    <li>Domain Hexagon</li>
                </ol>
            </li>
        </ul>
        <!--
            table은 표를 만들 때 사용
            가장 기본 패턴으로 table > tr(th도 포함?) > td 형식을 사용함
            tr은 table-row에 해당하며 td는 table-data로 cell혹은 column이라 봐도 무방
            th는 table-head로 제목이나 메인 정보 같은 것을 배치하는 편
        -->
        <table>
            <tr>
                <th>1 row 1 column</th>
                <th>1 row 2 column</th>
                <th>1 row 3 column</th>
            </tr>
            <tr>
                <th>내용이</th>
                <!-- 위 '내용이' 부분을 td에서 th로 변경해보면 글씨가 굵어진 효과가 나타남 -->
                <td>없어서</td>
                <td>안만들었니 ?</td>
            </tr>
        </table><br>
        <table style="width: 600px">
            <!-- 
                caption을 통해서 table(표)에 제목 비스무리한 느낌을 줄 수 있음 
                caption을 사용하면 표의 윗부분에 삽입한 텍스트 내용이 나타남
            -->
            <caption>
                <strong>Junior who pursue modern development with agile process</strong>
            </caption>
            <tr>
                <th>Name</th>
                <td>이름</td>
                <th>Contact</th>
                <td>010-1111-2222</td>
            </tr>
            <tr>
                <th>Address</th>
                <td colspan="3">주소</td>
                <!-- colspan을 통해 합칠 열의 개수를 지정할 수 있음 -->
            </tr>
        </table>
        <!--
            Image를 추가하고 싶을 때는 아래와 같이 이미지가 위치하는 경로를 지정해주면 됩니다.
            부가적으로 download로 확보했는지 아니면 
            실질적으로 서비스 차원에서 사용자가 등록한 이미지인지 같은 것을 디렉토리 이름으로 구별하면 좋습니다.
        -->
        <h2>Image</h2>
        <img src="@/assets/downloadImg/mario_run.png">
        <!--
            figure로 image를 감싸고 figcaption을 달면 
            image에 대한 설명을 붙일 수 있습니다. 
            사진의 아랫부분에 설명이 나타난다.
        -->
        <figure>
            <img src="@/assets/downloadImg/mario_run.png">
            <figcaption style="font-size: 32px;">마리오가 달린다!</figcaption>
        </figure>
        <h1>Text Link 생성</h1>
        <!-- 
            <a>태그의 href 속성은 링크된 페이지의 URL을 명시한다.
            <a href=“URL”>의 형식을 사용한다.
            <a> 태그 사이에는 링크된 페이지명이나 설명 등에 대해 쓰면되며,
            누르면 href로 명시된 링크로 이동한다.
        -->
        <a href="https://golang.org">Golang Homepage</a>
        <h1>이미지 링크 생성</h1>
        <a href="https://mario.nintendo.com/">
            <img src="@/assets/downloadImg/mario_run.png">
        </a>
        <!--
            form 태그는 말 그대로 format(양식)을 지정해서 데이터를 전송합니다.
            method에 post를 지정할 수 있고 default 값은 get입니다.
            input type에는 text, number, submit 등등이 올 수 있습니다.
            text는 말 그대로 문자열, number는 숫자, submit은 등록개념이라 보면 됩니다.
            속성값 value를 통해 표기되는 형태를 지정할 수 있습니다.
            추후 이 부분의 submit을 prevent 하여 vue가 axios 하도록 구성하게 됩니다.
        -->
        <form action="/">
            <input type="text" value="찾을 값">
            <input type="submit" value="찾기">
        </form>
        <!--
            다중 선택 (checkbox)
            input type으로 checkbox를 사용하여 value 값에 선택한 값을 볼 수 있습니다.
            javascript에서 어떤 값을 선택했는지 처리할 수 있고
            이를 토대로 vue 쪽에 axios 하는 데이터를 처리할 수 있습니다.
        -->
        <h3>다중 선택</h3>
        <form action="/" style="text-align: left;">
            <li><input type="checkbox" value="grammar">grammar</li>
            <li><input type="checkbox" value="writing">Writing</li>
            <li><input type="checkbox" value="reading">Reading</li>
        </form>
        <!--
            단일 선택(radio)
            input type으로 radio를 사용하며 value 값에 선택한 값을 볼 수 있습니다.
            단일 선택이 되도록 명확하게 지정하려면
            name값을 모두 같은 것으로 지정하여 중복 선택이 불가하게 만듭니다.
            마찬가지로 javascript에서 어떤 값을 선택했는지 처리할 수 있고
            이를 토대로 vue쪽에 axios 하는 데이터를 처리할 수 있습니다.
        -->
        <h4>단일 선택</h4>
        <form action="/" style="text-align: left;">
            <li>
                <label><input type="radio" name="subject" value="rust">Rust</label>
            </li>
            <li>
                <label><input type="radio" name="subject" value="typescript">TypeScript</label>
            </li>
            <li>
                <label><input type="radio" name="subject" value="Kotlin">Kotlin</label>
            </li>
        </form>
        <!-- 
            그렇다면 name로 카테고리를 나눠서(3/4) 부분별로 단일 선택이 되는지 해봤다.
            vaule에 넣은 값과 label 태그 사이의 값이 동일해야하는걸까?
            그 두개의 값이 동일해야하는 이유가 있는지와 어떠한 차이점이 있는지 모르겠다. 
            인터넷 창의 F12에서 sources-page에서 htmltest.vue 파일을 변경해보면 
            실시간 랜더링으로 반영이 안되는데,
            여기서 변경해서 사용하는 방법은 있던거 같은데 무엇일까? 
            그리고 F12에서 sources뿐 아니라 console는 뭘 설명하고 이용하는 창인지 모르겠다.
        -->
        <h5>카테고리별 단일 선택</h5>
        <form action="/" style="text-align: left;">
            <li>
                <label><input type="radio" name="subject" value="rust">Rust</label>
            </li>
            <li>
                <label><input type="radio" name="subject" value="typescript">TypeScript</label>
            </li>
            <li>
                <label><input type="radio" name="subject" value="Kotlin">Kotlin</label>
            </li>
            <li>
                <label><input type="radio" name="subject2" value="Java">Java</label>
            </li>
            <li>
                <label><input type="radio" name="subject2" value="Python">Python</label>
            </li>
            <li>
                <label><input type="radio" name="subject2" value="vue">vue</label>
            </li>
            <li>
                <label><input type="radio" name="subject2" value="Spring">Spring</label>
            </li>
        </form>
        <!-- email 및 password(비밀번호) 입력이 필요한 상황 -->
        <form style="text-align: left;">
            <fieldset>
                <legend>로그인</legend>
                <ul>
                    <li>
                        <label for="email">이메일: </label>
                        <input type="text" id="email">
                    </li>
                    <li>
                        <label for="pwd">비밀번호: </label>
                        <input type="password" id="pwd">
                    </li>
                </ul>
            </fieldset>
        </form>
        <!-- 범주 테스트 -->
        <form style="text-align: left;">
            <fieldset>
                <legend>범주 테스트</legend>
                <ul>
                    <li>
                        <label for="member"></label>
                        <!--
                            input type="number"를 통해 숫자를 인식
                            value에 초기값, min은 최소값, max는 최대값,
                            화살표 UI가 제공되는데 누를 때마다 이동하는 숫자의 크기는 step
                        -->
                        <input type="number" id="member" value="1" min="1" max="10" step="1">
                    </li>
                    <li>
                        <label for="satisfy"></label>
                        <!--
                            range를 사용하면 막대 바가 생성됨
                            최소값, 최대값, 초기값, step 설정은 위의 number와 완벽하게 동일함
                        -->
                        <input type="range" id="satisfy" value="1" min="1" max="5" step="1">
                    </li>
                </ul>
            </fieldset>
        </form>
        <!-- email 및 password(비밀번호) 기반 회원 가입 -->
        <form style="text-align: left;">
            <fieldset>
                <legend>회원 가입</legend>
                <ul>
                    <li>
                        <label for="email">이메일: </label>
                        <input type="text" id="email">
                    </li>
                    <li>
                        <label for="pwd">비밀번호: </label>
                        <input type="password" id="pwd">
                    </li>
                </ul>
            </fieldset>

            <input type="submit" value="회원 가입">
            <!-- 입력을 잘못 했을 경우 정보를 초기화합니다 -->
            <input type="reset" value="초기화">
        </form>
        <!-- checkbox, radio로 표현하기에 너무 많은 경우 -->
        <form style="text-align: left;">
            <fieldset>
                <legend>과목 선택</legend>
                <ul>
                    <li>
                        <label for="subject">과목: </label>
                        <!--
                            select의 경우엔 드롭 다운 형태의 목록을 만들 수 있습니다.
                            multiple을 선택하여 여러 옵션들을 복수 선택 할 수 있습니다.
                            size는 눈에 보이는 리스트의 개수입니다.
                        -->
                        <select size="5" id="subject" multiple>
                            <!-- option에는 실제 배치하고 싶은 옵션 리스트를 작성합니다. -->
                            <option value="architecture">소프트웨어 아키텍처</option>
                            <option value="ddd">DDD 설계</option>
                            <option value="hexagonal">Hexagonal 아키텍쳐</option>
                            <option value="msa">MSA 설계</option>
                            <option value="rxjava">Reactive Java Programming</option>
                            <option value="r2dbc">R2DBC Reactive DB System</option>
                            <option value="jpa">Reactive에서는 사용할 수 없는 JPA</option>
                            <option value="mfe">Micro Frontend Service</option>
                            <option value="edm">Event Driven MSA</option>
                            <option value="kafka">Kafka 기반 메시지 브로커 시스템</option>
                        </select>
                    </li>
                </ul>
            </fieldset>
        </form>
        <!-- progress bar 만들기 -->
        <ul>
            <li>
                <label>10초 남았음</label>
                <progress value="50" max="60"></progress>
            </li>
            <li>
                <label>30% 채웠음</label>
                <progress value="30" max="100"></progress>
            </li>
        </ul>
        <!-- meter 만들기: 값의 크기를 표시 -->
        <ul>
            <li>
                <label>투명도 0.8</label>
                <meter value="0.8"></meter>
            </li>
            <li>
                <label>사용률 64%</label>
                <meter min="0" max="100" value="64"></meter>
            </li>
            <li>
                <label>트래픽 초과까지</label>
                <meter min="1024" max="16384" vaule="9277"></meter>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    
}

</script>

<style scoped>
    table, th, td {
        border: 1px solid #ccc;
    }
    th {
        padding: 15px; /* 셀 테두리와 내용 사이의 간격 (패딩) */
    } 
    td {
        padding: 7px
    }
    ul li {
        list-style: none;
        margin: 15px 0;
        font-size: 16px;
    }
</style>