export const posts = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
export const feed = i => i.getFilteredByGlob("./src/content/pubs/*.md");//.reverse();

export const curated = i => i.getFilteredByGlob("./src/content/pub_id/*.md");