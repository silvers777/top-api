import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { FileElementResponse } from './dto/file-element.response';
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {
  async saveFile(files: MFile[]): Promise<FileElementResponse[]> {
    const dataFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dataFolder}`;

    await ensureDir(uploadFolder);
    const res: FileElementResponse[] = [];

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      res.push({
        url: `${dataFolder}/${file.originalname}`,
        name: file.originalname,
      });
    }

    return res;
  }

  async convertToWebP(file: Buffer): Promise<Buffer> {
    return sharp(file).webp().toBuffer();
  }
}
