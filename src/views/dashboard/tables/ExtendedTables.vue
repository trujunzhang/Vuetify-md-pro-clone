<template>
  <v-container
    id="extended-tables"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Simple Tables"
      link="componetns/simple-tables"
    />
    <SimpleTable/>
    <div class="py-3" />
    <CheckedTable/>
    <div class="py-3" />
    <ShoppingCartTable/>
  </v-container>
</template>

<script>
  import SimpleTable from './extendedTables/SimpleTable.vue'
  import CheckedTable from "./extendedTables/CheckedTable";
  import ShoppingCartTable  from './extendedTables/ShoppingCartTable.vue'

  export default {
    name: 'DashboardExtendedTables',
    components: {
      SimpleTable,
      CheckedTable,
      ShoppingCartTable
    }
  }
</script>

