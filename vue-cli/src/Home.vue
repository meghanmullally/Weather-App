<template>
<div id="home">
  <h1>home</h1>

  <pre>{{forecast}}</pre>
  
   </div>
</template>

<script>
import API from './API';

export default {
  name: 'home',
  data(){
return{
 forecast: {}
};
  },
  mounted(){
    API.getForecast().then(result =>{
      console.log(result);
      this.forecast = result;
    });
  },
}
</script>