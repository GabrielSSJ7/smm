SELECT DISTINCT post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, 
count(up) as upvote, count(down) as downvote FROM post_meme_page 
full JOIN meme_page ON post_meme_page.id_meme_page = meme_page.id 
full JOIN keywords_post_meme_page ON post_meme_page.id = keywords_post_meme_page.id_post
full JOIN vote_meme_page ON post_meme_page.id = vote_meme_page.id_post 
WHERE keywords_post_meme_page.keyword ILIKE 'a%' GROUP BY post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword;

INSERT INTO vote_meme_page (id_user, id_post, up, down ) values (1, 1, 1, null);

SELECT DISTINCT post_user_page.titulo, post_user_page.descricao, post_user_page.midia, 
count(up) as upvote, count(down) as downvote FROM post_user_page 
full JOIN user_page ON post_user_page.id_user_page = user_page.id 
full JOIN keywords_post_user_page ON post_user_page.id = keywords_post_user_page.id_post
full JOIN vote_user_page ON post_user_page.id = vote_user_page.id_post 
WHERE keywords_post_user_page.keyword ILIKE 'r%' GROUP BY post_user_page.titulo, post_user_page.descricao, post_user_page.midia, keywords_post_user_page.keyword;

INSERT INTO vote_user_page (id_user, id_post, up, down ) values (1, 1, 1, null);
UPDATE vote_user_page SET up = null, down = 1;

SELECT DISTINCT post_user.titulo, post_user.descricao, post_user.midia, 
count(up) as upvote, count(down) as downvote FROM post_user 
full JOIN usuario ON post_user.id_criador = usuario.id 
full JOIN keywords_post_user ON post_user.id = keywords_post_user.id_post
full JOIN vote_user ON post_user.id = vote_user.id_post 
WHERE keywords_post_user.keyword ILIKE 'r%' GROUP BY post_user.titulo, post_user.descricao, post_user.midia, keywords_post_user.keyword;


SELECT titulo, keyword, up, count(up) as upvote FROM post 
 JOIN post_rel_user_page ON  post.id = post_rel_user_page.id_post 
 JOIN post_rel_keywords ON post_rel_user_page.id_post = post_rel_keywords.id_post 
 JOIN keywords ON post_rel_keywords.id_keywords = keywords.id 
 JOIN vote ON post.id = vote.id_post 
WHERE keywords.keyword ILIKE 'Ro%' GROUP BY titulo, keyword, up