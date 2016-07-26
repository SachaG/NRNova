import PublicationUtils from 'meteor/utilities:smart-publications';
import Posts from "meteor/nova:posts";
import Users from "meteor/nova:users";
import Categories from "meteor/nova:categories";

const canInsert = user => Users.canDo(user, "posts.new");
const canEdit = Users.canEdit;
const canEditAll = user => Users.canDo(user, "posts.edit.all");

Posts.addField([
  {
    fieldName: 'videoId',
    fieldSchema: {
      type: String,
      optional: true,
      publish: true,
      editableIf: canEditAll
    }
  },
  {
    fieldName: 'videoUrl',
    fieldSchema: {
      type: String,
      optional: true,
      publish: true,
      editableIf: canEditAll
    }
  },
  {
    fieldName: 'duration',
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
    }
  }
]);

PublicationUtils.addToFields(Posts.publishedFields.list, ["wpId", "videoId"]);

Categories.addField([
  {
    fieldName: 'count',
    fieldSchema: {
      type: Number,
      optional: true,
      publish: true,
    }
  }
]);