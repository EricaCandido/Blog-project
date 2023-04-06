import { postsJson } from "@/pages/api/posts";
import { newPostsJson } from "@/pages/api/newPosts";

export function getAllPosts() {
  return postsJson[0];
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
  getAllPosts().map((p) => {
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
  let post = null;
  getAllPosts().map((p) => {
    //sembrerebbe non entrare mai in questa condizione e non ne capisco il motivo,
    //se è qualcosa di immediato, se puoi e hai tempo potresti scrivermelo su slack?
    //(Non ti ho contattato perché volevo risolverlo da sola e si è fatto tardi)
    if (p.id === id) {
      post = p;
      return;
    }
  });
  return post;
}
