import { addStrings } from 'meteor/nova:core';

addStrings('en', {
  "forms.submit": "Submit",
  "forms.cancel": "Cancel",

  "posts.new_post": "New Post",
  "posts.edit": "Edit",
  "posts.edit_success": "Post “{title}” edited.",
  "posts.delete": "Delete",
  "posts.delete_confirm": "Delete post “{title}”?",
  "posts.delete_success": "Post “{title}” deleted.",
  "posts.title": "Title",
  "posts.url": "URL",
  "posts.body": "Body",
  "posts.categories": "Categories",
  "posts.thumbnailUrl": "Thumbnail URL",
  "posts.status": "Status",
  "posts.sticky": "Sticky",
  "posts.load_more": "Load More",
  "posts.load_more_days": "Load More Days",
  "posts.no_more": "No more posts.",
  "posts.no_results": "No posts to display.",
  "posts.search": "Search",
  "posts.view": "View",
  "posts.top": "Top",
  "posts.new": "New",
  "posts.best": "Best",
  "posts.pending": "Pending",
  "posts.rejected": "Rejected",
  "posts.scheduled": "Scheduled",
  "posts.daily": "Daily",
  "posts.clear_thumbnail": "Clear Thumbnail",
  "posts.enter_thumbnail_url": "Enter URL",
  "posts.created_message": "Post created.",
  "posts.rate_limit_error": "Please wait {details} seconds before posting again.",
  "posts.postedAt": "Posted at",
  "posts.dateNotDefined": "Date not defined",
  "posts.subscribe": "Subscribe",
  "posts.unsubscribe": "Unsubscribe",
  "posts.subscribed": "You have subscribed to “{name}” comments.",
  "posts.unsubscribed": "You have unsubscribed from “{name}” comments.",
  "posts.subscribed_posts" : "Posts subscribed to",
  "posts.link_already_posted": "This link has already been posted.",

  "comments.comments": "Comments",
  "comments.count": "{count, plural, =0 {No comments} one {# comment} other {# comments}}",
  "comments.new": "New Comment",
  "comments.no_comments": "No comments to display.",
  "comments.reply": "Reply",
  "comments.edit": "Edit",
  "comments.delete": "Delete",
  "comments.delete_confirm": "Delete this comment?",
  "comments.delete_success": "Comment deleted.",
  "comments.please_log_in": "Please log in to comment.",
  "comments.parentCommentId": "Parent Comment ID",
  "comments.topLevelCommentId": "Top Level Comment ID",
  "comments.body": "Body",
  "comments.rate_limit_error": "Please wait {details} seconds before commenting again.",

  "users.profile": "Profile",
  "users.complete_profile": "Complete your Profile",
  "users.edit_account": "Edit Account",
  "users.edit_success": "User “{name}” edited",
  "users.log_in": "Log In",
  "users.log_out": "Log Out",
  "users.bio": "Bio",
  "users.displayName": "Display Name",
  "users.email": "Email",
  "users.twitterUsername": "Twitter Username",
  "users.website": "Website",
  "users.groups": "Groups",
  "users.avatar": "Avatar",
  "users.notifications": "Notifications",
  "users.notifications_users": "New Users Notifications",
  "users.notifications_posts": "New Posts Notifications",
  "users.newsletter_subscribeToNewsletter": "Subscribe to newsletter",
  "users.admin": "Admin",
  "users.isAdmin": "Admin",
  "users.posts": "Posts",
  "users.please_log_in": "Please log in",
  "users.cannot_post": "Sorry, you do not have permission to post at this time",
  "users.cannot_comment": "Sorry, you do not have permission to comment at this time",
  "users.subscribe": "Subscribe to this user's posts",
  "users.unsubscribe": "Unsubscribe to this user's posts",
  "users.subscribed": "You have subscribed to “{name}” posts.",
  "users.unsubscribed": "You have unsubscribed from “{name}” posts.",
  "users.subscribers": "Subscribers",
  "users.delete": "Delete user",
  "users.delete_confirm": "Delete this user?",

  "categories": "Categories",
  "categories.all": "All Categories",
  "categories.edit": "Edit Category",
  "categories.edit_success": "Category “{name}” edited.",
  "categories.new": "New Category",
  "categories.new_success": "Category “{name}” created.",
  "categories.delete": "Delete Category",
  "categories.name": "Name",
  "categories.description": "Description",
  "categories.order": "Order",
  "categories.slug": "Slug",
  "categories.image": "Image",
  "categories.parentId": "Parent ID",
  "categories.subscribe": "Subscribe to this category's posts",
  "categories.unsubscribe": "Unsubscribe to this category's posts",
  "categories.subscribed": "You have subscribed to “{name}” posts.",
  "categories.unsubscribed": "You have unsubscribed from “{name}” posts.",
  "categories.subscribed_categories" : "Categories subscribed to",
  "categories.delete_confirm": "Delete category “{title}”?",
  "categories.delete_success": "Category “{name}” deleted.",

  "settings": "Settings",
  "settings.json_message": "Note: settings already provided in your <code>settings.json</code> file will be disabled.",
  "settings.edit": "Edit Settings",
  "settings.edited": "Settings edited (please reload).",
  "settings.title": "Title",
  "settings.siteUrl": "Site URL",
  "settings.tagline": "Tagline",
  "settings.description": "Description",
  "settings.siteImage": "Site Image",
  "settings.defaultEmail": "Default Email",
  "settings.mailUrl": "Mail URL",
  "settings.scoreUpdate": "Score Update",
  "settings.postInterval": "Post Interval",
  "settings.RSSLinksPointTo": "RSS Links Point To",
  "settings.commentInterval": "Comment Interval",
  "settings.maxPostsPerDay": "Max Posts Per Day",
  "settings.startInvitesCount": "Start Invites Count",
  "settings.postsPerPage": "Posts Per Page",
  "settings.logoUrl": "Logo URL",
  "settings.logoHeight": "Logo Height",
  "settings.logoWidth": "Logo Width",
  "settings.faviconUrl": "Favicon URL",
  "settings.twitterAccount": "Twitter Account",
  "settings.facebookPage": "Facebook Page",
  "settings.googleAnalyticsId": "Google Analytics ID",
  "settings.locale": "Locale",
  "settings.requireViewInvite": "Require View Invite",
  "settings.requirePostInvite": "Require Post Invite",
  "settings.requirePostsApproval": "Require Posts Approval",
  "settings.scoreUpdateInterval": "Score Update Interval",

  "app.loading": "Loading…",
  "app.404": "Sorry, we couldn't find what you were looking for.",
  "app.powered_by": "Powered by Telescope",
  "app.or": "Or",
  "app.noPermission": "Sorry, you do not have the permission to do this at this time.",

  "newsletter": "Newsletter",
  "newsletter.subscribe": "Subscribe",
  "newsletter.unsubscribe": "Unsubscribe",
  "newsletter.subscribe_prompt": "Subscribe to the newsletter",
  "newsletter.email": "Your email",
  "newsletter.success_message": "Thanks for subscribing!",
  "newsletter.subscription_updated": "Newsletter subscription updated.",

  "admin": "Admin",
  "notifications": "Notifications",
});
