import Posts from 'meteor/nova:posts';
import { getCategories } from './schema.js';

Posts.addField(
  {
    fieldName: 'categories',
    fieldSchema: {
      type: [String],
      control: "checkboxgroup",
      optional: true,
      insertableBy: ['members'],
      editableBy: ['members'],
      viewableBy: ['guests'],
      form: {
        noselect: true,
        type: "bootstrap-category",
        order: 50,
        options: formProps => getCategories(formProps.client),
      },
      resolveAs: 'categories: [Category]'
    }
  }
);
