FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD tang3456
COPY db_creation_script.sql /docker-entrypoint-initdb.d/
COPY tables_db_script.sql /docker-entrypoint-initdb.d/