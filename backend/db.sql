create table users(id integer primary key, email text, name text);

create unique index unique_emails on users(email);
