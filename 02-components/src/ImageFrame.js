
export default function ImageFrame(props) {
  return (
    <div className="image-frame" style={{
        borderColor: props.borderColor
    }}>
      <img src={props.image} />
    </div>
  );
}

