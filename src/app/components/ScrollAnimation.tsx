// components/ScrollAnimation.tsx
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  const props = useSpring({
    opacity: scrollY > 200 ? 0 : 1,
    transform: scrollY > 200 ? "translateY(-50px)" : "translateY(0)",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div style={props}>
      <h1>Scroll to see the animation!</h1>
    </animated.div>
  );
};

export default ScrollAnimation;
