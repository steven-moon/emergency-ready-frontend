<template>
  <!--     *********    PROJECTS 4     *********      -->
  <div class="projects-4" data-background-color="gray">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 mr-auto ml-auto text-center">
          <h6 v-if="data.mutedText" class="category text-muted">{{data.mutedText}}</h6>
          <h2 v-if="data.title" class="title">{{data.title}}</h2>
        </div>
      </div>
      <div v-for="item in data.cards"  class="row">
        <div v-if="item.item1" class="col-md-6 px-0">
          <card type="background" class="card-fashion"
                :style="{ backgroundImage: `url(${item.item1.backgroundUrl})` }">
            <div class="card-body">
              <div class="card-title text-left">
                <h2>
                  <a v-if="item.item1.link">
                    {{item.item1.linkText}}
                  </a>
                </h2>
              </div>
              <div class="card-footer text-left">
                <div class="stats">
                    <span>
                        <i :class="item.item1.icon"></i>{{item.item1.data}}
                    </span>
                </div>
              </div>
            </div>
          </card>
        </div>
        <div v-if="item.item2" class="col-md-6 px-0">
          <div class="card-container">
            <div class="card card-fashion">
              <div class="card-title">
                <a v-if="item.item2.link">
                  <h4>
                    <a v-if="item.item2.link">
                      {{item.item2.linkText}}
                    </a>
                  </h4>
                </a>
              </div>
              <div class="card-body">
                <div class="card-footer">
                  <div class="stats">
                    <span>
                        <i :class="item.item2.icon"></i>{{item.item2.data}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <card type="background" class="card-fashion"
                  :style="{ backgroundImage: `url(${item.item2.backgroundUrl})` }">
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROJECTS 4      *********      -->
</template>
<script>

  export default {
    name: 'project4',
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
