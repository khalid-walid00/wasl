import { createSlice } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";
import { CompanyData } from "./companies.slice.type";
import { clear } from "console";
import { Toast } from "~/utils/libraries";

let url; if (typeof window !== 'undefined') { url = new URL(window.location.href); } else { url = new URL('http://localhost:3055') }
const searchitems = {
  type:"",
  value:"",
}

const company : CompanyData = {
  Id:"",
  Name: "",
  WaslId: "",
  IsDeletedFromWasl: false,
  IdentityNumber: "",
  CommercialRecordNumber: "",
  CommercialRecordIssueDateHijri: "",
  DateOfBirthHijri: "",
  DateOfBirthGregorian: "",
  PhoneNumber: "",
  ExtensionNumber: "",
  EmailAddress: "",
  ManagerName: "",
  ManagerPhoneNumber: "",
  ManagerMobileNumber: "",
  Activity: "",
  UplevelOperationCompanyId: "",
};
interface PaginationType {
  totalCount: number,
  totalPages: number,
}

interface itemsTypes {
  Data: CompanyData[],
  Message: string,
  StatusCode: boolean;
}
const items : itemsTypes = {
   Data: [
    {
      Id: "2",
      WaslId: "7012345678",
      IsDeletedFromWasl: true,
      CreatedDate: "2024-05-10",
      Name: "Tech Innovations Ltd.",
      EmailAddress: "contact@techinnovations.com",
      PhoneNumber: "0987654321",
      Activity: "Inactive",
      CreatedBy: "Admin",
      IdentityNumber: "7012345678",
      DateOfBirthHijri: "1445-02-15",
      CommercialRecordNumber: "5678901234",
      CommercialRecordIssueDateHijri: "1440-07-09",
      DateOfBirthGregorian: "1985-06-22",
      ExtensionNumber: "500",
      ManagerName: "Fahad Al-Farsi",
      ManagerPhoneNumber: "0598765432",
      ManagerMobileNumber: "0598765432",
      UplevelOperationCompanyId: "1234abcd5678efgh91011ijk",
    },
    {
      Id: "3",
      WaslId: "7012345678",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-11-25",
      Name: "Global Solutions Group",
      EmailAddress: "info@globalsolutions.com",
      PhoneNumber: "0212345678",
      Activity: "Active",
      CreatedBy: "User",
      IdentityNumber: "7012345678",
      DateOfBirthHijri: "1443-09-10",
      CommercialRecordNumber: "1234567890",
      CommercialRecordIssueDateHijri: "1441-03-01",
      DateOfBirthGregorian: "1992-03-13",
      ExtensionNumber: null,
      ManagerName: "Sara Al-Mutairi",
      ManagerPhoneNumber: "0587123456",
      ManagerMobileNumber: "0587123456",
      UplevelOperationCompanyId: "abcd1234efgh5678ijkl9101",
    },
    {
      Id: "4",
      WaslId: "7012345678",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-07-17",
      Name: "Innovative Designs",
      EmailAddress: "contact@innovativedesigns.com",
      PhoneNumber: "0398765432",
      Activity: "Active",
      CreatedBy: "Manager",
      IdentityNumber: "7012345678",
      DateOfBirthHijri: "1446-01-02",
      CommercialRecordNumber: "9988776655",
      CommercialRecordIssueDateHijri: "1442-11-19",
      DateOfBirthGregorian: "1988-08-29",
      ExtensionNumber: "300",
      ManagerName: "Layla Al-Harbi",
      ManagerPhoneNumber: "0598764321",
      ManagerMobileNumber: "0598764321",
      UplevelOperationCompanyId: "3456mnop7890qrst2345uvwx",
    },
    {
      Id: "5",
      WaslId: "5566778899",
      IsDeletedFromWasl: true,
      CreatedDate: "2022-02-01",
      Name: "Eco World Enterprises",
      EmailAddress: "support@ecoworld.com",
      PhoneNumber: "0112233445",
      Activity: "Inactive",
      CreatedBy: "Admin",
      IdentityNumber: "6677889900",
      DateOfBirthHijri: "1442-11-30",
      CommercialRecordNumber: "1122334455",
      CommercialRecordIssueDateHijri: "1440-04-07",
      DateOfBirthGregorian: "1994-09-19",
      ExtensionNumber: "400",
      ManagerName: "Ali Al-Shehri",
      ManagerPhoneNumber: "0585544332",
      ManagerMobileNumber: "0585544332",
      UplevelOperationCompanyId: "5678abcd9101efgh2345ijkl",
    },
    {
      Id: "6",
      WaslId: "8899001122",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-12-05",
      Name: "Creative Designs Inc.",
      EmailAddress: "sales@creativedesigns.com",
      PhoneNumber: "0777888999",
      Activity: "Active",
      CreatedBy: "Admin",
      IdentityNumber: "2211334455",
      DateOfBirthHijri: "1444-06-25",
      CommercialRecordNumber: "5556667778",
      CommercialRecordIssueDateHijri: "1441-08-15",
      DateOfBirthGregorian: "1995-12-04",
      ExtensionNumber: null,
      ManagerName: "Mona Al-Juhani",
      ManagerPhoneNumber: "0596677889",
      ManagerMobileNumber: "0596677889",
      UplevelOperationCompanyId: "2345mnop6789qrst0123abcd",
    },
    {
      Id: "3",
      WaslId: "1122334455",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-11-25",
      Name: "Global Solutions Group",
      EmailAddress: "info@globalsolutions.com",
      PhoneNumber: "0212345678",
      Activity: "Active",
      CreatedBy: "User",
      IdentityNumber: "1122334455",
      DateOfBirthHijri: "1443-09-10",
      CommercialRecordNumber: "1234567890",
      CommercialRecordIssueDateHijri: "1441-03-01",
      DateOfBirthGregorian: "1992-03-13",
      ExtensionNumber: null,
      ManagerName: "Sara Al-Mutairi",
      ManagerPhoneNumber: "0587123456",
      ManagerMobileNumber: "0587123456",
      UplevelOperationCompanyId: "abcd1234efgh5678ijkl9101",
    },
    {
      Id: "6",
      WaslId: "8899001122",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-12-05",
      Name: "Creative Designs Inc.",
      EmailAddress: "sales@creativedesigns.com",
      PhoneNumber: "0777888999",
      Activity: "Active",
      CreatedBy: "Admin",
      IdentityNumber: "2211334455",
      DateOfBirthHijri: "1444-06-25",
      CommercialRecordNumber: "5556667778",
      CommercialRecordIssueDateHijri: "1441-08-15",
      DateOfBirthGregorian: "1995-12-04",
      ExtensionNumber: null,
      ManagerName: "Mona Al-Juhani",
      ManagerPhoneNumber: "0596677889",
      ManagerMobileNumber: "0596677889",
      UplevelOperationCompanyId: "2345mnop6789qrst0123abcd",
    },
    {
      Id: "3",
      WaslId: "1122334455",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-11-25",
      Name: "Global Solutions Group",
      EmailAddress: "info@globalsolutions.com",
      PhoneNumber: "0212345678",
      Activity: "Active",
      CreatedBy: "User",
      IdentityNumber: "1122334455",
      DateOfBirthHijri: "1443-09-10",
      CommercialRecordNumber: "1234567890",
      CommercialRecordIssueDateHijri: "1441-03-01",
      DateOfBirthGregorian: "1992-03-13",
      ExtensionNumber: null,
      ManagerName: "Sara Al-Mutairi",
      ManagerPhoneNumber: "0587123456",
      ManagerMobileNumber: "0587123456",
      UplevelOperationCompanyId: "abcd1234efgh5678ijkl9101",
    },
    {
      Id: "4",
      WaslId: "6677889900",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-07-17",
      Name: "Innovative Designs",
      EmailAddress: "contact@innovativedesigns.com",
      PhoneNumber: "0398765432",
      Activity: "Active",
      CreatedBy: "Manager",
      IdentityNumber: "5544332211",
      DateOfBirthHijri: "1446-01-02",
      CommercialRecordNumber: "9988776655",
      CommercialRecordIssueDateHijri: "1442-11-19",
      DateOfBirthGregorian: "1988-08-29",
      ExtensionNumber: "300",
      ManagerName: "Layla Al-Harbi",
      ManagerPhoneNumber: "0598764321",
      ManagerMobileNumber: "0598764321",
      UplevelOperationCompanyId: "3456mnop7890qrst2345uvwx",
    },
    {
      Id: "5",
      WaslId: "5566778899",
      IsDeletedFromWasl: true,
      CreatedDate: "2022-02-01",
      Name: "Eco World Enterprises",
      EmailAddress: "support@ecoworld.com",
      PhoneNumber: "0112233445",
      Activity: "Inactive",
      CreatedBy: "Admin",
      IdentityNumber: "6677889900",
      DateOfBirthHijri: "1442-11-30",
      CommercialRecordNumber: "1122334455",
      CommercialRecordIssueDateHijri: "1440-04-07",
      DateOfBirthGregorian: "1994-09-19",
      ExtensionNumber: "400",
      ManagerName: "Ali Al-Shehri",
      ManagerPhoneNumber: "0585544332",
      ManagerMobileNumber: "0585544332",
      UplevelOperationCompanyId: "5678abcd9101efgh2345ijkl",
    },
    {
      Id: "6",
      WaslId: "8899001122",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-12-05",
      Name: "Creative Designs Inc.",
      EmailAddress: "sales@creativedesigns.com",
      PhoneNumber: "0777888999",
      Activity: "Active",
      CreatedBy: "Admin",
      IdentityNumber: "2211334455",
      DateOfBirthHijri: "1444-06-25",
      CommercialRecordNumber: "5556667778",
      CommercialRecordIssueDateHijri: "1441-08-15",
      DateOfBirthGregorian: "1995-12-04",
      ExtensionNumber: null,
      ManagerName: "Mona Al-Juhani",
      ManagerPhoneNumber: "0596677889",
      ManagerMobileNumber: "0596677889",
      UplevelOperationCompanyId: "2345mnop6789qrst0123abcd",
    }
  ],
  
  Message:"",
  StatusCode:false
}

