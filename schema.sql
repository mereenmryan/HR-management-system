DROP TABLE IF EXISTS movie;

CREATE TABLE IF NOT EXISTS movie (
    id SERIAL PRIMARY KEY,
    title varchar(255),
    overview varchar(255),
    poster_path varchar(255),
)