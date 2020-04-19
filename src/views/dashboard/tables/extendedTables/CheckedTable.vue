<template>
  <base-material-card
    color="success"
    icon="mdi-clipboard"
    inline
    title="Checked Table"
    class="px-5 py-3"
  >
    <v-data-table
      :headers="headers"
      :items="selections"
      hide-default-footer
      show-select
    >
      <template v-slot:footer>
        <v-card-text>
          <v-row
            align="center"
            justify="end"
          >
            <strong class="title">Total</strong>

            <div class="display-1 font-weight-light ml-12">
              € 12,999
            </div>
          </v-row>
        </v-card-text>
      </template>
    </v-data-table>
  </base-material-card>
</template>

<script src="./CheckedTable.js"/>
