import { createApp } from 'vue'
import App from './App.vue';
import TestComponent from './components/TestComponent.vue'
import CheckVue from './components/CheckVue.vue'

const app = createApp(App)

app.component('test-component', TestComponent);
app.component('check-vue', CheckVue)

app.mount('#app')
