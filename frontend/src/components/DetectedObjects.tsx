type DetectedObjectsProps = {
  objects: string;
};

function DetectedObjects({ objects }: DetectedObjectsProps) {
  return <div>{objects}</div>;
}

export default DetectedObjects;
