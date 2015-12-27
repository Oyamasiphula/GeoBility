CREATE TABLE IF NOT EXISTS `Taxi_associations` (
    `association_id` int not null auto_increment,
    `taxiAssociation_name` varchar(100),
    `rank_id` int(200) DEFAULT NULL,
    primary key(`association_id`)    
);

ALTER TABLE Taxi_associations
ADD FOREIGN KEY (`rank_id`) REFERENCES Ranks(`rank_id`);
-- Table structure for table `applicants_td`

CREATE TABLE IF NOT EXISTS `Ranks` (
 `rank_id` int not null auto_increment,
  `Rank_name` varchar(100),
  primary key(`rank_id`)
);

CREATE TABLE IF NOT EXISTS `Issues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `reg_number` varchar(100) NOT NULL,
  `speed` decimal(20,0) DEFAULT NULL,
  `association_id` int(100) DEFAULT NULL,
  `rank_id` int(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE Issues
ADD FOREIGN KEY (`association_id`) REFERENCES Taxi_associations(`association_id`),
ADD FOREIGN KEY (`rank_id`) REFERENCES Ranks(`rank_id`);


INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('Uncedo');
INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('CATA');
INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('SANTAGO');
INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('PENINSULA TAXI ');
INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('WESTERN CAPE METERED');
INSERT INTO Taxi_associations (taxiAssociation_name) VALUES ('GARDEN ROUTE');

INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);
INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);
INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);
INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);
INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);
INSERT INTO Issues (description,date,association_id,reg_number,rank_id,speed) VALUES ('accident', 2015-11-20,2, 'CJ 65786756658', 4, 0.23);


-- INSERT INTO Ranks (Rank_name) VALUES ('Langa');
-- INSERT INTO Ranks (Rank_name) VALUES ('Khayelitsha');
-- INSERT INTO Ranks (Rank_name) VALUES ('Cape Town');
-- INSERT INTO Ranks (Rank_name) VALUES ('Gugulethu ');
-- INSERT INTO Ranks (Rank_name) VALUES ('BELLVILLE');
-- INSERT INTO Ranks (Rank_name) VALUES ('DUNOON');
