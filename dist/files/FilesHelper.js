"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
class default_1 {
    constructor() {
        this.fs = require('fs');
        this.workDir = constants_1.constants.UPLOAD_LOCATION;
    }
    createAlumniFolder(createdUser) {
        let dir = this.workDir + createdUser.id;
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
    createAlumniProfileFolder(createdUser) {
        let dir = this.workDir + createdUser.id + '/avatar';
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
    createAlumniCertificateFolder(createdUser) {
        let dir = this.workDir + createdUser.userId + '/skillCertificates';
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
    createAlumniAcademicsFolder(createdUser) {
        let dir = this.workDir + createdUser.userId + '/academicCertificates';
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
    createAlumniResumeFolder(createdUser) {
        let dir = this.workDir + createdUser.userId + '/profileResume';
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
    removeFolderOrFile(path) {
        if (!this.fs.existsSync(path)) {
            console.log('Path dosent Exist:' + path);
            return false;
        }
        const stats = this.fs.statSync(path);
        if (stats.isDirectory()) {
            this.fs.rmSync(path, { recursive: true, force: true }, (error) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(path + ' Deleted!');
                }
            });
            return true;
        }
        else {
            this.fs.unlink(path, function (err) {
                if (err)
                    console.log(err);
                console.log('File deleted!');
            });
            return true;
        }
    }
    createGeneralFolder(path) {
        let dir = this.workDir + path;
        if (!this.fs.existsSync(dir)) {
            this.fs.mkdirSync(dir, { recursive: true });
            return true;
        }
        return false;
    }
}
exports.default = default_1;
//# sourceMappingURL=FilesHelper.js.map