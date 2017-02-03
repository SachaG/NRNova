import React from 'react';
import { Link } from 'react-router';
import { replaceComponent, getSetting, Components } from 'meteor/nova:core';

const NrHeader = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "Nova");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        
        <div className="nav">
          
          <div className="nav-links">
            <a href="http://nrfight.com" target="_blank">Club</a>
          </div>

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

        </div>

      </header>
    </div>
  )
}


replaceComponent('Header', NrHeader);
