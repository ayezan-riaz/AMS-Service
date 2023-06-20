import { User } from 'src/users/entities/users.entity';
import { constants } from 'utils/constants';

export default class {
  private fs = require('fs');
  private workDir = constants.UPLOAD_LOCATION;
  createAlumniFolder(createdUser: User) {
    // let path =
    //   createdUser.id +
    //   '-' +
    //   [
    //     createdUser.first_name,
    //     createdUser.middle_name,
    //     createdUser.last_name,
    //   ].join(' ');
    let dir = this.workDir + createdUser.id; //path;
    //console.log(dir);
    if (!this.fs.existsSync(dir)) {
      this.fs.mkdirSync(dir, { recursive: true });
      return true;
    }
    return false;
  }

  removeOldAvatar(path: string) {
    this.fs.unlink(path, function (err) {
      if (err) console.log(err);
      // if no error, file has been deleted successfully
      console.log('File deleted!');
    });
  }
}
