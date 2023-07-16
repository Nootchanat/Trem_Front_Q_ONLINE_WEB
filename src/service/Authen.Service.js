import { InstanceFormBody /*, InstanceFormData*/ } from '../helper/Axios';

export async function authen(data) {
  try {
<<<<<<< HEAD
    const response = await InstanceFormBody.get(`apis/login`, data);
=======
    const response = await InstanceFormBody.post(`apis/login`, data);
>>>>>>> beckhado
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}
