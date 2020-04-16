import {AppBarItem} from './AppBarItem'

// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DashboardCoreAppBar',

  components: {
    AppBarItem
  },

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    notifications: [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      `You're now friends with Andrew`,
      'Another Notification',
      'Another one'
    ],
    profile: [
      { title: 'Profile' },
      { title: 'Settings' },
      { divider: true },
      { title: 'Log out' }
    ]
  }),

  computed: {
    ...mapState(['drawer'])
  },

  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER'
    })
  }
}
