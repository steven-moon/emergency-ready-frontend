<template>
  <div class="wrapper blog-post">
    <div class="page-header page-header-small rellax-header">
      <div class="page-header-image" :style="postIntroBackground"></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{postData.title}}</h2>
            <h4 v-if="postData.subtitle">{{postData.subtitle}}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="button-container">
<!--              <a href="#pablo" class="btn btn-success btn-round btn-lg">-->
<!--                <i class="now-ui-icons text_align-left"></i> Read Article-->
<!--              </a>-->
              <a href="https://twitter.com/clevercoding" class="btn btn-icon btn-lg btn-twitter btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/CleverCoding/" class="btn btn-icon btn-lg btn-facebook btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/clevercoding/" class="btn btn-icon btn-lg btn-instagram btn-round">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/clever-coding" class="btn btn-icon btn-lg btn-linkedin btn-round">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section" v-if="postData.intro">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto" v-html="postData.intro" />
          </div>
        </div>
      </div>
      <div class="section" v-else>
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto" v-html="postData.post_content" />
          </div>
        </div>
      </div>
      <div class="section section-blog col-md-10 ml-auto mr-auto">
        <div class="container">
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-6">
                <div class="image-container image-left" v-if="postData.leftImage" :style="{'background-image': 'url(' + postData.leftImage + ')'}">
                  <!-- First image on the left side -->
                  <p class="blockquote blockquote-primary" v-if="postData.imageBlockquote || postData.imageBlockquoteMeta">{{postData.imageBlockquote}}
                    <br>
                    <br>
                    <small v-if="postData.imageBlockquoteMeta">{{postData.imageBlockquoteMeta}}</small>
                  </p>
                </div>
                <!-- Second image on the left side of the article -->
                <div class="image-container image-left-bottom"
                  v-if="postData.bottomImage"
                  :style="{'background-image': 'url(' + postData.bottomImage + ')'}">
                </div>
              </div>
              <div class="col-md-5">
                <!-- First image on the right side, above the article -->
                <div class="image-container image-right"
                  v-if="postData.rightImage"
                  :style="{'background-image': 'url(' + postData.rightImage + ')'}">
                </div>
                <div v-if="postData.imagesText" v-html="postData.imagesText" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" v-if="postData.outroText">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto" v-html="postData.outroText" />
          </div>
        </div>
      </div>
      <div class="section section-blog-info">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="row" v-if="postData.tags && postData.tags.length > 0">
                <div class="col-md-12">
                  <div class="blog-tags">
                    Tags:
                    <span class="label label-success" v-for="tag in postData.tags" :key="tag">{{tag}} </span>
                  </div>
                </div>
              </div>
              <hr/>
              <card type="profile" plain>
                <template slot="raw-content">
                  <div class="row">
                    <div class="col-md-2" v-if="postData.author.avatar">
                      <div class="card-avatar">
                        <a href="#pablo">
                          <img class="img img-raised" :src="postData.author.avatar">
                        </a>
                        <div class="ripple-container"></div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h4 class="card-title">{{postData.author.name}}</h4>
                      <p class="description" v-if="postData.author.bio">{{postData.author.bio}}</p>
                    </div>
                    <div class="col-md-2">
                      <button type="button" class="btn btn-default pull-right btn-round">Follow
                      </button>
                    </div>
                  </div>
                </template>
              </card>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-comments" v-if="showComments">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="media-area">
                <h3 class="title text-center">3 Comments</h3>
                <comment v-for="comment in comments"
                         :avatar="comment.avatar"
                         :author="comment.author"
                         :date="comment.date"
                         :comment="comment.comment"
                         :replies="comment.replies"
                         :key="comment.id">
                </comment>
              </div>
              <h3 class="title text-center">Post your comment</h3>
              <div class="media media-post">
                <a class="pull-left author" href="#pablo">
                  <div class="avatar">
                    <img class="media-object img-raised" alt="64x64" src="img/olivia.jpg">
                  </div>
                </a>
                <div class="media-body">
                  <textarea class="form-control" v-model="form.comment"
                            placeholder="Write a nice reply or go home..." rows="4"></textarea>
                  <div class="media-footer">
                    <a href="#pablo" class="btn btn-success pull-right">
                      <i class="now-ui-icons ui-1_send"></i> Reply
                    </a>
                  </div>
                </div>
              </div>
              <!-- end media-post -->
            </div>
          </div>
        </div>
      </div>
      <div class="section" v-if="postData.similarPosts.length">
        <div class="container">
          <div class="col-md-12">
            <h2 class="title text-center">Similar Stories</h2>
            <br/>
            <div class="blogs-1" id="blogs-1">
              <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                  <card type="blog" plain v-for="(post, index) in postData.similarPosts" :key="index">
                    <template slot="raw-content">
                      <div :class="{'row-reverse': index % 2 !== 0, 'row': true}">
                        <div class="col-md-5">
                          <div class="card-image" v-if="post.image">
                            <img class="img img-raised rounded" :src="post.image" alt="">
                          </div>
                        </div>
                        <div class="col-md-7">
                          <h6 :class="['category', getSimilarPostCategoryColor(index)]" v-if="post.category">
                            <i :class="['now-ui-icons', post.category.icon ]" v-if="post.category.icon"></i>
                            {{post.category.name}}
                          </h6>
                          <h3 class="card-title">
                            <a :href="'/blog-post/' + post.id">{{post.title}}</a>
                          </h3>
                          <p class="card-description" v-if="post.excerpt">
                            {{post.excerpt}}
                          </p>
                          <p class="author">
                            by
                            <a href="#pablo">
                              <b>{{post.author.name}}</b>
                            </a>, {{getSimiliarPostHumanReadableDateDiff(index)}}
                          </p>
                        </div>
                      </div>
                    </template>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact-us :withMap="true"></contact-us>
    <subscribe :showImage="true"></subscribe>
  </div>
