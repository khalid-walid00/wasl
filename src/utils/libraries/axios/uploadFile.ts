import axios from "axios";

interface props {
  domain?: string | undefined | null;
  data: any,
  url?: string | undefined | null;
  secretkey?:string,
  Authorization?:string
}
const uploadFile = async ({ domain = process.env.MAIN_BASE_URL, data, url = "upload/image",secretkey,Authorization }: props) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${domain}/app/v1/${url}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'secret-key':secretkey,
          Authorization,
        },

      })
      .then((response: { data: {} }) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

export { uploadFile };
