export default function Cloud({ style }: { style?: React.CSSProperties }) {
  return (
    <img
      src="/cloud.svg"
      alt="cloud graphic by amanda simonds"
      style={style}
      width={80}
      height={40}
      draggable={false}
    />
  );
}