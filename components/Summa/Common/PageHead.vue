<template>
  <div>
    <div v-if="$mq === 'mobile'" class="page__head">
      <a href="#" class="btn btn--only-icon btn--back-small" @click.prevent="goBack">
        <i>
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path  d="M14 6.125H3.351l4.891-4.891L7 0 0 7l7 7 1.234-1.234L3.35 7.875H14z" fill="#1D6283"/>
          </svg>
        </i>
      </a>

      <h3 v-if="add">ADD {{page}} </h3>
      <h3 v-else-if="edit">EDIT {{page}} - {{name}}</h3>
      <h3 v-else>{{page}}  - {{name}}</h3>
    </div>
    <div v-else class="section-top-actions">
      <button class="btn btn--with-icon btn--back btn--wide" @click.prevent="goBack">
        <i>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z" fill="#1D6383" fill-rule="evenodd"/>
          </svg>
        </i>

        <span>BACK TO {{listName}}</span>
      </button>

      <button  v-if="notes"  class="btn btn-notes" @click="modalToggle">
        <span>Notes</span>

        <small class="notes-counter">{{notes.length}}</small>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "page", "listName", "name","notes","add","edit","back_url"
    ],
    name: 'PageHead',
    methods: {
       modalToggle() {
        this.$emit('modalToggle');
      },
       goBack(){
          window.location.href = this.back_url;
       }
    }
  }
</script>
