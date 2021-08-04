http://127.0.0.1:8000/api/Staff/CreateStaff/

Passing:

{
    "Id": 0,
    "DepartmentId": "1",
    "DepartmentName": "",
    "FullName": "",
    "Mobile": "12315467890",
    "Email": "staffone@example.com",
    "Gender": "Male",
    "DOB": "",
    "Password": 123,
    "Qualifications": "SSLC",
    "AreaOfInterest": "",
    "Achievements": "",
    "Status": "Created",
    "AddressType": "Permanent",
    "Country": "Indian",
    "State": "Kerala",
    "District": "Test",
    "City": "Test",
    "Street": "Test",
    "HouseName": "One",
    "PostOffice": "Chengaloor",
    "PostalCode": "680312",
    "UserType": "HOD",
    "Image": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "DepartmentName": "",
        "FullName": "",
        "Mobile": "12315467890",
        "Email": "staffone@example.com",
        "Gender": "Male",
        "DOB": "",
        "Password": "123",
        "Qualifications": "SSLC",
        "AreaOfInterest": "",
        "Achievements": "",
        "Status": "Created",
        "AddressType": "Permanent",
        "Country": "Indian",
        "State": "Kerala",
        "District": "Test",
        "City": "Test",
        "Street": "Test",
        "HouseName": "One",
        "PostOffice": "Chengaloor",
        "PostalCode": "680312",
        "UserType": "HOD",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-19T12:07:32.225744",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-19T12:07:32.225744",
        "DeletedBy": null,
        "DeletedDate": null,
        "DepartmentId": 1
    }
}


http://127.0.0.1:8000/api/Staff/GetStaffById/


Passing:

{
    "Id": 2
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "DepartmentName": "",
        "FullName": "",
        "Mobile": "12315467891",
        "Email": "stafftwo@example.com",
        "Gender": "Male",
        "DOB": "",
        "Password": "123",
        "Qualifications": "SSLC",
        "AreaOfInterest": "",
        "Achievements": "",
        "Status": "Created",
        "AddressType": "Permanent",
        "Country": "Indian",
        "State": "Kerala",
        "District": "Test",
        "City": "Test",
        "Street": "Test",
        "HouseName": "One",
        "PostOffice": "Chengaloor",
        "PostalCode": "680312",
        "UserType": "HOD",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-19T12:08:29.252997",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-19T12:08:29.252997",
        "DeletedBy": null,
        "DeletedDate": null,
        "DepartmentId": 1
    }
}


http://127.0.0.1:8000/api/Staff/GetAllStaffs/


Passing:

{
    "PageIndex": 0,
    "PageSize": 1
}


Result:


{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "DepartmentName": "",
            "FullName": "",
            "Mobile": "12315467891",
            "Email": "stafftwo@example.com",
            "Gender": "Male",
            "DOB": "",
            "Password": "123",
            "Qualifications": "SSLC",
            "AreaOfInterest": "",
            "Achievements": "",
            "Status": "Created",
            "AddressType": "Permanent",
            "Country": "Indian",
            "State": "Kerala",
            "District": "Test",
            "City": "Test",
            "Street": "Test",
            "HouseName": "One",
            "PostOffice": "Chengaloor",
            "PostalCode": "680312",
            "UserType": "HOD",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-19T12:08:29.252997",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-19T12:08:29.252997",
            "DeletedBy": null,
            "DeletedDate": null,
            "DepartmentId": 1
        }
    ]
}

http://127.0.0.1:8000/api/Staff/DeleteStaffs/

Passing:

{
    "Id": 1,
    "DeletedBy": 1
}

Result:

{
    "Message": "Delete Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}