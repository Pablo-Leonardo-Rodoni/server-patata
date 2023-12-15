import Lottie from "lottie-react";
import smoke from "./smoke.json";

const SmokeLoading = () => (
  <Lottie
    animationData={smoke}
    loop={false}
    autoplay={true}
    style={{
      width: "100vw",
      height: "100vh",
      margin: "0 0",
      padding: "0",
    }}
  />
);

export default SmokeLoading;
