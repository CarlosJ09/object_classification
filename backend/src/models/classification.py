from pydantic import BaseModel

class ClassificationRequest(BaseModel):
    url: str