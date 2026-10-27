CREATE DATABASE IF NOT EXISTS db_retrogames;

USE db_retrogames;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    desenvolvedora VARCHAR(100) NOT NULL,
    imagem_url VARCHAR(500) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Super Mario World',
    'SNES',
    'Nintendo',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IX5cYBqPhxztMenzc3On4P2Wi-rPHKaTsLF8jzHVnv9caoXhPqmyxPKpFIONrupySQXQzo8FGJ442cio2yqkqWM2lk_BV7Vf_x0S4A&s=10',
    99.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Sonic the Hedgehog',
    'Mega Drive',
    'Sega',
    'https://i.ytimg.com/vi/pZ8s6vriFMw/maxresdefault.jpg',
    79.90
);

INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES (
    'Crash Bandicoot',
    'PS1',
    'Naughty Dog',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBF5dkkVrSHMlyW978DeYOqGZ4hG5WCi5ILs1G_3FlO5zbbA8x41JtLqBXZ8H-ysmiTq9B6DRYdQNCCnFI0VRybhk-OMlI81BKb4GolTs&s=10',
    89.90
);