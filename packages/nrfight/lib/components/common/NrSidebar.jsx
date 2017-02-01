import React from 'react';
import { Components, registerComponent } from 'meteor/nova:core';

const NrSidebar = props => {
  
  return (
    <div className="sidebar">
      <Components.CategoriesList />
    </div>
  )
}

registerComponent('NrSidebar', NrSidebar);
