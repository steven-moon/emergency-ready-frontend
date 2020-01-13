<template>
  <!--     *********    TEAM 3     *********      -->
  <div class="team-3 section-image" :style="{ backgroundImage: `url(${data.backgroundUrl})` }">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="member in data.childArray" class="col-xl-6 col-lg-7 ml-auto mr-auto">
          <card type="profile">
            <div slot="raw-content" class="row">
              <div class="col-md-5">
                <div class="card-image">
                  <a :href="member.link">
                    <img v-if="member.image" class="img" :src="member.image"/>
                  </a>
                </div>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h3 v-if="member.name" class="card-title">{{member.name}}</h3>
                  <h6 v-if="member.title" class="category text-primary">{{member.title}}</h6>
                  <p v-if="member.description" class="card-description">
                    {{member.description}}
                  </p>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TEAM 3      *********      -->
</template>
<script>

  export default {
    name: 'team3',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
    }
  }
</script>
<style>
</style>
