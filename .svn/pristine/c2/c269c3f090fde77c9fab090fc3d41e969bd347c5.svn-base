import { fetchJSON } from "./api";
import { Cookies } from "react-cookie";
import './../../src/config';

let cookies = new Cookies();
const token = cookies.get('token');

const getApi = (url, payload) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };
    const response = fetchJSON(url, options);
    return response;
}

const getApiData = async (apiUrl, id) => {
    let url = apiUrl;
    if (id) {
        url = apiUrl + id;
    }

    let options = {
        method: "GET",
        headers: {
            'Authorization': token,
        },
    }
    var res = await fetchJSON(url, options);

    return res;
}

const saveApiData = async (apiUrl, data) => {
    let dataStr = JSON.stringify(data);

    let formdata = new FormData();
    formdata.append('data', dataStr);
    var method = "POST";
    var url = apiUrl;
    var body = formdata;
    var headers = {
        'Authorization': token,
    }
    let options = {
        headers: headers,
        body: body,
        method: method,
    }
    var res = await fetchJSON(url, options).then(data => {
        return data;
    })
    return res;
}

const deleteApiData = async (apiUrl, id) => {
    let url = apiUrl;
    if (id) {
        url = apiUrl + id;
    }
    let options = {
        method: "GET",
        headers: {
            'Authorization': token,
        },
    }
    var res = await fetchJSON(url, options);

    return res;
}

const postApi = (url, payload) => {
    const options = {
        body: JSON.stringify(payload),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const response = fetchJSON(url, options);
    return response;
}

const deleteApi = (url, payload) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    };
    const response = fetchJSON(url, options);
    return response;
}

const updateApi = (url, payload) => {
    const options = {
        body: JSON.stringify(payload),
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };
    const response = fetchJSON(url, options);
    return response;
}

const fileUpload = async (fileBase64, category, filetype, filename) => {
    let cookies = new Cookies();
    let token = cookies.get('token');
    let url = "/storage/upload";
    let formdata = new FormData();
    formdata.append('upload_files', fileBase64);
    formdata.append('category', category);
    formdata.append('filetype', filetype);
    formdata.append('filename', filename);
    let options = {
        body: formdata,
        method: "POST",
        headers: {
            'Authorization': token,
        },
    }

    var res = await fetchJSON(url, options);

    return res;
}

export { updateApi, deleteApi, postApi, getApi, getApiData, saveApiData, deleteApiData, fileUpload }