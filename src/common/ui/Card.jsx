export default function Card(props) {
  const {className, hoverEffect, ...other} = props;
  return (
    <div
      className={`bg-white rounded-lg border border-gray-border shadow cursor-auto p-[24px] ${
        className || ''
      }`}
      {...other}
    />
  );
}
