# <img src="./static/images/warbler-logo.png" alt="drawing" width="40"/> Warbler

Warbler is a Twitter clone and utilizes Flask, PostgreSQL, and SQLAlchemy, on the back-end and Jinja templating, jQuery, and Axios on the front-end. I built this application off of a semi-functioning clone.

Key components I worked on include:
* fixing bugs in the user profile, logout, and homepage routes
* adding profile editing functionality
* adding the ability to like a Warble
* extensive testing, including model and view unit tests

You can view a deployed version [here](https://clairecasey-warbler.herokuapp.com/).

## Installation and Setup Instructions

1. Clone this repository
2. Create a virtual environment
    * `python3 -m venv venv`
    * `source venv/bin/activate`
    * `pip3 install -r requirements.txt`
3. Create the database
    * `createdb warbler`
    * `python3 seed.py`
4. Start the server
    * `flask run`

### Tests:
1. Create the database
    * `createdb warbler-test`
2. Run tests:
    * To run all: `python3 -m unittest`
    * To run specific file: `python3 -m unittest test_file_to_run.py`

## Technologies Used

* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Web Development
  Framework
* [Flask-WTForms](https://flask-wtf.readthedocs.io/en/stable/) - integration of
  Flask and WTForms library, including CSRF protection
* [PostgreSQL Database](https://www.postgresql.org/) - SQL database management
  system
* [SQLAlchemy](https://www.sqlalchemy.org/) - database ORM
* [Jinja](https://palletsprojects.com/p/jinja/) - templating engine 

## Authors

My partner for this project was [Tracy Jiang](https://github.com/jiangtracy). 