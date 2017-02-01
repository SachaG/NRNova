import { ModalTrigger, Components, replaceComponent, ShowIf, withList, Utils, getRawComponent } from "meteor/nova:core";
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, DropdownButton, MenuItem, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NrCategoriesList extends getRawComponent('CategoriesList') {

  render() {

    const currentQuery = _.clone(this.props.router.location.query);
    const nestedCategories = this.getNestedCategories();

    return (
      <div>
          <div className="category-menu-item dropdown-item">
            <LinkContainer to={{pathname:"/", query: currentQuery}}>
              <FormattedMessage id="categories.all"/>
            </LinkContainer>
          </div>
          {
            // categories data are loaded
            !this.props.loading ?
              // there are currently categories
              nestedCategories && nestedCategories.length > 0 ?
                nestedCategories.map((category, index) => <Components.CategoriesNode key={index} category={category} index={index} />)
              // not any category found
              : null
            // categories are loading
            : <Components.Loading />
          }

      </div>
    )

  }
}

replaceComponent('CategoriesList', NrCategoriesList);
