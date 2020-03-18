<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://clevercoding.com" class="font-weight-bold ml-1"  rel="noopener">Clever Coding LLC</a> &
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="/about" class="nav-link" target="_blank" rel="noopener">About Us</a>
          </li>
          <li class="nav-item">
            <a href="/blog/" class="nav-link" target="_blank" rel="noopener">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank" rel="noopener">Terms & Policies</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
