import Lottie from "lottie-react";
import smoke from "./smoke.json";

const SmokeLoading = () => (
  <Lottie
    animationData={smoke}
    loop={false}
    autoplay={true}
    style={{
      display: "block",
      position: "absolute",
      minHeight: "100%",
      width: "100%",
      height: "100vh",
      margin: "0 0",
      padding: "0 0",
      left: "0",
    }}
  />
);

export default SmokeLoading;
