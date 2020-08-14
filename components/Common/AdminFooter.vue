<template>
  <footer class="footer bg-success"
          :class="{[`footer-${type}`]: type}"
          :data-background-color="backgroundColor">
    <div class="container white-text">
      <nav>
        <ul>
          <li>
            <a href="https://clevercoding.com">
              Clever Coding
            </a>
          </li>
          <li>
            <a href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{year}} Clever Coding. This website and the Emergency Ready App was Designed &amp Coded by
        <a href="https://clevercoding.com" target="_blank" class="white-text" rel="noopener">Clever Coding</a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: {
        type: String,
        default: 'success'
      },
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
