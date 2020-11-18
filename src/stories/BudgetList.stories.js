import { BudgetList } from './BudgetList';

export default {
  title: 'Example/Budget',
  component: BudgetList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BudgetList },
  template:
    '<BudgetList :list="list" ></BudgetList>',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};