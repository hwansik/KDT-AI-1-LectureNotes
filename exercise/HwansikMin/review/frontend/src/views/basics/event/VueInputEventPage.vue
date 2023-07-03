<template>
    <div>
        <p>입력:
            <!--
                <p>태그는 HTML에서 단락을 나타낸다. 
                여기서는 '입력:' 이라는 텍스트를 포함한 단락을 생성한다.
                <p>를 쓰면 새로운 줄에서 시작하고 위아래에 자동으로 간격이 생성된다.
                일반적으로 문단의 시작과 끝을 명시한다.
            -->
            <!--
                :value은 v-bind:value와 동의어입니다.
                번거롭게 전체를 적을 필요가 없으므로 생략하였습니다.
                v-bind는 우측값을 좌측에 맵핑합니다.
                그러므로 script에 있는 message 값을 input(입력창)의 값으로 맵핑합니다. 
            -->
            <input :value="message" @change="handleInput"/>
        </p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            message: '입력하세요'
        }
    },
    methods: {
        handleInput (event) {
            console.log('event: ' + event)
            this.message = event.target.value
            console.log('event.target.value: ' + event.target.value)
        }
    }
}

</script>

<style>
    
</style>