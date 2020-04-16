
// Mixins
import Proxyable from 'vuetify/lib/mixins/proxyable'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'DashboardCoreSettings',

  mixins: [Proxyable],

  data: () => ({
    color: '#E91E63',
    colors: [
      '#9C27b0',
      '#00CAE3',
      '#4CAF50',
      '#ff9800',
      '#E91E63',
      '#FF5252'
    ],
    image: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    images: [
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-2.jpg',
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-3.jpg',
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-4.jpg'
    ],
    menu: false,
    saveImage: '',
    scrim: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    scrims: [
      'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)',
      'rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)'
    ],
    showImg: true
  }),

  computed: {
    ...mapState(['barImage'])
  },

  watch: {
    color(val) {
      this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
    },
    showImg(val) {
      if (!val) {
        this.saveImage = this.barImage
        this.setBarImage('')
      } else if (this.saveImage) {
        this.setBarImage(this.saveImage)
        this.saveImage = ''
      } else {
        this.setBarImage(val)
      }
    },
    image(val) {
      this.setBarImage(val)
    },
    scrim(val) {
      this.$store.commit('SET_SCRIM', val)
    }
  },

  methods: {
    ...mapMutations({
      setBarImage: 'SET_BAR_IMAGE'
    })
  }
}
