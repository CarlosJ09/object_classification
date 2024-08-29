from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image
import requests

class ObjectClassificationService:
    def classificate_image(self, url):
        image = Image.open(requests.get(url, stream=True).raw)

        processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
        model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

        inputs = processor(images=image, return_tensors="pt")
        outputs = model(**inputs)
        logits = outputs.logits
        
        predicted_class_idx = logits.argmax(-1).item()

        print("Predicted class:", model.config.id2label[predicted_class_idx])
        
        return model.config.id2label[predicted_class_idx]
