import Posts from "meteor/nova:posts";
import Users from "meteor/nova:users";
import Categories from "meteor/nova:categories";

Posts.addField([
  {
    fieldName: 'videoId',
    fieldSchema: {
      type: String,
      optional: true,
      viewableBy: ['guests'],
      insertableBy: ['admins'],
      editableBy: ['admins']
    }
  },
  {
    fieldName: 'videoUrl',
    fieldSchema: {
      type: String,
      optional: true,
      viewableBy: ['members'],
      insertableBy: ['admins'],
      editableBy: ['admins']
    }
  },
  {
    fieldName: 'duration',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
    }
  }
]);

Categories.addField([
  {
    fieldName: 'count',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
    }
  }
]);