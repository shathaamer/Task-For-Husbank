CREATE TABLE Kunde
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    personnr VARCHAR(255) NOT NULL,
    navn VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    laanebelop INTEGER NOT NULL,
    grunn VARCHAR(255) NOT NULL,
    mobil VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);