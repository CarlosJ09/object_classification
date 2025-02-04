import { useState, ChangeEvent } from "react";
import WelcomeComponent from "@/components/WelcomeComponent";
import FileUpload from "@/components/FileUpload";
import DetectedObjects from "./components/DetectedObjects";

function App() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [detectedObjects, setDetectedObjects] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedImage(file);
  };

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const detectObjects = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/detect-objects`, {
        method: "POST",
        body: JSON.stringify({ url: imageUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.detail) {
        alert(data.detail);
        return;
      }

      setDetectedObjects(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl h-screen flex flex-col justify-center items-center m-auto gap-12 p-4">
      <WelcomeComponent />

      <FileUpload
        selectedImage={selectedImage}
        handleFileChange={handleFileChange}
        handleUrlChange={handleUrlChange}
        detectObjects={detectObjects}
      />

      <DetectedObjects objects={detectedObjects} />
    </div>
  );
}

export default App;
