import { useEffect, useState } from "react";

export default function Observer() {
  const [img, setImg] = useState(true);

  const handleChange = () => {
    document.documentElement.classList.add("dark");
  };

  useEffect(() => {
    const Obs = new MutationObserver(() => {
      setImg((prev) => !prev);
    });

    Obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => Obs.disconnect();
  }, []);

  return (
    <div>
      <button onClick={handleChange}> Click! </button>
      <img src={img ? "img1.jpg" : "img2.jpg"} className="" />
    </div>
  );
}
