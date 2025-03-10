import { Cookies } from 'react-cookie';
import './../config';

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */
const fetchJSON = (url, options = {}) => {
    let globalApi = global.api.url + url;
    return fetch(globalApi, options)
        .then(response => {
            console.log('simulate json login url0:', response);
            if (!response.status === 200) {
                throw response.json();
            }
            return response.json();
        })
        .then(json => {
            console.log('simulate json login url1:', json);
            return json;
        })
        .catch(error => {
            console.log('simulate error login url2:', error);
            throw error;
        });
};

const fetchJSONWToken = (url, options = {}) => {
    let glbalApi = global.api.url + url;
    return fetch(glbalApi, options)
        .then(response => {
            // console.log(response);
            let tokenInfo = response.headers.get('Authorization');
            if (tokenInfo) {
                let cookies = new Cookies();
                cookies.set('token', tokenInfo);
                options = Object.assign(options, { Authorization: tokenInfo });
                // console.log(options);
                fetch(glbalApi, options)
                    .then(response => {
                        if (!response.status === 200) {
                            throw response.json();
                        }
                        return response.json();
                    })
            }
            if (!response.status === 200) {
                throw response.json();
            }
            console.log('fetch_response', response);
            return response.json();
        })
        .then(json => {
            console.log('fetch_json', json);
            return json;
        })
        .catch(error => {
            //token invalid;
            console.log('fetch_error', error);
            throw error;
        });
};

export { fetchJSON, fetchJSONWToken };
