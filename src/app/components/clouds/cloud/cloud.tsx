export default function Cloud({ style }: { style?: React.CSSProperties }) {
  return (
    <img
      src="/cloud.svg"
      alt="Cloud"
      style={style}
      width={80}
      height={40}
      draggable={false}
    />
  );
}