import { Components, replaceComponent } from 'meteor/nova:core';
import React, { PropTypes, Component } from 'react';

const NrPostsHome = (props, context) => {
  const terms = _.isEmpty(props.location && props.location.query) ? {view: 'new'}: props.location.query;
  return <Components.PostsList terms={terms} showHeader={false} />
};

replaceComponent('PostsHome', NrPostsHome);
