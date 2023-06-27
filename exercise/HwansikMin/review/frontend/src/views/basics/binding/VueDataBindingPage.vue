<template>
    <div>
        <!-- 중괄호 {{  }} 안에 있는 표현식은 Vue의 데이터 바인딩을 나타낸다. -->
        <p>Hello {{ message }}</p>
        <p>길이: {{ message.length }}</p>
        <p>list[2]: {{ list[2] }}</p> <!-- 배열의 인덱스는 0, 1, 2... 순서 -->
        <p>list[{{ number }}]: {{ list[number] }}</p>
    </div>
</template>

<script>
/* return {}내에서 쉼표(,)로 message, list 등 항목별 분리를 안했더니 연결이 안됐었음. */
export default {
    data () {
        return {
            message: 'Vue 프로그래밍',
            list: ['apple', 'grape', 'watermelon'],
            show: true, // 보여줄지 숨길지 제어하는 boolean 변수
            number: 1 // 데이터 속성으로 1의 값을 가지고, 배열 list에서 접근할 인덱스.
        }
    }
}

</script>

<style>
    
</style>