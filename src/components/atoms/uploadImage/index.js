import 'jquery';
import React from 'react';
import { Component } from 'react';
import './uploadImage.scss';

class uploadImage extends Component {
    handleUpload = (e) => {
        
        // $(".imgAdd").click(function(){
        //     $(this).closest(".row").find('.imgAdd').before += `<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>`;
        // });
        // $(document).on("click", "i.del" , function() {
        //     $(this).parent().remove();
        // });
        // $(function() {
        //     $(document).on("change",".uploadFile", function()
        //     {
        //             var uploadFile = $(this);
        //         var files = !!this.files ? this.files : [];
        //         if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
        
        //         if (/^image/.test( files[0].type)){ // only image file
        //             var reader = new FileReader(); // instance of the FileReader
        //             reader.readAsDataURL(files[0]); // read the local file
        
        //             reader.onloadend = function(){ // set image data as background of div
        //                 //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
        // uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
        //             }
        //         }
                
        //     });
        // });
    }

  
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-2 imgUp">
                        <div class="imagePreview"></div>
                        <label class="btn btn-primary"> Upload <input type="file" class="uploadFile img" value="Upload Photo" onClick={this.handleUpload} style="width: 0px;height: 0px;overflow: hidden;"></input> </label>
                    </div>
                    <i class="fa fa-plus imgAdd"></i>
                </div>
            </div>
        )
    }
  }

  export default uploadImage;