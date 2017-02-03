import { ModalTrigger, Components, replaceComponent, getRawComponent } from 'meteor/nova:core';
import React, { PropTypes, Component } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router'
import Categories from 'meteor/nova:categories';
import { Link } from 'react-router';

class NrCategory extends getRawComponent('Category') {

  render() {

    const {category, index, router} = this.props;

    // const currentQuery = router.location.query;
    const currentCategorySlug = router.location.query.cat;
    const newQuery = _.clone(router.location.query);
    newQuery.cat = category.slug;

    return (
      <div className="category-menu-item dropdown-item">
        <Link to={{pathname:"/", query: newQuery}}>
          {currentCategorySlug === category.slug ? <Components.Icon name="voted"/> :  null}
          {category.name}
        </Link>
        <Components.ShowIf check={Categories.options.mutations.edit.check} document={category}>{this.renderEdit()}</Components.ShowIf>
      </div>
    )
  }
}

replaceComponent('Category', NrCategory);
