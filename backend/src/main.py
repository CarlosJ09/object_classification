from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .services.classification import ObjectClassificationService
from .models.classification import ClassificationRequest

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/detect-objects")
async def generate(request: ClassificationRequest):
    url = request.url
    service = ObjectClassificationService()
    response = service.classificate_image(url)

    return {"response": response}
