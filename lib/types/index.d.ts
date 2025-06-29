/// <reference types="node" />
export interface UnknownObject {
    [key: string]: any;
}
export declare type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded" | "rhombus" | "small-square" | "small-dots" | "random-dots" | "dots-horizontal" | "dots-vertical" | "rhombus-vertical" | "square-stripe" | "rounded-stripe" | "random";
export declare type CornerDotType = "dot" | "square" | "extra-rounded" | "one-classy" | "classy" | "one-classy-rotate" | "classy-reflect" | "rhombus" | "rhombus-extra-rounded" | "star" | "gear";
export declare type CornerSquareType = "dot" | "square" | "extra-rounded" | "one-classy" | "classy" | "one-classy-rotate" | "dot-one-classy" | "middle-rounded" | "gear";
export declare type Extension = "svg" | "png" | "jpeg" | "webp";
export declare type GradientType = "radial" | "linear";
export declare type DrawType = "canvas" | "svg";
export interface Canvas extends HTMLCanvasElement {
    toBuffer?: (type: string) => Buffer;
    createCanvas?: (width: number, height: number) => Canvas;
    loadImage?: (image: string) => Promise<HTMLImageElement>;
}
export interface Window {
    Image: typeof HTMLImageElement;
    XMLSerializer: typeof XMLSerializer;
    document: Document;
}
interface JsDomOptions {
    resources: string;
}
export declare class JSDom {
    window: Window;
    _options: JsDomOptions;
    _input: string;
    constructor(input: string, options: JsDomOptions);
}
export declare type Gradient = {
    type: GradientType;
    rotation?: number;
    colorStops: {
        offset: number;
        color: string;
    }[];
};
export interface DotTypes {
    [key: string]: DotType;
}
export interface GradientTypes {
    [key: string]: GradientType;
}
export interface CornerDotTypes {
    [key: string]: CornerDotType;
}
export interface CornerSquareTypes {
    [key: string]: CornerSquareType;
}
export interface DrawTypes {
    [key: string]: DrawType;
}
export declare type TypeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export declare type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export declare type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface QRCode {
    addData(data: string, mode?: Mode): void;
    make(): void;
    getModuleCount(): number;
    isDark(row: number, col: number): boolean;
    createImgTag(cellSize?: number, margin?: number): string;
    createSvgTag(cellSize?: number, margin?: number): string;
    createSvgTag(opts?: {
        cellSize?: number;
        margin?: number;
        scalable?: boolean;
    }): string;
    createDataURL(cellSize?: number, margin?: number): string;
    createTableTag(cellSize?: number, margin?: number): string;
    createASCII(cellSize?: number, margin?: number): string;
    renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}
export declare type Options = {
    type?: DrawType;
    width?: number;
    height?: number;
    margin?: number;
    data?: string;
    image?: string;
    nodeCanvas?: Canvas;
    jsdom?: typeof JSDom;
    qrOptions?: {
        typeNumber?: TypeNumber;
        mode?: Mode;
        errorCorrectionLevel?: ErrorCorrectionLevel;
    };
    imageOptions?: {
        saveAsBlob?: boolean;
        hideBackgroundDots?: boolean;
        imageSize?: number;
        crossOrigin?: string;
        margin?: number;
    };
    dotsOptions?: {
        type?: DotType;
        color?: string;
        gradient?: Gradient;
    };
    cornersSquareOptions?: {
        type?: CornerSquareType;
        color?: string;
        gradient?: Gradient;
    };
    cornersDotOptions?: {
        type?: CornerDotType;
        color?: string;
        gradient?: Gradient;
    };
    backgroundOptions?: {
        color?: string;
        gradient?: Gradient;
    };
    maskOptions?: {
        drawMask?: boolean;
        color?: string;
        image?: string;
        imageSize?: number;
        cornersMask?: boolean;
    };
};
export declare type FilterFunction = (i: number, j: number) => boolean;
export declare type DownloadOptions = {
    name?: string;
    extension?: Extension;
};
export declare type DrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    getNeighbor?: GetNeighbor;
};
export declare type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
};
export declare type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    rotation?: number;
    draw: () => void;
};
export declare type DrawArgsCanvas = DrawArgs & {
    context: CanvasRenderingContext2D;
};
export declare type BasicFigureDrawArgsCanvas = BasicFigureDrawArgs & {
    context: CanvasRenderingContext2D;
};
export declare type RotateFigureArgsCanvas = RotateFigureArgs & {
    context: CanvasRenderingContext2D;
};
export declare type GetNeighbor = (x: number, y: number) => boolean;
export {};
