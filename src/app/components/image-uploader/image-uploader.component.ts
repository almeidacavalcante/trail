import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  private _files: Array<File>;
  private _fileUrl = '../../../assets/img/mockup.jpg';


  constructor() { }

  ngOnInit() {

  }

  /**
   * onFileSection
   */
  public onFileSelection(event) {
    console.log(event);



    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (progressEvent: ProgressEvent) => {
        this.fileUrl = (<FileReader>progressEvent.target).result;
        console.log(this.fileUrl);

      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public get files(): Array<File> {
    return this._files;
  }
  public set files(value: Array<File>) {
    this._files = value;
  }
  public get fileUrl(): string {
    return this._fileUrl;
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
}
