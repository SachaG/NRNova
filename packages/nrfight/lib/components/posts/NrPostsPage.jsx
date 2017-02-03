import { ModalTrigger, replaceComponent, Components, registerComponent } from 'meteor/nova:core';
import React from 'react';
import Posts from "meteor/nova:posts";
import NrVideo from './NrVideo.jsx';
import { Link } from 'react-router';

const NrPostsPage = props => {
 
 if (props.loading) {

    return <div className="posts-page"><Components.Loading/></div>

  } else {

    const post = props.document;

    const htmlBody = {__html: post.htmlBody};

    return (
      <div className="posts-page">
        <Components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
        
        <h3 className="posts-item-title">
          <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
            {post.title}
          </Link>
        </h3>

        <Components.PostsCategories post={post} />

        <Components.Vote collection={Posts} document={post} currentUser={props.currentUser}/>

        {props.currentUser ? <NrVideo post={post}/> : 
          <div className="video-no-access">
            <img src={post.thumbnailUrl} />
            <ModalTrigger title="Sign Up/Log In" size="small" component={<a>Inscrivez-vous</a>}>
              <Components.UsersAccountForm />
            </ModalTrigger>
            pour avoir accès à la vidéo.
          </div>
        }

        {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Components.PostsCommentsThread terms={{postId: post._id}} />

      </div> 
    )
  }

};


replaceComponent('PostsPage', NrPostsPage);
