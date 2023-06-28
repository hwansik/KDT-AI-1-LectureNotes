<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!--
        | 는 메뉴별 구분을 위한 기호,  to는 URL 경로를 입력, 
        이 URL 설정을 위해서는 App.vue, router/index.js에
        등록이 필요하다고 보면 되는 것 같다.
        view 폴더는 어떻게 보이게 만들지 코딩을 통해 생성.
      -->
      <!--
        router-link 파트는 UI엔진인 Vue에서 경로를 지정하고
        부가적으로 to라는 파라메터는 실제 URL에 입력하는 경로가 된다.
        나타나는 형태는 text로 누르면 자동으로 URL을 입력한 결과를 보여준다.
        이 작업을 자동화하려면 반드시 router/index.js에
        /htmlTest를 누가 보여줄 것인지 컴포넌트 등록을 해줘야 합니다.
      -->
      <router-link to="/htmlTest">HtmlTest</router-link> |
      <router-link to="/cssTest">cssTest</router-link> |
      <router-link to="/vue-data-binding-page">VueDataBindingPage</router-link> |
      <router-link to="/vue-click-event-page">VueClickEventPage</router-link> |
      <router-link to="/vue-input-event-page">VueInputEventPage</router-link> |
      <router-link to="/duplex-model-test-page">v-model 테스트 페이지</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