</template>

<script>
  /**
   * External Dependencies
   */
  import * as moment from 'moment';
  import {mapGetters} from 'vuex';

  /**
   * Internal Dependencies
   */
  import { WP_API_GET_POST_ENDPOINT } from '@/constants';
  import mapColorClass from '@/utils/mapColorClass';
  import ContactUs from '@/components/Sections/ContactUs'
  import Subscribe from '@/components/Sections/Subscribe'

  export default {
    name: 'blog-post',
    layout: 'argon-auth-layout',
    components: {
      ContactUs,
      Subscribe
    },
    data() {
      return {
        showComments: false,
        id: this.$route.params.id,
        form: {
          comment: ''
        },
        comments: [{
          avatar: 'img/james.jpg',
          author: 'Tina Andrew',
          date: '7 minutes ago',
          comment: `<p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                            <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>`,
        }, {
          avatar: 'img/michael.jpg',
          author: 'John Camber',
          date: 'Yesterday',
          comment: `<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                            <p> Don't forget, You're Awesome!</p>`,
          replies: [{
            avatar: 'img/julie.jpg',
            author: 'Tina Andrew',
            date: '2 Days Ago',
            comment: `<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                                <p> Don't forget, You're Awesome!</p>`,
            liked: true,
            likes: 25
          }]
        },
        ]
      }
    },
    async asyncData({ params, error }) {
      const response = await fetch(`${process.env.WP_API_GET_POST_ENDPOINT}?id=${params.id}`);

      const data = await response.json();

      if (!data.success) {
        error({statusCode: 404, message: 'This page could not be found.'});
      }

      return {
        postData: data.postData
      }
    },
    computed: {
      ...mapGetters('pageDataStore', {
        images: 'images',
      }),
      postIntroBackground() {
        if (this.postData.introImage) {
          return {
            'background-image': `url(${this.postData.introImage})`
          };
        }

        return {
          'background-image': `url(${this.images[Math.floor(Math.random() * Math.floor(this.images.length-1))]})`
        };
      }
    },
    methods: {
      getSimilarPostCategoryColor( postIndex ) {
        return mapColorClass(this.postData.similarPosts[ postIndex ].category.color);
      },
      getSimiliarPostHumanReadableDateDiff( postIndex ) {
        return moment.unix(this.postData.similarPosts[ postIndex ].date).fromNow();
      }
    },
    mounted() {
        console.log(this.postData)
    }
  }
</script>
<style>
</style>
