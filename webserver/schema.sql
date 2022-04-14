CREATE TABLE NFTs (
    token_id INT,
    contract_address varchar(100),
    owner varchar(100),
    name varchar(100),
    description varchar(500),
    image_link varchar(200),
    price FLOAT,
    room_number INT,
    trait1_id INT,
    trait2_id INT,
    PRIMARY KEY(token_id)
);

CREATE TABLE Contracts (
    contract_address varchar(100),
    contract_description varchar(500),
    title varchar(100),
    category varchar(100),
    PRIMARY KEY(contract_address)
);

CREATE TABLE Trait1 (
    trait1_id INT AUTO_INCREMENT,
    name varchar(100),
    count INT,
    PRIMARY KEY(trait1_id)
);

CREATE TABLE Trait2 (
    trait2_id INT AUTO_INCREMENT,
    name varchar(100),
    count INT,
    PRIMARY KEY(trait2_id)
);

CREATE TABLE Trade_Histories (
    history_id INT AUTO_INCREMENT,
    token_id INT,
    price FLOAT,
    from_address varchar(100),
    to_address varchar(100),
    transaction_hash varchar(100),
    block_height INT,
    PRIMARY KEY(history_id)
);


ALTER TABLE NFTs ADD FOREIGN KEY (trait1_id) REFERENCES Trait1 (trait1_id);

ALTER TABLE NFTs ADD FOREIGN KEY (trait2_id) REFERENCES Trait2 (trait2_id);

ALTER TABLE Trade_Histories ADD FOREIGN KEY (token_id) REFERENCES NFTs (token_id);

ALTER TABLE NFTs ADD FOREIGN KEY (contract_address) REFERENCES Contracts (contract_address);



/*  Execute this file from the command line by typing:
 *  (before this, please create the 'nfts' database)
 *    mysql -u root -p < /PATH/TO/YOUR/schema.sql -D nfts
 *  to create the database and the tables.*/