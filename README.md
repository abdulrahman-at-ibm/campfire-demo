# Rails 6 Starter

Rails 6 starter with Docker Compose.

## Ruby version
3.0.1

## System dependencies
* Ruby
* Docker

## Configuration

### .env
Add a .env file. See `.env.example`.

### Update app name
Change the name of the app and its directory. Use the following command to find the lines:
```sh
grep -R "rails_6_starter" -n .
```

### Create the application
Run:
```sh
docker compose run --rm --no-deps web rails new . --force --no-deps --database=postgresql
```

### Build the containers
Run:
```sh
docker compose build
```

### Set up the database.
Replace the contents of `config/database.yml` with the following:
```yml
default: &default
  adapter: postgresql
  encoding: unicode
  host: db
  username: <%= ENV['POSTGRES_USER'] %>
  password: <%= ENV['POSTGRES_PASSWORD'] %>
	pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
development:
  <<: *default
  database: rails_6_starter_development
test:
  <<: *default
  database: rails_6_starter_test
```

### Create the database
Run:
```sh
docker compose run --rm web bash -c "rails db:create && rails db:migrate"
```

### Start the app
Run:
```sh
docker compose up
```

## How to run the test suite
https://github.com/rspec/rspec-rails

## Services (job queues, cache servers, search engines, etc.)
todo

## Deployment instructions

### Heroku

Run the following commands for Heroku:
```sh
heroku login
heroku apps:create <app-name>
git push heroku master
heroku run rails db:migrate
```

Sources:
1. https://blog.konnor.site/rails/getting-started-with-rails-6/#i-know-what-im-doing