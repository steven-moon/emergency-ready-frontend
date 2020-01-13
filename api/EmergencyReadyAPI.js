import axios from 'axios'
import clonedeep from 'lodash.clonedeep';


const instance = {
  sendContactUsForm(formData){
    console.log('BEGIN: sendContactUsForm');
    return axios.post(
      process.env.baseApiUrl + "/contact-us", formData
    )
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          console.log("Send Contact Form Was Successful")
        } else {
          console.log("error in sendMail: " + response.statusText);
        }
        return response;
      })
      .catch((error) => {
        console.log("error in sendMail: " + error);
        return error;
      });
  },
  sendSubscribeForm(formData){
    console.log('BEGIN: sendSubscribeForm');
    return axios.post(
      process.env.baseApiUrl + "/subscribe", formData
    )
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
        } else {
          console.log("error in sendMail: " + response.statusText);
        }
        return response;
      })
      .catch((error) => {
        console.log("error in sendMail: " + error);
        return error;
      });
  },
};

export default instance;
