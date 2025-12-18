import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from '../test/build-photo-list';
import { Photo } from '../interfaces/photo';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
    public getPhotos(): Observable<Photo[]> {
        return of(buildPhotoList());
    }
}