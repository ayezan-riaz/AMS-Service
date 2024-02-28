/// <reference types="multer" />
export declare const multerConfig: {
    destination: string;
};
export declare function multerOptions(userFolder: string): {
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: any, cb: any) => void;
    storage: import("multer").StorageEngine;
};
