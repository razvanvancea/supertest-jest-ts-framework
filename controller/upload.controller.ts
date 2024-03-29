import * as supertest from 'supertest';
const request = supertest(`${process.env.ENV}`);

class UploadController {
  postUploadSingle(filepath: string) {
    return request
      .post('/upload/single')
      .attach('single', filepath)
  }

  postUploadMultiple(files: string[]) {
    const req = request
      .post('/upload/multiple')

    files.forEach(file => {
      req
        .attach('multiple', file)
    })

    return req;
  }
}

export default new UploadController();