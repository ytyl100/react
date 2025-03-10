import React, { useEffect, useState } from 'react';
import {
  Button,
  Space
} from 'antd';
import { Cookies } from 'react-cookie';
import { fetchJSON } from './../../../helpers/api'
import { fileUpload, deleteApiData } from '../../../helpers/handleApi';
import ImgCrop from 'antd-img-crop';
import './../../../config';
import { Image } from 'antd';
import { convertFileToBase64 } from 'react-media-library';
import {
  FileLibraryListItem,
  ReactMediaLibrary,
  FileMeta,
} from "react-media-library";

const MediaLib = (props) => {
  const [display, setDisplay] = useState(false);

  const { fileLibraryList, fileSelectedList, onFileSelect, vendor, refreshMediaLib, imageKey, saveLocation, onLibbuttonClick } = props;

  useEffect(() => {

  }, []);

  async function storiesDefaultFileUploadCallback(file) {

    try {
      const fileBase64 = await convertFileToBase64(file);

      const result = await fileUpload(fileBase64, saveLocation, 'base64', file.name);
      console.log('file upload:', result);

      if (result) {

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
    onLibbuttonClick(false);
    try {
      alert(`Uploaded ${uploadFiles.filter(f => f.status === 'success').length}/${uploadFiles.length} files!`)

      refreshMediaLib(id)
      return true;
    } catch {
      return false;
    }
  }

  function selectCallback(item) {

    setDisplay(false);
    onFileSelect(item, imageKey);
    // TODO Pass selected file back to client component callback function
    console.log('selectCallback set false');
  }

  async function deleteCallback(items) {
    console.log('deleteCallback:', items);

    for (const item of items) {
      //storage/delete?category=store&filename=img-1.jpg
      let delUrl = '/storage/delete?category=' + saveLocation + '&filename=' + item.filename;
      const result = await deleteApiData(delUrl);
      if (result) {
        console.log('deleteApiData', result);
        // Deleted file
        // TODO Reacquire file list from database
        // const newFileList = await getNewFileList();
        // setFileLibraryList(newFileList);
      }
    }
    onLibbuttonClick(false);

  }

  function libButtonEvent(checked) {
    setDisplay(checked);
    onLibbuttonClick(checked);
  }

  return (
    <React.Fragment>
      <Space size="right">
        <div className="mt-4" style={{ float: "right" }}>
          <span className="dtr-data">
            <button onClick={() => { libButtonEvent(true); }}
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
                  fileSelectedList && fileSelectedList.map((val, i) => {
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

export default MediaLib;