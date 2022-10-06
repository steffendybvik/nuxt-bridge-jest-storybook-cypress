// @ts-nocheck

export default {
  title: 'NuxtLogo',
}

const Template = (args: { argTypes }) => ({
  template: `<NuxtLogo v-bind="args" />`,
  data() {
    return { args }
  },
})

export const Default = Template.bind({})
Default.args = {}
