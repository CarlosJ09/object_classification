from fastapi import FastAPI
from .services.classification import ObjectClassificationService
from .models.classification import ClassificationRequest

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/ask")
async def generate(request: ClassificationRequest):
    url = request.url
    response = ObjectClassificationService.classificate_image(url)
    
    return {"response": response}
