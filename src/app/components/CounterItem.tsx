"use client";

interface CounterItemProps {
  count: number;
  text: string | JSX.Element;
}

export default function CounterItem({
  count,
  text,
}: CounterItemProps): JSX.Element {
  return (
    <>
      <p className="counter start">{count}</p>
      <h4>{text}</h4>
    </>
  );
}
