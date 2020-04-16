<template>
  <v-app>
    <dashboard-core-app-bar v-model="expandOnHover" />

    <dashboard-core-drawer :expand-on-hover.sync="expandOnHover" />

    <dashboard-core-view />

    <dashboard-core-settings v-model="expandOnHover" />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar.vue'),
      DashboardCoreDrawer: () => import('./components/core/Drawer.vue'),
      DashboardCoreSettings: () => import('./components/core/Settings.vue'),
      DashboardCoreView: () => import('./components/core/View.vue')
    },

    data: () => ({
      expandOnHover: false
    })
  }
</script>
