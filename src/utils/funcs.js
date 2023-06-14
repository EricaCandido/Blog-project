import { postsJson, checkedPost } from "@/pages/api/posts";
import { newPostsJson } from "@/pages/api/newPosts";

export function getAllPosts() {
  return postsJson;
}

export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map((p) => {
    slugs.push(`/blog/${p.slug}`);
  });

  return slugs;
}

export function getPostData(slug) {
  let post = null;
  checkedPost(postsJson).map((p) => {
    if (p.slug === slug) {
      post = p;
      return;
    }
  });
  return post;
}

//ESERCITAZIONE

export function getAllNewPosts() {
  return newPostsJson[0];
}

export function getAllIds() {
  let ids = [];
  getAllNewPosts().map((p) => {
    ids.push(`/event/${p.id}`);
  });

  return ids;
}

export function getNewPostData(id) {
  console.log(2);
  let post = null;
  checkedPost(postsJson).map((p) => {
    if (p.id === id) {
      post = p;
      return;
    }
  });
  console.log(post);
  return post;
}
