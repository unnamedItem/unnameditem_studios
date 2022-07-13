<template>
  <div class="home container">
    <b-row>
      <b-col cols="12" xl="8">
        <b-card class="text-center">
          <div class="d-flex justify-content-center">
            <h2 class="my-auto">{{$t('title')}}</h2>
          </div>
        </b-card>
        <b-card>
          {{$t('welcome-msg')}} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, aliquam perspiciatis natus itaque aut fuga vel officia at dignissimos amet assumenda alias, sint autem ratione magni suscipit, harum neque accusamus?
        </b-card>
        <b-card>
          <h4>{{$t('main-links')}}</h4>
          <hr>
          <li>
            <router-link to="projects">Vue Projects</router-link>
          </li>
          <li>
            <router-link to="projects">Pygame Projects</router-link>
          </li>
          <li>
            <router-link to="projects">Pixel Art</router-link>
          </li>
          <li>
            <router-link to="projects">Others</router-link>
          </li>
          <hr>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eum id consequuntur! Nam exercitationem saepe qui temporibus facere id dolor vel impedit error ipsa, dolorum perspiciatis asperiores, quibusdam modi eveniet.
          </p>
        </b-card>
      </b-col>
      <b-col cols="12" xl="4" class="overflow-auto" :style="'max-heigth: 90% !important'">
        <b-card class="text-center p-0">
          <div class="d-flex justify-content-center">
            <h4 class="my-auto">{{$t('last-posts')}}</h4>
          </div>
        </b-card>

        <BaseMedia :media="media1"></BaseMedia>
        <BaseMedia :media="media2"></BaseMedia>
      </b-col>
    </b-row>      
  </div>
</template>


<i18n>
{
  "en": {
    "title": "Unnamed Item Studios",
    "welcome-msg": "Welcome to Unnamed Item Studios",
    "last-posts": "Lastst posts",
    "main-links": "Main links"
  },
  "es": {
    "title": "Unnamed Item Studios",
    "welcome-msg": "Welcome to Unnamed Item Studios",
    "last-posts": "Últimas publicaciones",
    "main-links": "Links principales"
  }
}
</i18n>


<script>
import BaseMedia from '@/components/BaseMedia.vue'

export default {
  name: 'Home',

  data: function() {
    return {
      media1: {
        caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, hic?",
        id: "17960668516687039",
        media_url: "https://assets.website-files.com/5f6c71314a8db82b6218d0ea/61b19731a8767303d0fe9aa4_Screenshot-from-Cave-Story-Taken-by-the-author-Studio-Pixel-2004.png",
        timestamp: "2022-05-19T14:00:38+0000",
        username: "unnameditem.studios",
      },

      media2: {
        caption: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, hic?",
        id: "17960668516687039",
        media_url: "https://3.bp.blogspot.com/-d4z-VDO4sSo/WEmSUyyAe9I/AAAAAAAADZo/qdPk1ffJLwY_AVwSoskRg2ko9K93QVWsgCLcB/s1600/bell-9-kano-coding.jpg",
        timestamp: "2022-05-19T14:00:38+0000",
        username: "unnameditem.studios",
      }
    }
  },

  components: {
    BaseMedia
  },

  methods: {
    navigate: function(name) {
      if (this.$route.name != name)
        this.$router.push({name: name});
    }
  }
}
</script>


<style lang="scss" scoped>
a {
  color: var(--bs-purple);
}
</style>