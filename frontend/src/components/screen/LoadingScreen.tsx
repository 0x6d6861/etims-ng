// @ts-ignore
import { Ripple } from "react-preloaders";
function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center content-center items-center">
      <Ripple animation="slide-down" />
      <p>Loading..</p>
    </div>
  );
}

export default LoadingScreen;
