import { User } from 'src/users/entities/users.entity';
import { constants } from 'utils/constants';

export default class {
  private fs = require('fs');
  private workDir = constants.UPLOAD_LOCATION;

  createAlumniFolder(createdUser: any) {
    let dir = this.workDir + createdUser.id; //path;
    //console.log(dir);
    if (!this.fs.existsSync(dir)) {
      this.fs.mkdirSync(dir, { recursive: true });
      return true;
    }
    return false;
  }

  createAlumniProfileFolder(createdUser: any) {
    let dir = this.workDir + createdUser.id + '/avatar'; //path;
    //console.log(dir);
    if (!this.fs.existsSync(dir)) {
      this.fs.mkdirSync(dir, { recursive: true });
      return true;
    }
    return false;
  }

  createAlumniCertificateFolder(createdUser: any) {
    let dir = this.workDir + createdUser.userId + '/skillCertificates'; //path;
    //console.log(dir);
    if (!this.fs.existsSync(dir)) {
      this.fs.mkdirSync(dir, { recursive: true });
      return true;
    }
    return false;
  }

  createAlumniResumeFolder(createdUser: any) {
    let dir = this.workDir + createdUser.userId + '/profileResume'; //path;
    //console.log(dir);
    if (!this.fs.existsSync(dir)) {
      this.fs.mkdirSync(dir, { recursive: true });
      return true;
    }
    return false;
  }

  removeFolderOrFile(path: string) {
    // path is  "files/alumni/47/avatar" here we delete the whole avatar folder
    this.fs.unlink(path, function (err) {
      if (err) console.log(err);
      // if no error, file has been deleted successfully
      console.log('File deleted!');
    });
  }
}
