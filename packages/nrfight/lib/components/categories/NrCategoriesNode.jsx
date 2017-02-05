import { Components, getRawComponent, replaceComponent } from 'meteor/nova:core';
import React, { PropTypes, Component } from 'react';

class NrCategoriesNode extends getRawComponent('CategoriesNode') {

  constructor() {
    super();
    this.toggleChildren = this.toggleChildren.bind(this);
    this.state = {
      showChildren: false
    };
  }

  toggleChildren() {
    this.setState({
      showChildren: !this.state.showChildren
    });
  }

  renderCategory(category) {
    return (
      <Components.Category category={category} key={category._id} hasChildren={!!this.props.category.childrenResults} toggleChildren={this.toggleChildren} expanded={this.state.showChildren} />
    )
  }

  render() {

    const category = this.props.category;
    const children = this.props.category.childrenResults;

    return (
      <div className="categories-node">
        {this.renderCategory(category)}
        {children && this.state.showChildren ? this.renderChildren(children) : null}
      </div>
    )
  }

}

replaceComponent('CategoriesNode', NrCategoriesNode);
