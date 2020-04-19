<template>
  <base-material-card
    color="success"
    icon="mdi-vuetify"
    inline
    title="Shopping Cart Table"
    class="px-5 py-3"
  >
    <v-data-table
      :headers="productHeaders"
      :items="products"
      hide-default-footer
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-img
              :src="item.src"
              class="mx-auto"
              max-width="75"
            />
          </td>
          <td>
            <div
              class="purple--text headline"
              v-text="item.name"
            />
            <div class="grey--text subtitle-1 font-weight-light">
              by {{ item.brand }}
            </div>
          </td>
          <td v-text="item.color" />
          <td v-text="item.size" />
          <td
            class="text-right"
            v-text="item.price"
          />
          <td />
          <td
            class="text-right"
            v-text="item.amount"
          />
        </tr>
      </template>

      <template v-slot:footer>
        <v-divider />

        <v-card-text>
          <v-row
            align="center"
            justify="end"
          >
            <strong class="title">Total</strong>

            <div class="display-1 font-weight-light ml-12">
              € 2,346
            </div>
          </v-row>
        </v-card-text>

        <v-divider />

        <div class="text-right py-6">
          <v-btn
            color="info"
            default
            rounded
            class="mr-0"
          >
            Complete Purchase
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </base-material-card>
</template>

<script src="./ShoppingCartTable.js"/>
