DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS keywords;
DROP TABLE IF EXISTS meme_page;



-- CREATE TABLE meme_page (
--     id_meme_page SERIAL PRIMARY KEY NOT NULL,
--     nome varchar(100) NOT NULL,
--     descricao text NULL,
--     foto_video text NULL,
--     categorias  INT,
--     keywords INT
-- );

-- CREATE TABLE categorias (
--     id_categorias SERIAL PRIMARY KEY NOT NULL,
--     nome_categoria VARCHAR(50),
-- );

-- CREATE TABLE keywords (
--     id SERIAL PRIMARY KEY NOT NULL,
--     id_meme_page INT NOT NULL REFERENCES meme_page ON UPDATE CASCADE ON DELETE CASCADE,
--     keywords VARCHAR(120)
-- );


-- DROP TABLE IF EXISTS relacionamento;
-- CREATE TABLE relacionamento (
-- cod_rel SERIAL NOT NULL PRIMARY KEY ,
-- id_meme_page INTEGER NOT NULL REFERENCES categorias ON UPDATE CASCADE ON DELETE CASCADE,
-- id_keywords INTEGER NOT NULL REFERENCES meme_page ON UPDATE CASCADE ON DELETE CASCADE,
-- );

-- SELECT  * id as id_key FROM BASE1.KEYWORDS WHERE keywords = "$VARIAVEL" INNER JOIN keywords.id_meme_page = id_key ON meme_page.id = id_key INNER JOIN POST


-- | SELECT * FROM categorias WHERE nome_categoria contains "$VARIAVEL" LIMIT 1000 ORDER BY DATE