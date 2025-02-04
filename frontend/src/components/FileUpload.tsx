import { useState, ChangeEvent } from "react";

type FileUploadProps = {
  selectedImage: File | null;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUrlChange: (event: ChangeEvent<HTMLInputElement>) => void;
  detectObjects: () => void;
};

function FileUpload({
  selectedImage,
  handleFileChange,
  handleUrlChange,
  detectObjects,
}: FileUploadProps) {
  const [inputMethod, setInputMethod] = useState<"file" | "url">("file");

  return (
    <div className="w-full flex flex-col items-center gap-6 p-4">
      <div className="flex gap-4">
        <button
          className={`btn ${inputMethod === "file" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setInputMethod("file")}
        >
          Upload File
        </button>
        <button
          className={`btn ${inputMethod === "url" ? "btn-primary" : "btn-outline"}`}
          onClick={() => setInputMethod("url")}
        >
          Enter URL
        </button>
      </div>

      {inputMethod === "file" && (
        <div className="w-full">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              {selectedImage ? selectedImage.name : "Pick a file"}
            </legend>
            <input
              type="file"
              className="w-full file-input file-input-lg file-input-primary"
              onChange={handleFileChange}
              accept="image/*"
            />
            <label className="fieldset-label">
              {selectedImage
                ? `Size: ${(selectedImage.size * 0.001).toFixed(2)} KB`
                : "Max size 24MB"}
            </label>
          </fieldset>
        </div>
      )}

      {inputMethod === "url" && (
        <input
          type="text"
          placeholder="Enter image URL"
          className="input input-bordered input-lg w-full"
          onChange={handleUrlChange}
        />
      )}

      <button className="w-full btn btn-primary mt-4" onClick={detectObjects}>
        Classify
      </button>
    </div>
  );
}

export default FileUpload;
