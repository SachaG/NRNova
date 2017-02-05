import { Components, replaceComponent } from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';

const NrLayout = props => 
  
  <div className="wrapper" id="wrapper">

      <Components.HeadTags />

      <Components.UsersProfileCheck {...props} />

      <Components.Header {...props}/>
    
      <div className="main">

        <Components.FlashMessages />

        <div className="main-content">
        
          <Components.Sidebar />

          <div className="center-content">

            {props.children}

          </div>

        </div>

        <Components.Newsletter />

      </div>
    

      <Components.Footer {...props}/>
    
    </div>

replaceComponent('Layout', NrLayout);