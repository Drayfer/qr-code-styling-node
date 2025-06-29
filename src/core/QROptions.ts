import qrTypes from "../constants/qrTypes";
import drawTypes from "../constants/drawTypes";
import errorCorrectionLevels from "../constants/errorCorrectionLevels";
import { DotType, Options, TypeNumber, ErrorCorrectionLevel, Mode, DrawType, Gradient } from "../types";

export interface RequiredOptions extends Options {
  type: DrawType;
  width: number;
  height: number;
  margin: number;
  data: string;
  qrOptions: {
    typeNumber: TypeNumber;
    mode?: Mode;
    errorCorrectionLevel: ErrorCorrectionLevel;
  };
  imageOptions: {
    saveAsBlob: boolean;
    hideBackgroundDots: boolean;
    imageSize: number;
    crossOrigin?: string;
    margin: number;
  };
  dotsOptions: {
    type: DotType;
    color: string;
    gradient?: Gradient;
  };
  backgroundOptions: {
    color: string;
    gradient?: Gradient;
  };
  maskOptions: {
    drawMask: boolean;
    color?: string;
    image?: string;
    imageSize?: number;
    cornersMask?: boolean;
  };
}

const defaultOptions: RequiredOptions = {
  type: drawTypes.canvas,
  width: 300,
  height: 300,
  data: "",
  margin: 0,
  qrOptions: {
    typeNumber: qrTypes[0],
    mode: undefined,
    errorCorrectionLevel: errorCorrectionLevels.Q
  },
  imageOptions: {
    saveAsBlob: false,
    hideBackgroundDots: true,
    imageSize: 0.4,
    crossOrigin: undefined,
    margin: 0
  },
  dotsOptions: {
    type: "square",
    color: "#000"
  },
  backgroundOptions: {
    color: "#fff"
  },
  maskOptions: {
    drawMask: false,
    imageSize: 0.8,
    cornersMask: true
  }
};

export default defaultOptions;