const initialState = {
  items: items ,
  itemsSearch: []as any ,
  loading: false,
  error: false,
  company,
  companyId:"",
  searchitems,
  inquiryIndividual: {},
  ActivityLoading: false,
  Activity: [{ value: "Active", label: "Active" }, { value: "Inactive", label: "Inactive" }],
  inquiryIndividualLoading: false,
  inquiryCompanyLoading: false,
  page:  Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number( url.searchParams.get("limit") || pagination.defaultLimit)  ,
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
};



export const companiesSlice = createSlice({
  name: "companiesSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.items = items;
      state.page =  pagination.defaultPage;
      state.limit = pagination.defaultLimit;
    },
    fetchDataRequest: (state, action) => {
      state.loading = true;
    },
    fetchDataFailed: (state) => {
      state.error = true;
    },
    setData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchOneData: (state, action) => {
      state.companyId = action.payload;
      const company = state.items.Data.find((item) => item.Id === action.payload);
       if (company) {
        state.company = company;
      }
    },
    setCUData: (state, action) => {
      state.company =  {...state.company, ...action.payload};
    },
    sendData: (state) => {
      state.loading = true;
    },

    fetchInquiryIndividual: (state) => {
      state.inquiryIndividualLoading = true;
    },
    
    setInquiryIndividual: (state) => {
      state.inquiryIndividualLoading = true;
    },
    fetchInquiryCompany: (state) => {
      state.inquiryCompanyLoading = true;
    },
    setInquiryCompany: (state) => {
      state.inquiryIndividualLoading = true;
    },
    fetchActivity: (state) => {
      state.ActivityLoading = true;
    },
    setActivity: (state, action) => {
      state.ActivityLoading = false;
      state.Activity = action.payload;
    },
    clearOneData: (state) => {
      state.company = company;
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchitems.type = type;
      state.searchitems.value = value;
    },
    search: (state) => {
      const { type, value } = state.searchitems;    
      console.log("type, value", type, value);
      const company = state.items.Data.find((item: any) => {
        if (value !== "") return item[type] && item[type].toString().includes(value); 
      });    
      if (company) {
        state.itemsSearch = [company];  
      } else {
        state.itemsSearch = []; 
        Toast.fire({
          icon: "error",
          title: "Company not found",
        });
      }
    },
    addItem: (state, action) => {
        state.items.Data.unshift(action.payload)
    },
    replaceItem: ( state , action ) => {
      const { Data } = state.items;
      const { payload } = action;
      console.log("payload", payload);
      const index = Data.findIndex((item:any ) => item.Id === payload.Id);
      console.log("index", index);
      if (index !== -1) {
        state.items.Data[index] = {
          ...state.items.Data[index],
          ...payload 
        };
      }
    }, 
    deleteItem: (state, action) => {
     const idsToRemove =action.payload
        state.items.Data = state.items.Data?.filter(item => item.Id !== idsToRemove);
    },
    setLimit: (state, action) => {     
      state.page = 1; 
      state.limit = action.payload;
      state.loading = true;
    }, 
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search ,fetchOneData,fetchActivity,setActivity,
  clearOneData,setCUData,setInquiryIndividual,sendData,setInquiryCompany,fetchInquiryCompany,setLimit
  , fetchDataRequest, fetchDataFailed, setData ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
