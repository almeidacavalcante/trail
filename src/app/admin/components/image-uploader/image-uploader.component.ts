import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  private _files: Array<File>;
  private _fileUrl = '../../../assets/img/mockup.jpg';
  // private _images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  private _images = [1, 2, 3].map( (value, index) => `../../../assets/img/iphone0${index + 1}.jpeg`);



  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }

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
  public get images(): Array<string> {
    return this._images;
  }
  public set images(v: Array<string>) {
    this._images = v;
  }
}
