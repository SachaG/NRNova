import React from 'react';
import Posts from "meteor/nova:posts";
import NrVideo from './NrVideo.jsx';

const NrPostsPage = ({document, currentUser}) => {
  
  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (
    <div className="posts-page">

      <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      <Telescope.components.PostsItem post={post}/>

      <NrVideo post={post}/>

      <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>
  )
};

NrPostsPage.displayName = "NrPostsPage";

export default NrPostsPage;