import { RequiredOptions } from "./QROptions";
import { QRCode, Gradient, FilterFunction, Canvas } from "../types";
export default class QRCanvas {
    _canvas: Canvas;
    _options: RequiredOptions;
    _qr?: QRCode;
    _image?: HTMLImageElement;
    _backgroundImage?: HTMLImageElement;
    constructor(options: RequiredOptions);
    get context(): CanvasRenderingContext2D | null;
    get width(): number;
    get height(): number;
    getCanvas(): Canvas;
    clear(): void;
    drawQR(qr: QRCode): Promise<void>;
    drawBackground(): void;
    drawDots(filter?: FilterFunction): void;
    drawCorners(filter?: FilterFunction): void;
    loadImage(): Promise<void>;
    loadBackgroundImage(): Promise<void>;
    drawImage({ width, height, count, dotSize }: {
        width: number;
        height: number;
        count: number;
        dotSize: number;
    }): void;
    drawBackgroundImageCanvas({ count, dotSize }: {
        count: number;
        dotSize: number;
    }): void;
    _createGradient({ context, options, additionalRotation, x, y, size }: {
        context: CanvasRenderingContext2D;
        options: Gradient;
        additionalRotation: number;
        x: number;
        y: number;
        size: number;
    }): CanvasGradient;
}
