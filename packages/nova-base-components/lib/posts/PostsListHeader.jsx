import { Components, registerComponent } from 'meteor/nova:lib';
import React from 'react';
import Categories from "meteor/nova:categories";

const PostsListHeader = () => {

  return (
    <div className="posts-list-header">
      <div className="posts-list-header-categories">
        <Components.CategoriesList />
      </div>
      <Components.PostsViews />
      <Components.SearchForm/>
    </div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

registerComponent('PostsListHeader', PostsListHeader);
