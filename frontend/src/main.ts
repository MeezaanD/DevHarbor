import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import { ElTimeline, ElTimelineItem, ElCard, ElIcon } from 'element-plus';
import 'element-plus/dist/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

// Use Element Plus globally
app.use(ElementPlus);

// Use Element Plus components
app.component('ElTimeline', ElTimeline);
app.component('ElTimelineItem', ElTimelineItem);
app.component('ElCard', ElCard);
app.component('ElIcon', ElIcon);

app.use(store).use(router).mount('#app');
