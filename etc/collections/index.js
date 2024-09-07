export const posts = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
export const feed = i => i.getFilteredByGlob("./src/content/pub_type/*.md");//.reverse();

export const conf_id = i => i.getFilteredByGlob("./src/content/conf_id/*.md").reverse();
export const preprint_id = i => i.getFilteredByGlob("./src/content/preprint_id/*.md").reverse();
export const publication_id = i => i.getFilteredByGlob("./src/content/publication_id/*.md").reverse();