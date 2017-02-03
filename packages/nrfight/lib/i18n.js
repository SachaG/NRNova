/*
  Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/nova:core';

addStrings('fr', {
  "posts.videoId": "ID Vidéo",
  "posts.videoUrl": "URL Vidéo",
  "posts.add_to_likes": "Ajouter aux favoris",
  "newsletter.subscribe_prompt": "Inscrivez-vous a notre newsletter et recevez des nouvelles vidéos chaque semaine."
});