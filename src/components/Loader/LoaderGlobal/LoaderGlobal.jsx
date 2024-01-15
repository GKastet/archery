import { RotatingLines } from "react-loader-spinner";
import { LoaderBox } from "./LoaderGlobalStyled";

const LoaderGlobal = () => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.9"
        width="200"
        visible={true}
      />
    </LoaderBox>
  );
};

export default LoaderGlobal;
