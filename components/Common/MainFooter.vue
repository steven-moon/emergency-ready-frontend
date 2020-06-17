<template>
  <footer class="footer"
          :class="{[`footer-${type}`]: type}"
          :data-background-color="backgroundColor">
    <div class="container">
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
          <li>
            <a href="/blog/">
              Blog
            </a>
          </li>
          <li>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{year}}, This website and the Emergency Ready App was Designed &amp Coded by
        <a href="https://clevercoding.com" target="_blank" class="text-success" rel="noopener">Clever Coding</a>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
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
