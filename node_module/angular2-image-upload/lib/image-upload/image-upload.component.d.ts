import { EventEmitter, OnInit } from '@angular/core';
import { Header, ImageService } from '../image.service';
export declare class FileHolder {
    src: string;
    file: File;
    serverResponse: {
        status: number;
        response: any;
    };
    pending: boolean;
    constructor(src: string, file: File);
}
export declare class ImageUploadComponent implements OnInit {
    private imageService;
    max: number;
    url: string;
    headers: Header[];
    preview: boolean;
    maxFileSize: number;
    isPending: EventEmitter<boolean>;
    onFileUploadFinish: EventEmitter<FileHolder>;
    onRemove: EventEmitter<FileHolder>;
    files: FileHolder[];
    showFileTooLargeMessage: boolean;
    private fileCounter;
    private pendingFilesCounter;
    isFileOver: boolean;
    buttonCaption: string;
    dropBoxMessage: string;
    fileTooLargeMessage: string;
    constructor(imageService: ImageService);
    ngOnInit(): void;
    fileChange(files: FileList): void;
    deleteFile(file: FileHolder): void;
    fileOver(isOver: any): void;
    private uploadFiles(files, filesToUploadNum);
    private onResponse(response, fileHolder);
    private uploadSingleFile(fileHolder);
    private countRemainingSlots();
}
