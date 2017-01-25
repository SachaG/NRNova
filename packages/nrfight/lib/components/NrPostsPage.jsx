import { replaceComponent, Components, withCurrentUser, withDocument, registerComponent } from 'meteor/nova:core';
import React from 'react';
import Posts from "meteor/nova:posts";
import NrVideo from './NrVideo.jsx';
import gql from 'graphql-tag';

const NrPostsPage = props => {
 
 if (props.loading) {

    return <div className="posts-page"><Components.Loading/></div>

  } else {

    const post = props.document;

    const htmlBody = {__html: post.htmlBody};

    return (
      <div className="posts-page">
        <Components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
        
        <Components.PostsItem post={post} currentUser={props.currentUser} />

        <NrVideo post={post}/>

        {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Components.PostsCommentsThread terms={{postId: post._id}} />

      </div> 
    )
  }

};

NrPostsPage.displayName = "NrPostsPage";

NrPostsPage.fragment = gql` 
  fragment PostsSingleFragment on Post {
    _id
    title
    url
    body # extra
    htmlBody # extra
    slug
    thumbnailUrl
    baseScore
    postedAt
    sticky
    status
    categories {
      # ...minimumCategoryInfo
      _id
      name
      slug
    }
    commentCount
    commenters {
      # ...avatarUserInfo
      _id
      displayName
      emailHash
      slug
    }
    upvoters {
      _id
    }
    downvoters {
      _id
    }
    upvotes # should be asked only for admins?
    score # should be asked only for admins?
    viewCount # should be asked only for admins?
    clickCount # should be asked only for admins?
    user {
      # ...avatarUserInfo
      _id
      displayName
      emailHash
      slug
    }
    userId
    videoUrl
  }
`;

const options = {
  collection: Posts,
  queryName: 'postsSingleQuery',
  fragment: NrPostsPage.fragment,
};

export default registerComponent('PostsPage', NrPostsPage, withCurrentUser, withDocument(options));
