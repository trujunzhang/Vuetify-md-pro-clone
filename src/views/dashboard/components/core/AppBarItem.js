
// Components
import { VHover, VListItem } from "vuetify/lib";

// eslint-disable-next-line import/prefer-default-export
export const AppBarItem = {
  render(h) {
    return h(VHover, {
      scopedSlots: {
        default: ({ hover }) => h(VListItem, {
          attrs: this.$attrs,
          class: {
            'black--text': !hover,
            'white--text secondary elevation-12': hover
          },
          props: {
            activeClass: '',
            dark: hover,
            link: true,
            ...this.$attrs
          }
        }, this.$slots.default)
      }
    })
  }
};
