type DetectedObjectsProps = {
  objects: string;
  imageUrl: string;
  assignDetectedObjects: (data: string) => void;
};

function DetectedObjects({ objects, imageUrl, assignDetectedObjects }: DetectedObjectsProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={imageUrl} alt="UploadedImage" className="w-80" />

      <div className="flex flex-col justify-center gap-2 mb-4">
        <p className="text-lg font-semibold">Detected objects:</p>
        <p className="text-lg">{objects}</p>
      </div>

      <button className="w-full btn btn-primary" onClick={() => assignDetectedObjects("")}>
        Try again
      </button>
    </div>
  );
}

export default DetectedObjects;
