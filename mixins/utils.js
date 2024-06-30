export default {
    mounted() {
        if (process.browser) {
            this.$gtag('config', 'G-HWPLF2DR7W', {
                page_path: this.$route.fullPath,
            });
            this.$store.commit("pageData/addPageView", this.$route.fullPath);
        }
    }
}
