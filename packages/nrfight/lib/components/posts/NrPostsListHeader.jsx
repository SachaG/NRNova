import { Components, replaceComponent } from 'meteor/nova:lib';
import React from 'react';

const NrPostsListHeader = () => {

  return (
    <div className="posts-list-header">
      <Components.SearchForm/>
      <div className="posts-list-header-categories">
        <Components.CategoriesList />
      </div>
    </div>
  )
}

replaceComponent('PostsListHeader', NrPostsListHeader);
