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
declare const defaultOptions: RequiredOptions;
export default defaultOptions;
