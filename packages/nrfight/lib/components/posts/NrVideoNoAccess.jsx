import React from 'react';
import { Components, registerComponent } from 'meteor/nova:core';
import { Button } from 'react-bootstrap';
import { intlShape } from 'react-intl';

const NrVideoNoAccess = ({post}, context) => {

  const button = <Button className="video-signup-button" type="submit" bsStyle="primary">Inscrivez-vous</Button>;

  return (
    <div className="video-wrapper video-no-access">
      <img className="video-thumbnail" src={post.thumbnailUrl} />
      <div className="video-signup-message">
        <div>
          <Components.ModalTrigger title={context.intl.formatMessage({id: 'users.sign_up'})} size="small" component={button}>
            <Components.UsersAccountForm />
          </Components.ModalTrigger>
          <h5>Pour accéder à la vidéo</h5>
        </div>
      </div>
    </div>
  )
}

NrVideoNoAccess.contextTypes = {
  intl: intlShape
};

registerComponent('NrVideoNoAccess', NrVideoNoAccess);