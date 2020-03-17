<template>
  <div class="base-container wrapper blog-posts">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" style="background-image: url('img/backgrounds/bg44.jpg') ;">
      </div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">A Place for Toughts, Articles and News Items</h2>
            <a class="btn btn-icon btn-lg btn-twitter btn-round" href="https://twitter.com/clevercoding">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn btn-icon btn-lg btn-facebook btn-round" href="https://www.facebook.com/CleverCoding/">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a class="btn btn-icon btn-lg btn-instagram btn-round" href="https://www.instagram.com/clevercoding/">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="btn btn-icon btn-lg btn-linkedin btn-round" href="https://www.linkedin.com/company/clever-coding">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-4">
      <div class="container-fluid">
        <transition-group name="posts">
          <div :class="{ 'row-reverse': index % 2 !== 0, 'row': true}" v-for="(chunks, index) in posts" :key="index + 1">
            <transition name="post-slide" appear>
              <div class="col-md-6 px-0" v-if="chunks[0]">
                <card class="card-fashion" :style="cardImage(chunks[0])" type="background">
                  <div class="card-title text-left">
                    <h2>
                      <a :href="'/blog/' + chunks[0].id">
                        {{ chunks[0].title }}
                      </a>
                    </h2>
                  </div>
                  <div class="card-footer text-left">
                    <div class="stats">
                      <span>
                          <i class="now-ui-icons users_circle-08"></i>{{ chunks[0].authorName }}
                      </span>
                      <span>
                        <i class="now-ui-icons tech_watch-time"></i> {{ chunks[0].date }}
                      </span>
                    </div>
                    <div class="stats-link pull-right" v-if="chunks[0].tags">
                      <a class="footer-link" href="/blog" v-for="(tag, tagIndex) in chunks[0].tags">
                        {{
                          tagIndex + 1 < chunks[0].tags.length ?
                            tag + ', ' :
                            tag
                        }}
                      </a>
                    </div>
                  </div>
                </card>
              </div>
            </transition>

            <transition name="post-slide-small" appear>
              <div class="col-md-3 px-0" v-if="chunks[1]">
                <div :class="{ 'arrow-left': index % 2 !==0, 'card card-fashion': true}">
                  <div class="card-title">
                    <h4>
                      <a :href="'/blog/' + chunks[1].id">
                        {{ chunks[1].title }}
                      </a>
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="card-footer">
                      <div class="stats">
                        <span>
                            <i class="now-ui-icons users_circle-08"></i>{{ chunks[1].authorName }}
                        </span>
                        <span>
                          <i class="now-ui-icons tech_watch-time"></i> {{ chunks[1].date }}
                        </span>
                      </div>
                      <div class="stats-link pull-right" v-if="chunks[1].tags">
                        <a href="/blog" v-for="(tag, tagIndex) in chunks[1].tags">
                          {{
                            tagIndex + 1 < chunks[1].tags.length ?
                            tag + ', ' :
                            tag
                          }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <transition name="post-slide-small-image" appear>
              <div class="col-md-3 px-0" v-if="chunks[1]">
                <card class="card-fashion" :style="cardImage(chunks[1])" type="background">
                </card>
              </div>
            </transition>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="main">
      <div class="container" v-if="interestingPosts.length">
        <div class="section">
          <h3 class="title text-center">You may also be interested in</h3>
          <br/>
          <div class="row">
            <div class="col-md-4" v-for="(post, index) in interestingPosts" :key="index">
              <card plain type="blog">
                <img class="img rounded img-raised" slot="image" :src="postImage(post.image)"/>
                <h6 :class="['category', getCategoryColorClass(post.category.color)]" v-if="post.category">
                  <i :class="['now-ui-icons', post.category.icon]" v-if="post.category.icon"></i>
                  {{ post.category.name }}
                </h6>
                <h4 class="card-title">
                  <a :href="'/blog/' + post.id">{{ post.title }}</a>
                </h4>
                <p class="card-description">
                  {{ post.excerpt }}
                  <a :href="'/blog/' + post.id"> Read More </a>
                </p>
                <div class="author">
                  <img
                    class="avatar img-raised"
                    alt="..."
                    v-if="post.author && post.author.avatar"
                    v-lazy="post.author.avatar"
                  />
                  <span>{{ post.author.name }}</span>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * External Dependencies
   */
  import chunk from 'lodash.chunk';
  import throttle from 'lodash.throttle';
  import {mapGetters} from 'vuex';

  /**
   * Internal Dependencies
   */
  //import { WP_API_GET_POSTS_ENDPOINT } from '@/constants';
  import mapColorClass from '@/utils/mapColorClass';


  export default {
    name: 'blog',
    layout: 'argon-dashboard-layout',
    components: {
    },
    data() {
      return {
        year: new Date().getFullYear(),
        loading: false,
        tempImages: {}
      }
    },
    async asyncData({ params, error }) {
      const response = await fetch(process.env.WP_API_GET_POSTS_ENDPOINT);

      const data = await response.json();

      if (!data.success) {
        error({statusCode: 404, message: 'This page could not be found.'});
      }

      return {
        postsChunks: chunk(data.posts, 2),
        nextPage: data.nextPage,
        interestingPosts: data.interestingPosts,
      }
    },
    mounted() {
      window.addEventListener('scroll', throttle(this.getMorePosts, 200));
    },
    destroyed() {
      window.removeEventListener('scroll', this.getMorePosts);
    },
    computed: {
      ...mapGetters('pageDataStore', {
        images: 'images',
      }),
      /**
       * Swapped posts chunks
       * @return {array}
       */
      posts() {
        const chunks = [];
        this.postsChunks.forEach((chunk, index) => {
          let chunkCopy = [...chunk];
          if (index % 2 !== 0) {
            chunkCopy.reverse();
          }

          chunks.push(chunkCopy);
        });

        return chunks;
      },
    },
    methods: {
      cardImage(post){
        var image = post['image'];

        if(!image){
          image = this.tempImages[post.id]
        }

        if(image && image.length > 0){
          return {
            'background-image': `url(${image})`
          };
        }else{

          var tempImage = this.images[Math.floor(Math.random() * Math.floor(this.images.length-1))];
          this.tempImages[post.id] = tempImage


          return {
            'background-image': `url(${tempImage})`
          };
        }
      },
      postImage(image){
        if(image && image.length > 0){
          return image;
        }else{
          return this.images[Math.floor(Math.random() * Math.floor(this.images.length-1))];
        }
      },
      async getMorePosts() {
        if (this.loading) {
          return;
        }

        const postsSection     = document.querySelector('.blog-posts .projects-4');
        const postsSectionRect = postsSection.getBoundingClientRect();

        if (postsSectionRect.bottom - postsSectionRect.height <= 100 && this.nextPage > -1 ) {
          this.loading = true;
          const response = await fetch(process.env.WP_API_GET_POSTS_ENDPOINT + '?page=' + this.nextPage);

          const data = await response.json();

          this.loading = false;
          if (!data.success) {
            return;
          }

          this.postsChunks.push(...chunk(data.posts, 2));
          this.nextPage = data.nextPage;
        }
      },
      getCategoryColorClass( color ) {
        return mapColorClass(color);
      },
    }
  }
</script>
<style>
</style>
