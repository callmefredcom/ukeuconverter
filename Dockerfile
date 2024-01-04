FROM python:3.10.8

WORKDIR /app

COPY . ./

RUN pip install flask gunicorn

CMD gunicorn --bind :$PORT app:app