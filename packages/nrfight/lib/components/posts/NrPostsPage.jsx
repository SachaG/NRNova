import { replaceComponent, Components, registerComponent } from 'meteor/nova:core';
import React from 'react';
import Posts from "meteor/nova:posts";
import { Link } from 'react-router';
import { intlShape } from 'react-intl';

const NrPostsPage = props => {
 
 if (props.loading) {

    return <div className="posts-page"><Components.Loading/></div>

  } else {

    const post = props.document;

    const htmlBody = {__html: post.htmlBody};



    return (
      <div className="posts-page">
        <Components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
        
        <h2 className="posts-item-title">
          <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
            {post.title}
          </Link>
        </h2>

        {props.currentUser ? <Components.NrVideo post={post}/> : <Components.NrVideoNoAccess post={post}/> }

        {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

        <div className="posts-page-meta">
          
          <Components.Vote collection={Posts} document={post} currentUser={props.currentUser}/>

          <Components.PostsCategories post={post} />

        </div>

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Components.PostsCommentsThread terms={{postId: post._id}} />

      </div> 
    )
  }

};

replaceComponent('PostsPage', NrPostsPage);
