
import React, { useState } from 'react';
import { Upload, Image, Modal } from 'antd';
import ImgCrop from 'antd-img-crop';
import { fileUpload } from '../../../helpers/handleApi';
import { convertFileToBase64 } from 'react-media-library';

const ImageUpload = ({ onFileListChange, fileList, category }) => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onChange = ({ fileList: newFileList }) => {
        console.log('new file list:', newFileList);
        if (newFileList && newFileList.length > 0) {
            console.log('done:', newFileList[0]);
            // if (newFileList[0].status === 'done') {
            //     console.log('done:', newFileList[0].thumbUrl.length);
            // } else if (newFileList[0].status === 'error') {
            //     console.log('error:', newFileList);
            // }
        }


        onFileListChange(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        console.log('file thumbUrl:', file);

        setPreviewImage(file.url || file.thumbUrl || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.thumbUrl.substring(file.thumbUrl.lastIndexOf('/') + 1) || file.url.substring(file.url.lastIndexOf('/') + 1));

    };
    const handleCancel = () => setPreviewOpen(false);

    const fileUploadCallback = async options => {

        //api: storage/list?category=store
        //const category = 'vendor/22/category';
        const { onSuccess, onError, file, onProgress } = options;
        try {
            const fileBase64 = await convertFileToBase64(file);

            //const result = await fileUpload(fileBase64, category, 'base64', file.name);
            const result = await fileUpload(fileBase64, category, 'base64', 'profileimg.jpg');

            // {
            //     "type": "image\/jpeg",
            //     "name": "profileimg",
            //     "size": 45804,
            //     "height": 1155,
            //     "width": 1155,
            //     "url": "https:\/\/api.xhfair.com\/storage\/vendor\/5\/storeProfile\/profileimg.jpg"
            // }

            if (result && result.url) {
                console.log('file upload fileBase64:', result);
                onSuccess("Ok");
            } else {
                onError('fail to upload image');
            }
        } catch (err) {
            onError({ err });
        }
    }

    const fileRemoveCallback = async options => {
        console.log('file deleted:', options);
    }

    return (
        <React.Fragment>

            <ImgCrop rotationSlider>
                <Upload
                    customRequest={fileUploadCallback}
                    listType="picture-card"
                    fileList={fileList}
                    //fileList={previewImage}
                    onRemove={fileRemoveCallback}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </ImgCrop>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </React.Fragment>

    );
};

export default ImageUpload;

