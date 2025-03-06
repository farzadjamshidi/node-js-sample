drop table if exists account;
drop table if exists post;
drop table if exists comment;

create table account (
    id serial primary key,
    name text not null,
    lastname text not null,
    email text not null,
    password text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

create table post (
    id serial primary key,
    content text not null,
    user_id int not null references account(id),
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

create table comment (
    id serial primary key,
    content text not null,
    post_id int not null references post(id),
    created_at timestamptz not null default now(),
    updated_at timestamptz
);

insert into account(name, lastname, email, password) values('user 1', 'lastname 1', 'sara@a.com', '123');
insert into account(name, lastname, email, password) values('user 2', 'lastname 2', 'bob@b.com', '123');

insert into post(content, user_id) values('This is the first post', 1);
insert into post(content, user_id) values('This is the second post', 2);

insert into comment(content, post_id) values('This is the first comment', 1);
insert into comment(content, post_id) values('This is the second comment', 2);