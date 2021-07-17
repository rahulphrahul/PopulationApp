import React from 'react';



export { FetchCalling, FileUploadService, FileDeleteService, baseURL };

const baseURL = 'http://godlandit.pythonanywhere.com';

function FetchCalling(passData, setReturnData, setLoader, pageFinder) {


    let baseURL = 'http://godlandit.pythonanywhere.com/api';
    let suffixURL = '';


    switch (pageFinder) {
        case 'register':
            suffixURL = 'EndUser/CreateEndUser/';
            break;
        case 'GetEndUserDetails':
            suffixURL = 'EndUser/GetEndUserById/';
            break;
        case 'login':
            suffixURL = 'EndUser/EndUserLogin/';
            break;
        case 'mobileNumberCheck':
            suffixURL = 'EndUser/ValidateMobile/';
            break;
        case 'changePassWord':
            suffixURL = 'EndUser/EndUserResetPassword/';
            break;
        case 'OTPgen':
            suffixURL = 'Gateway/sms/';
            break;



        case 'payment':
            suffixURL = 'Gateway/pay/';
            break;
        case 'paymentSuccess':
            suffixURL = 'Gateway/success/';
            break;

        case 'createUserAddress':
            suffixURL = 'EndUser/CreateEndUserAddress/';
            break;
        case 'getAllUserAddress':
            suffixURL = 'EndUser/GetEndUserAddressById/';
            break;
        case 'deleteEndUserAddress':
            suffixURL = 'EndUser/DeleteEndUserAddress/';
            break;
        case 'GetAllEndUserPayments':
            // suffixURL = 'EndUser/GetAllUserNotifications/';
            suffixURL = 'EndUser/GetAllEndUserPayments/';
            break;
        case 'GetAllUserNotifications':
            // suffixURL = 'EndUser/GetAllUserNotifications/';
            suffixURL = 'EndUser/GetAllUserNotifications/';
            break;
        case 'CreateEndUserComplaintRegister':
            suffixURL = 'EndUser/CreateEndUserComplaintRegister/';
            break;

        case 'GetEndUserComplaintRegisterById':
            suffixURL = 'EndUser/GetEndUserComplaintRegisterById/';
            break;


        case 'GetAllOfferServices':
            suffixURL = 'Master/GetAllOfferServices/';
            break;

        case 'GetAllSubSerByServiceId':
            suffixURL = 'Master/GetAllSubSerByServiceId/';
            break;
        case 'GetAllEndUserComplaintRegisterByUserId':
            suffixURL = 'EndUser/GetAllEndUserComplaintRegisterByUserId/';
            break;
        case 'GetAllPurchaseDetailsDealer':
            suffixURL = 'Dealer/GetAllPurchaseDetailsDealer/';
            break;
        case 'CreateSecurity':
            suffixURL = 'Master/CreateSecurity/';
            break;
        case 'GetAllOffers':
            suffixURL = 'Admin/GetAllOfferList/';
            break;

        case 'CancelOrder':
            suffixURL = 'EndUser/CancelOrder/';
            break;

    }



    // console.log(passData)



    return (
        fetch(baseURL + '/' + suffixURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(passData)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                setReturnData(responseJSON)
                // console.log(responseJSON);
            })
            .catch((error) => { console.error(error) })
            .finally(() => setLoader(false))
    )


}

function FileUploadService(formData, setReturnData, setLoader,) {
    let baseURL = 'http://godlandit.pythonanywhere.com/api/';
    let suffixURL = 'file/upload/';
    return (
        fetch(baseURL + suffixURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                setReturnData(responseJSON)
                console.log(responseJSON);
            })
            .catch((error) => { console.error(error) })
            .finally(() => {
                setTimeout(() => {
                    setLoader(false)
                }, 2000)
            })
    )
}


function FileDeleteService(formData, setReturnData, setLoader,) {
    let baseURL = 'http://godlandit.pythonanywhere.com/api/';
    let suffixURL = 'file/delete/';
    return (
        fetch(baseURL + suffixURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': "application/json",
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                setReturnData(responseJSON)
                console.log(responseJSON);
            })
            .catch((error) => { console.error(error) })
            .finally(() => {
                setTimeout(() => {
                    setLoader(false)
                }, 2000)
            })
    )
}