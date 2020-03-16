<template>
  <!--     *********    TEAM 4     *********      -->
  <div class="team-4">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="member in data.childArray"  class="col-md-6">
          <card type="profile" plain>
            <div slot="raw-content" class="row">
              <div class="col-md-5">
                <div class="card-image">
                  <a :href="member.link">
                    <img v-if="member.image" class="img img-raised rounded" :src="member.image"/>
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
                  <div class="card-footer">
                    <a v-if="member.linkedin"  :href="member.linkedin"  class="btn btn-icon btn-neutral btn-round"><i
                      class="fab fa-linkedin"></i></a>
                    <a v-if="member.twitter"  :href="member.twitter" class="btn btn-icon btn-neutral btn-round"><i
                      class="fab fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TEAM 4      *********      -->
</template>
<script>

  export default {
    name: 'team4',
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
