import Posts from 'meteor/nova:posts';
import Users from 'meteor/nova:users';
import Categories from 'meteor/nova:categories';
import moment from 'moment';
import htmlEntities from 'html-entities';

const Entities = htmlEntities.AllHtmlEntities;
const entities = new Entities();

const importVideos = limit => {

  const videosJSON = JSON.parse(Assets.getText("videos.json"));

  console.log(`// Found ${videosJSON.posts.length} videos to import`)

  let posts = videosJSON.posts;

  if (limit) {
    posts = _.first(posts, limit);
  }

  posts.forEach((post, index) => {

    console.log(`// ${index}. importing "${post.title}"`);

    let postProperties = {
      _id: post.id.toString(),
      title: entities.decode(post.title),
      slug: post.slug,
      body: post.content,
      postedAt: moment(post.date, "YYYY-MM-DD HH:mm:ss").toDate(),
      userId: "iJERR3Gn224bafp6Z",
      categories: []
    };

    if (post.custom_fields && post.custom_fields.embed) {
      
      postProperties.videoId = post.custom_fields.embed[0];

      const extraProperties = HTTP.get(`https://videopress.com/data/wordpress.json?guid=${postProperties.videoId}&domain=nrfight.tv`).data;

      // console.log(extraProperties);

      postProperties = {
        ...postProperties,
        videoUrl: extraProperties.mp4.url,
        thumbnailUrl: extraProperties.posterframe,
        duration: extraProperties.duration
      }

    }

    const postCategories = post.taxonomy_woo_video_category;

    postCategories.forEach(category => {

      const categoryId = category.id.toString();

      if (!Categories.findOne(categoryId)) { // category doesn't exist yet
        const newCategory = {
          _id: categoryId,
          name: entities.decode(category.title),
          slug: category.slug,
          parentId: category.parent.toString(),
          count: category.post_count 
        };
        console.log(`// Creating new category ${newCategory.name}`);
        Categories.insert(newCategory);
      }

      postProperties.categories.push(categoryId);
    
    });


    Posts.methods.new(postProperties);

    // try {
    // } catch(error) {
    //   console.log(error);
    // }
  });

}

Meteor.methods({
  importVideos(limit) {
    Posts.remove({});
    Categories.remove({});
    importVideos(limit);
  }
});