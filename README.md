# Ind_Performance

Performance Test Instructions:

Objective:
The performance test aims to evaluate your ability to retrieve, sort, and select backend courses data according to specified requirements.

Steps:
Download and install the MongoDB Database tool: https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.9.4.zip

Follow the installation instructions for the MongoDB Database tool: https://www.mongodb.com/docs/database-tools/installation/installation-windows/

Create a backend API endpoint for the provided course data. (use mongoimport --db mongo-test --collection courses --file courses.json --jsonArray) to import the included data

-Retrieve all published backend courses and sort them alphabetically by their names.
-Select and extract the name and specialization of each course.
-Retrieve all published BSIS (Bachelor of Science in Information Systems) and BSIT (Bachelor of Science in Information Technology) courses from the curriculum.
-Perform data validation at each step to ensure the accuracy and integrity of the retrieved information.
-Document the test procedure, including any challenges faced and solutions implemented.
