FROM python:3.10-slim-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY flask_app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY flask_app/ .

EXPOSE 8000

CMD exec gunicorn app:app --bind 0.0.0.0:$PORT --workers 2 --timeout 120
