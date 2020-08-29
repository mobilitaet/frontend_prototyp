import { Component, OnInit } from '@angular/core';

let that;

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor() { that = this; }

  ngOnInit(): void {
  }

  private selectedFile: File = null;
  public imageSource = "#";

  public onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
  }

  public onFileUpload()
  {
    console.log(this.selectedFile);
    let reader = new FileReader();
    reader.onload = function(e) {
      that.imageSource = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
