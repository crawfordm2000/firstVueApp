<template>
    <ul class="list-group">
      <VideoListItem 
        v-for="video in videos"
        :video="video"
        :key="video.etag"
        >
      </VideoListItem>
      
    </ul>  
</template>



<script>
import VideoListItem from './VideoListItem';

export default {
   name: 'VideoList',
   components: {
       VideoListItem
   },
   props: { // or ['videos'] = without validation
       videos: Array
   },
   
};
</script>




<style scoped>
   
</style>