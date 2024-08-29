FROM python:3.12-slim

WORKDIR /app

COPY src/requirements.txt src/

RUN pip install --no-cache-dir --upgrade -r src/requirements.txt

COPY . .

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]