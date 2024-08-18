export default function CounterItem({ count, text }) {
  return (
    <>
      <p className="counter start" data-to={count} data-speed="2000">
        0
      </p>
      <h4>{text}</h4>
    </>
  );
}
