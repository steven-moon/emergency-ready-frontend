<template>
  <footer class="footer footer-big" data-background-color="black">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-4">
            <h5>About Us</h5>
            <ul class="links-vertical">
              <li>
                <a href="/blog" class="text-muted">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" class="text-muted">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactus" class="text-muted">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/testimonials" class="text-muted">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/careers" class="text-muted">
                  Careers
                </a>
              </li>
              <li>
                <a href="/billing-models" class="text-muted">
                  Billing Models
                </a>
              </li>
              <li>
                <a href="/featured-apps" class="text-muted">
                  Featured Apps
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Services</h5>
            <ul class="links-vertical">
              <li>
                <a href="/customdevelopment" class="text-muted">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="/design-to-html-frontend-coding" class="text-muted">
                  Design To HTML
                </a>
              </li>
              <li>
                <a href="/design-to-reactive-frontend-coding" class="text-muted">
                  Design To Reactive App
                </a>
              </li>
              <li>
                <a href="/legacy-upgrades" class="text-muted">
                  Legacy Upgrades
                </a>
              </li>
              <li>
                <a href="/mobile-app-developers" class="text-muted">
                  Mobile App Developers
                </a>
              </li>
              <li>
                <a href="/web-developers" class="text-muted">
                  Web Developers
                </a>
              </li>
              <li>
                <a href="/prototyping" class="text-muted">
                  ProtoTyping
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
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
            <h5>
              <small>Numbers Don't Lie</small>
            </h5>
            <h5>
              {{yearsInBusiness}}
              <small class="text-muted">Years in Business</small>
            </h5>
            <h5>
              400+
              <small class="text-muted">Number of Projects Completed</small>
            </h5>
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
