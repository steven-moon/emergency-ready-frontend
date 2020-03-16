<template>
  <footer class="footer footer-big" data-background-color="black">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-6">
            <h5></h5>
            <ul class="links-vertical">
              <li>
                <a href="/" class="text-muted">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" class="text-muted">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contactus" class="text-muted">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/featureds" class="text-muted">
                  Featured Apps
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="social-buttons">
              <li>
                <a
                  href="https://www.facebook.com/CleverCoding/"
                  class="btn btn-icon btn-neutral btn-facebook btn-round"
                >
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/clevercoding"
                  class="btn btn-icon btn-neutral btn-twitter btn-round"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/emergency-ready"
                  class="btn btn-icon btn-neutral btn-google btn-round"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clevercoding/"
                  class="btn btn-icon btn-neutral btn-instagram btn-round"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="copyright">
        Copyright &copy;
        {{ year }}
        Clever Coding LLC. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      yearsInBusiness: (new Date().getFullYear() - 2008)
    }
  }
}
</script>
<style></style>
