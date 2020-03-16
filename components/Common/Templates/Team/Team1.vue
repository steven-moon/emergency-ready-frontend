<template>
  <!--     *********    TEAM 1     *********      -->
  <div class="team-1">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
          <h4 v-if="data.description" class="description">{{data.description}}</h4>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="member in data.childArray" class="col-md-4 ml-1" >
          <card type="profile" plain>
            <img v-if="member.image" slot="avatar" class="img img-raised" :src="member.image"/>

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
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END TEAM 1      *********      -->
</template>
<script>

  export default {
    name: 'team1',
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
