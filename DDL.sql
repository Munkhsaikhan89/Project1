
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  phone_number VARCHAR(255),
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

CREATE TABLE customer (
  customer_id INT PRIMARY KEY,
  lastname VARCHAR(255),
  firstname VARCHAR(255),
  address VARCHAR(255),
  phone_number VARCHAR(255)
);

CREATE TABLE Task (
  Task_id INT PRIMARY KEY,
  employee_id INT,
  name VARCHAR(255),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE Huseltuud (
  Task_id INT,
  customer_id INT,
  description VARCHAR(255),
  FOREIGN KEY (Task_id) REFERENCES Task(Task_id),
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
);

CREATE TABLE Log (
  log_id INT PRIMARY KEY,
  task_id INT,
  employee_id INT,
  explanation VARCHAR(255),
  FOREIGN KEY (task_id) REFERENCES Task(Task_id),
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

INSERT INTO employees (employee_id, phone_number, firstname, lastname) VALUES
(1, '123-456-7890', 'John', 'Doe'),
(2, '234-567-8901', 'Jane', 'Smith'),
(3, '345-678-9012', 'Michael', 'Johnson'),
(4, '456-789-0123', 'Emily', 'Brown'),
(5, '567-890-1234', 'David', 'Martinez'),
(6, '678-901-2345', 'Sarah', 'Jones'),
(7, '789-012-3456', 'Christopher', 'Williams'),
(8, '890-123-4567', 'Jessica', 'Garcia'),
(9, '901-234-5678', 'Matthew', 'Rodriguez'),
(10, '012-345-6789', 'Ashley', 'Lee'),
(11, '123-456-7890', 'Michael', 'Hernandez'),
(12, '234-567-8901', 'Amanda', 'Martinez'),
(13, '345-678-9012', 'James', 'Gonzalez'),
(14, '456-789-0123', 'Jennifer', 'Lopez'),
(15, '567-890-1234', 'Daniel', 'Perez'),
(16, '678-901-2345', 'Mary', 'Wilson'),
(17, '789-012-3456', 'Christopher', 'Anderson'),
(18, '890-123-4567', 'Patricia', 'Taylor'),
(19, '901-234-5678', 'Richard', 'Thomas'),
(20, '012-345-6789', 'Elizabeth', 'Moore');

INSERT INTO customer (customer_id, lastname, firstname, address, phone_number) VALUES
(1, 'Smith', 'John', '123 Main St', '111-222-3333'),
(2, 'Johnson', 'Sarah', '456 Elm St', '222-333-4444'),
(3, 'Williams', 'Michael', '789 Oak St', '333-444-5555'),
(4, 'Brown', 'Emily', '101 Pine St', '444-555-6666'),
(5, 'Garcia', 'David', '202 Maple St', '555-666-7777'),
(6, 'Martinez', 'Jessica', '303 Birch St', '666-777-8888'),
(7, 'Jones', 'Ashley', '404 Cedar St', '777-888-9999'),
(8, 'Anderson', 'James', '505 Walnut St', '888-999-0000'),
(9, 'Perez', 'Jennifer', '606 Willow St', '999-000-1111'),
(10, 'Rodriguez', 'Daniel', '707 Oakwood St', '000-111-2222'),
(11, 'Lee', 'Mary', '808 Elmwood St', '111-222-3333'),
(12, 'Hernandez', 'Christopher', '909 Pinecrest St', '222-333-4444'),
(13, 'Moore', 'Patricia', '1010 Cedarwood St', '333-444-5555'),
(14, 'Taylor', 'Richard', '1111 Birchwood St', '444-555-6666'),
(15, 'Thomas', 'Elizabeth', '1212 Willowwood St', '555-666-7777'),
(16, 'Wilson', 'Amanda', '1313 Maplewood St', '666-777-8888'),
(17, 'Lopez', 'Matthew', '1414 Pinehurst St', '777-888-9999'),
(18, 'Gonzalez', 'Christopher', '1515 Oakhurst St', '888-999-0000'),
(19, 'Martinez', 'Jessica', '1616 Birchhurst St', '999-000-1111'),
(20, 'Smith', 'David', '1717 Cedarhurst St', '000-111-2222');

INSERT INTO Task (Task_id, employee_id, name) VALUES
(1, 1, 'Task 1'),
(2, 2, 'Task 2'),
(3, 3, 'Task 3'),
(4, 4, 'Task 4'),
(5, 5, 'Task 5'),
(6, 6, 'Task 6'),
(7, 7, 'Task 7'),
(8, 8, 'Task 8'),
(9, 9, 'Task 9'),
(10, 10, 'Task 10'),
(11, 11, 'Task 11'),
(12, 12, 'Task 12'),
(13, 13, 'Task 13'),
(14, 14, 'Task 14'),
(15, 15, 'Task 15'),
(16, 16, 'Task 16'),
(17, 17, 'Task 17'),
(18, 18, 'Task 18'),
(19, 19, 'Task 19'),
(20, 20, 'Task 20');


INSERT INTO Huseltuud (Task_id, customer_id, description) VALUES
(1, 1, 'Description 1'),
(2, 2, 'Description 2'),
(3, 3, 'Description 3'),
(4, 4, 'Description 4'),
(5, 5, 'Description 5'),
(6, 6, 'Description 6'),
(7, 7, 'Description 7'),
(8, 8, 'Description 8'),
(9, 9, 'Description 9'),
(10, 10, 'Description 10'),
(11, 11, 'Description 11'),
(12, 12, 'Description 12'),
(13, 13, 'Description 13'),
(14, 14, 'Description 14'),
(15, 15, 'Description 15'),
(16, 16, 'Description 16'),
(17, 17, 'Description 17'),
(18, 18, 'Description 18'),
(19, 19, 'Description 19'),
(20, 20, 'Description 20');


INSERT INTO Log (log_id, task_id, employee_id, explanation) VALUES
(1, 1, 1, 'Explanation 1'),
(2, 2, 2, 'Explanation 2'),
(3, 3, 3, 'Explanation 3'),
(4, 4, 4, 'Explanation 4'),
(5, 5, 5, 'Explanation 5'),
(6, 6, 6, 'Explanation 6'),
(7, 7, 7, 'Explanation 7'),
(8, 8, 8, 'Explanation 8'),
(9, 9, 9, 'Explanation 9'),
(10, 10, 10, 'Explanation 10'),
(11, 11, 11, 'Explanation 11'),
(12, 12, 12, 'Explanation 12'),
(13, 13, 13, 'Explanation 13'),
(14, 14, 14, 'Explanation 14'),
(15, 15, 15, 'Explanation 15'),
(16, 16, 16, 'Explanation 16'),
(17, 17, 17, 'Explanation 17'),
(18, 18, 18, 'Explanation 18'),
(19, 19, 19, 'Explanation 19'),
(20, 20, 20, 'Explanation 20');


INSERT INTO Log (log_id, task_id, employee_id, explanation) VALUES
(21, 1, 1, 'Completed Task 1 on time'),
(22, 2, 2, 'Task 2 delayed due to unforeseen circumstances'),
(23, 3, 3, 'Completed Task 3 ahead of schedule'),
(24, 4, 4, 'Task 4 completed with minor issues'),
(25, 5, 5, 'Task 5 completed successfully'),
(26, 6, 6, 'Task 6 postponed due to client request'),
(27, 7, 7, 'Task 7 completed with exceptional results'),
(28, 8, 8, 'Task 8 completed according to specifications'),
(29, 9, 9, 'Task 9 rescheduled for next week'),
(30, 10, 10, 'Task 10 completed after initial challenges'),
(31, 11, 11, 'Task 11 completed with client feedback incorporated'),
(32, 12, 12, 'Task 12 pending further instructions'),
(33, 13, 13, 'Task 13 completed, awaiting client approval'),
(34, 14, 14, 'Task 14 delayed due to technical issues'),
(35, 15, 15, 'Task 15 completed ahead of deadline'),
(36, 16, 16, 'Task 16 rescheduled due to resource constraints'),
(37, 17, 17, 'Task 17 completed with minor adjustments'),
(38, 18, 18, 'Task 18 completed according to quality standards'),
(39, 19, 19, 'Task 19 postponed due to team availability'),
(40, 20, 20, 'Task 20 completed with client satisfaction');



INSERT INTO Log (log_id, task_id, employee_id, explanation) VALUES
(41, 1, 1, 'Completed Task 1 ahead of schedule'),
(42, 2, 2, 'Task 2 delayed due to unforeseen circumstances'),
(43, 3, 3, 'Task 3 completed successfully'),
(44, 4, 4, 'Task 4 completed with minor issues'),
(45, 5, 5, 'Task 5 completed according to specifications'),
(46, 6, 6, 'Task 6 postponed due to client request'),
(47, 7, 7, 'Task 7 completed with exceptional results'),
(48, 8, 8, 'Task 8 completed with client feedback incorporated'),
(49, 9, 9, 'Task 9 rescheduled for next week'),
(50, 10, 10, 'Task 10 completed ahead of deadline'),
(51, 11, 11, 'Task 11 completed after initial challenges'),
(52, 12, 12, 'Task 12 pending further instructions'),
(53, 13, 13, 'Task 13 completed, awaiting client approval'),
(54, 14, 14, 'Task 14 delayed due to technical issues'),
(55, 15, 15, 'Task 15 completed with minor adjustments'),
(56, 16, 16, 'Task 16 completed according to quality standards'),
(57, 17, 17, 'Task 17 postponed due to team availability'),
(58, 18, 18, 'Task 18 completed with client satisfaction'),
(59, 19, 19, 'Task 19 completed with exceptional results'),
(60, 20, 20, 'Task 20 rescheduled due to resource constraints');
