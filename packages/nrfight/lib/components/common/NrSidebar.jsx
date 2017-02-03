import { Components, registerComponent } from 'meteor/nova:lib';
import React from 'react';

const NrSidebar = () => {

  return (
    <div className="sidebar posts-list-header">
      <Components.SearchForm/>
      <div className="posts-list-header-categories">
        <Components.CategoriesList />
      </div>
    </div>
  )
}

registerComponent('Sidebar', NrSidebar);
