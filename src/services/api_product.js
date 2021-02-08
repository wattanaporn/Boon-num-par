//import { imageUrl } from "./constants";
import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";

//Dashboard
export const getDashboard = () => {
  return httpClient.get(server.DASHBOARD_URL);
};

//Customer
export const getListcustomertypeselector = () => {
  return httpClient.get(server.CUSTOMERTYPESELECTOR_URL);
};
export const getListallcustomers = () => {
  return httpClient.get(server.LISTALLCUSTOMERS_URL);
};

export const getListEditcustomers = data => {
  return httpClient.post(server.LIST_CUSTOMER_EDIT_URL, data);
};

export const addNewpersonnal = data => {
  return httpClient.post(server.NEWCUSTOMER_URL, data);
};

export const putEditcustomer = data => {
  return httpClient.put(server.EDIT_CUSTOMER_URL, data);
};

export const delCustomer = data => {
  return httpClient.put(server.DELETE_CUSTOMER_URL, data);
};

//GetProvince
export const getProvinces = () => {
  return httpClient.post(server.LIST_FIND_PROVINCE_URL);
};

//GetAMPHOE
export const getAmphoe = (data) => {
  return httpClient.post(server.LIST_FIND_AMPHOE_URL,data);
};

//GetProvince
export const getDistrict = (data) => {
  return httpClient.post(server.LIST_FIND_DISTRICT_URL,data);
};

//Equipment
export const getEquipment = () => {
  return httpClient.get(server.LIST_ALL_EQUIPMENT_URL);
};



  