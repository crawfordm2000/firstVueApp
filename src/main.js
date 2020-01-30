// Webpack looks into node modules for the vue folder (vue js library) then imports it. 
import Vue from 'vue'; 
import App from './App'; // relative path required
require('dotenv').config();

new Vue({
    // el: '#app', same as .$mount('#app')
    // takes the App component and turns it into a vue instance which is then turned to html then rendered to the screen (DOM)
    render: h => h(App)
    
}).$mount('#app');