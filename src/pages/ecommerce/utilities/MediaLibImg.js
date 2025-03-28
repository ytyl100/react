import React, { useEffect, useState } from 'react';
import {
  Button,
  Space
} from 'antd';
import { Cookies } from 'react-cookie';
import { fetchJSON } from '../../../helpers/api'
import { fileUpload } from '../../../helpers/handleApi';
import ImgCrop from 'antd-img-crop';
import '../../../config';
import { Image } from 'antd';
import { convertFileToBase64 } from 'react-media-library';
import {
  FileLibraryListItem,
  ReactMediaLibrary,
  FileMeta,
} from "react-media-library";

const MediaLibImg = (props) => {
  const [display, setDisplay] = useState(false);
  // const [fileLibraryList, setFileLibraryList] = useState([]);
  // const [fileSelectedList, setSelectedList] = useState([]);

  const { data, fileLibraryList, fileSelectedList, onFileSelect, vendor, refreshMediaLib, imageKey, onLibbuttonClick } = props;

  const selectedImages = data.filter((item) => item.key === imageKey)[0].images

  useEffect(() => {

  }, []);

  async function storiesDefaultFileUploadCallback(file) {

    // const fileBase64 = await convertFileToBase64(file);
    // console.log('find image fileBase64:', fileBase64);
    //alert(`Upload file ${file.name}\n ${fileBase64}`);
    // const imageWid = getShortDimensions(fileBase64);
    // console.log('find image width:', imageWid.width);
    const id = vendor ? vendor.id ? vendor.id : 0 : 0;
    const category = 'vendor/' + id + '/category';

    try {
      // let img = new Image()
      // img.src = window.URL.createObjectURL(file)
      // alert(img.width + " " + img.height);

      console.log('file upload file:', file);

      const fileBase64 = await convertFileToBase64(file);

      // var img = new Image();
      // img.src = fileBase64;
      // var width = img.width;
      // var height = img.height;

      // const dimension = await getDimensions(fileBase64);
      //console.log('dimension:', height + '|' + width);

      const result = await fileUpload(fileBase64, category, 'base64', file.name);
      if (result && result.code) {

        return true;
      } else {
        // Return false to display upload failed in modal
        return false;
      }
      // alert(`Upload file ${file.name}\n ${fileBase64}`);
      // return true;
    } catch {
      return false;
    }
  }

  async function finishedFileUploadCallback(uploadFiles) {

    // const fileBase64 = await convertFileToBase64(file);
    console.log('find image fileBase64:', uploadFiles);
    //alert(`Upload file ${file.name}\n ${fileBase64}`);
    // const imageWid = getShortDimensions(fileBase64);
    // console.log('find image width:', imageWid.width);
    const id = vendor ? vendor.id ? vendor.id : 0 : 0;
    try {
      alert(`Uploaded ${uploadFiles.filter(f => f.status === 'success').length}/${uploadFiles.length} files!`)

      refreshMediaLib(id)
      return true;
    } catch {
      return false;
    }
  }

  function selectCallback(item) {
    // Hide modal
    setDisplay(false);
    onFileSelect(item, imageKey);
    console.log('selectCallback attribute set false');
    onLibbuttonClick(false);
  }

  async function deleteCallback(item) {
    console.log('deleteCallback:', item);
    //storage/delete?category=store&filename=img-1.jpg

    // TODO Delete file from backend service
    // const result = await fileDelete(item);

    // if (result.success) {
    //   // Deleted file
    //   // TODO Reacquire file list from database
    //   const newFileList = await getNewFileList();
    //   setFileLibraryList(newFileList);
    // }
    onLibbuttonClick(false);
  }

  function libButtonEvent(checked) {
    setDisplay(checked);
    onLibbuttonClick(true);
  }

  return (
    <React.Fragment>
      <Space size="right">
        <div className="mt-4" style={{ float: "right" }}>
          <span className="dtr-data">
            <button onClick={() => { setDisplay(true); }}
              className="btn btn-primary mr-2"
              data-toggle="modal"
              data-target="#bs-role-modal-xl">打开图片库选择图片</button>
            <div>
              <p>
                <strong>
                  当前选择图片
                </strong>
              </p>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >{
                  selectedImages && selectedImages.map((val, i) => {
                    return (
                      <React.Fragment key={i}>
                        {val ? (
                          <Image width={100} src={val.thumbnailUrl} />
                        ) : (
                          <Image width={100} src="https://placekitten.com/300/300" />
                        )}
                      </React.Fragment>
                    );
                  })}

              </Image.PreviewGroup>

            </div>
          </span>
        </div>
      </Space>
      <ImgCrop rotationSlider>
        <ReactMediaLibrary
          acceptedTypes={[
            'image/*'
          ]}
          defaultSelectedItemIds={[
            '6549e02fb0612d12ca163aaa'
          ]}
          multiSelect
          title={'图片库'}
          modalTitle='图片库MODAL'
          fileLibraryList={fileLibraryList}
          //fileUploadCallback={uploadCallback}
          fileUploadCallback={storiesDefaultFileUploadCallback}
          filesDeleteCallback={deleteCallback}
          filesSelectCallback={selectCallback}
          //finishUploadCallback={uploadCallback}
          finishUploadCallback={finishedFileUploadCallback}
          isOpen={display}
          onClose={() => libButtonEvent(false)}
        />
      </ImgCrop>
    </React.Fragment>

  );
};

export default MediaLibImg;