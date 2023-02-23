import axios from "../../utils/axios.api";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const config = {
  BaseUrl: "http://103.1.179.231:3000",
};

const signUp = async (params, data) => {
  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/register?type=${params}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const signIn = async (data) => {
  try {
    const res = await fetch(`${config.BaseUrl}/api/v1/user/login`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

const sendVerification = async (params) => {
  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/send-verification?email=${params}`,
      {
        method: "POST",
        headers,
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

const verifyAccount = async (params) => {
  // try {
  // const res = await fetch(
  //   `${config.BaseUrl}/api/v1/user/verify?email=${params?.email}&token=${params?.token}`,
  //   {
  //     method: "POST",
  //     headers,

  const res = await axios
    .post("api/v1/user/verify?email=${params?.email}&token=${params?.token}")
    .then((response) => {
      console.log(response);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

  // }
  // catch(error){
  //     console.log(error)
};

// }
//  catch (err) {
//   console.log(err);
//   return err;
// }
// };

const sendResetPassword = async (params) => {
  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/send-reset-pw?email=${params}`,
      {
        method: "POST",
        headers,
      }
    );
    console.log("res", res);
    return await res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

const resetPwd = async (params, data) => {
  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/reset-pw?email=${params?.email}&token=${params?.token}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getSSOUserCredentials = async (params, data) => {
  data.authCode = `AQSC6Uotf5ESOSbzAf7DiMpl_g1WDuyQMBxxY7USxqLmEgiio93Mxgvi8lqzSB6j7MV_8CrTWE -
    XCArcfvEi1PpUBH15dwBqCIt1UrgTCM1DZTf30bKF2bzNQE88B8bqqYHJeqTQ0oCcaOAV3aRxa8KsnVxEKYg7GkO -
    rLkJbifOm7C9UWfKDG_4EtvuBKQtbTacNCjQm -
    fPfY7twww;`;

  console.log(params, "params");
  console.log(data, "data ");

  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/${params?.endPoint}/oauth?method=${params?.type}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data.authCode),
      }
    );

    return await res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

// const postThumbnail = async (params, data) => {
//     try {
//         const res = await fetch(
//             `${config.BaseUrl}/api/v1/user/asset/thumbnail`
//             , {
//                 method: "POST",
//                 headers: {
//                     ...headers,
//                     "Authorization": `Bearer ${params}`
//                 },
//                 body: data,
//             });
//         return  await res.json();
//     } catch (err) {
//         console.log(err);
//         return err
//     }
// }

const postThumbnail = async (params, data) => {
  const response = await axios.post(
    `${config.BaseUrl}/api/v1/user/asset/thumbnail`,
    data,
    {
      headers: {
        Authorization: `Bearer ${params}`,
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
  return response;
};

const deleteThumbnail = async (params) => {
  try {
    const res = await fetch(`${config.BaseUrl}/api/v1/user/asset/thumbnail`, {
      method: "DELETE",
      headers: {
        ...headers,
        Authorization: `Bearer ${params}`,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getThumbnail = async (params) => {
  try {
    const res = await fetch(`${config.BaseUrl}/api/v1/user/asset/thumbnail`, {
      method: "GET",
      headers: {
        "Content-Type": "image/png",
        Authorization: `Bearer ${params}`,
        ResponseType: "arraybuffer",
      },
    });

    const response = await res.arrayBuffer();
    let base64ImageString = Buffer.from(response, "binary").toString("base64");
    let srcValue = "data:image/png;base64," + base64ImageString;
    return srcValue;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getThumbnailById = async (token, thumbnail, exteantion) => {
  try {
    const res = await fetch(
      `${config.BaseUrl}/api/v1/user/asset/thumbnail/${thumbnail}?mimeType=.${exteantion}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "image/png",
          Authorization: `Bearer ${token}`,
          ResponseType: "arraybuffer",
        },
      }
    );

    const response = await res.arrayBuffer();
    let base64ImageString = Buffer.from(response, "binary").toString("base64");
    let srcValue = `data:image/${exteantion};base64,` + base64ImageString;

    return srcValue;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export {
  signUp,
  signIn,
  sendVerification,
  verifyAccount,
  sendResetPassword,
  resetPwd,
  getSSOUserCredentials,
  postThumbnail,
  getThumbnail,
  deleteThumbnail,
  getThumbnailById,
};
