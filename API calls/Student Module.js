http://127.0.0.1:8000/api/Student/CreateStudent/

Passing:

{
    "Id": 0,
    "FullName": "ROHITH RAJ",
    "RegistrationNo": "GTAQSCS0011",
    "AdmissionNo": "ADM002",
    "Mobile": "01234567891",
    "Email": "exe@ex.com",
    "Gender": "Male",
    "DOB": "01-08-2021",
    "Password": "123",
    "GuardianName": "Father",
    "GuardianMobile": "1234567891",
    "GuardianRelation": "Father",
    "Status": "Admitted",
    "Image": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "FullName": "ROHITH RAJ",
        "RegistrationNo": "GTAQSCS0012",
        "AdmissionNo": "ADM001",
        "Mobile": "0123456789",
        "Email": "ex@ex.com",
        "Gender": "Male",
        "DOB": "01-08-2021",
        "Password": "123",
        "GuardianName": "Father",
        "GuardianMobile": "1234567891",
        "GuardianRelation": "Father",
        "Status": "Admitted",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T18:59:43.802864",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T19:04:49.659075",
        "DeletedBy": null,
        "DeletedDate": null
    }
}


http://127.0.0.1:8000/api/Student/GetAllStudents/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0
}


Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "FullName": "ROHITH RAJ",
            "RegistrationNo": "GTAQSCS0011",
            "AdmissionNo": "ADM002",
            "Mobile": "01234567891",
            "Email": "exe@ex.com",
            "Gender": "Male",
            "DOB": "01-08-2021",
            "Password": "123",
            "GuardianName": "Father",
            "GuardianMobile": "1234567891",
            "GuardianRelation": "Father",
            "Status": "Admitted",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T19:03:18.960488",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T19:03:18.960488",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "FullName": "ROHITH RAJ",
            "RegistrationNo": "GTAQSCS0012",
            "AdmissionNo": "ADM001",
            "Mobile": "0123456789",
            "Email": "ex@ex.com",
            "Gender": "Male",
            "DOB": "01-08-2021",
            "Password": "123",
            "GuardianName": "Father",
            "GuardianMobile": "1234567891",
            "GuardianRelation": "Father",
            "Status": "Admitted",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T18:59:43.802864",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T19:04:49.659075",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}

http://127.0.0.1:8000/api/Student/GetStudentById/

Passing:

{
    "Id": 1
}


Result:


{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "FullName": "ROHITH RAJ",
        "RegistrationNo": "GTAQSCS0012",
        "AdmissionNo": "ADM001",
        "Mobile": "0123456789",
        "Email": "ex@ex.com",
        "Gender": "Male",
        "DOB": "01-08-2021",
        "Password": "123",
        "GuardianName": "Father",
        "GuardianMobile": "1234567891",
        "GuardianRelation": "Father",
        "Status": "Admitted",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T18:59:43.802864",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T19:04:49.659075",
        "DeletedBy": null,
        "DeletedDate": null
    }
}


http://127.0.0.1:8000/api/Student/DeleteStudent/


Passing:

{
    "Id": 2,
    "DeletedBy": 2
}

Result:

{
    "Message": "Delete Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}

http://127.0.0.1:8000/api/Student/CreateStudentAddress/

Passing:

{
    "Id": 0,
    "StudentId": 1,
    "StudentName": "ROHITH RAJ",
    "AddressType": "Temporary",
    "Country": "India",
    "State": "Kerala",
    "District": "Thrissur",
    "City": "Kodakara",
    "Street": "kodakara",
    "HouseName": "One",
    "PostOffice": "Koadakara",
    "PostalCode": 680684,
    "Status": "Created"
}


Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "StudentName": "ROHITH RAJ",
        "AddressType": "Temporary",
        "Country": "India",
        "State": "Kerala",
        "District": "Thrissur",
        "City": "Kodakara",
        "Street": "kodakara",
        "HouseName": "One",
        "PostOffice": "Koadakara",
        "PostalCode": "680684",
        "Status": "Created",
        "CreateBy": null,
        "CreateDate": "2021-07-14T19:14:28.064850",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T19:14:28.064850",
        "DeletedBy": null,
        "DeletedDate": null,
        "StudentId": 1
    }
}

http://127.0.0.1:8000/api/Student/GetStudentAddressById/

Passing:

{
    "Id": 1
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "StudentName": "ROHITH RAJ",
        "AddressType": "Permanent",
        "Country": "India",
        "State": "Kerala",
        "District": "Thrissur",
        "City": "Kodakara",
        "Street": "kodakara",
        "HouseName": "One",
        "PostOffice": "Koadakara",
        "PostalCode": "680684",
        "Status": "Created",
        "CreateBy": null,
        "CreateDate": "2021-07-14T19:14:02.305790",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T19:14:02.305790",
        "DeletedBy": null,
        "DeletedDate": null,
        "StudentId": 1
    }
}

http://127.0.0.1:8000/api/Student/GetAllStudentAddress/


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
            "StudentName": "ROHITH RAJ",
            "AddressType": "Temporary",
            "Country": "India",
            "State": "Kerala",
            "District": "Thrissur",
            "City": "Kodakara",
            "Street": "kodakara",
            "HouseName": "One",
            "PostOffice": "Koadakara",
            "PostalCode": "680684",
            "Status": "Created",
            "CreateBy": null,
            "CreateDate": "2021-07-14T19:14:28.064850",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T19:14:28.064850",
            "DeletedBy": null,
            "DeletedDate": null,
            "StudentId": 1
        }
    ]
}


http://127.0.0.1:8000/api/Student/GetStudentAddressStudentId/

Passing:

{
    "StudentId": "1"
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "StudentName": "ROHITH RAJ",
            "AddressType": "Temporary",
            "Country": "India",
            "State": "Kerala",
            "District": "Thrissur",
            "City": "Kodakara",
            "Street": "kodakara",
            "HouseName": "One",
            "PostOffice": "Koadakara",
            "PostalCode": "680684",
            "Status": "Created",
            "CreateBy": null,
            "CreateDate": "2021-07-14T19:14:28.064850",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T19:14:28.064850",
            "DeletedBy": null,
            "DeletedDate": null,
            "StudentId": 1
        },
        {
            "Id": 1,
            "StudentName": "ROHITH RAJ",
            "AddressType": "Permanent",
            "Country": "India",
            "State": "Kerala",
            "District": "Thrissur",
            "City": "Kodakara",
            "Street": "kodakara",
            "HouseName": "One",
            "PostOffice": "Koadakara",
            "PostalCode": "680684",
            "Status": "Created",
            "CreateBy": null,
            "CreateDate": "2021-07-14T19:14:02.305790",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T19:14:02.305790",
            "DeletedBy": null,
            "DeletedDate": null,
            "StudentId": 1
        }
    ]
}



http://127.0.0.1:8000/api/Student/DeleteStudentAddress/

Passing:

{
    "Id": 2,
    "DeletedBy": 2
}
 

Result:

{
    "Message": "Delete Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}


http://127.0.0.1:8000/api/Student/CreateAdmissionDetails/

Passing:

{
    "Id": 0,
    "FirstName": "ROHITH",
    "SecondName": "RAJ",
    "Gender": "Male",
    "DOB": "01-08-1998",
    "Nationality": "Indian",
    "Religion": "Hindhu",
    "Caste": "Ezhava",
    "FathersName": "FOne",
    "MothersName": "MOne",
    "FatherMobile": "1234567898",
    "StudentMobile": "9876541520",
    "Email": "ral@example.com",
    "AddressType": "Permanent",
    "Country": "Indian",
    "State": "Kerala",
    "District": "Thrissur",
    "City": "Kodakara",
    "Street": "Kavil Road",
    "HouseName": "One",
    "PostOffice": "Kodakara",
    "PostalCode": "680684",
    "IdentificationMark": "Nil",
    "Course": "BSC CS",
    "CourseId": "1",
    "SSLCMark": 800,
    "SSLCFile": "",
    "PlusTwoMark": 1000,
    "PlusTwoFile": "",
    "ExtraActivities": "",
    "ExrtaFile": "",
    "Note": "",
    "LastStatus": "Requested",
    "Status": "Created",
    "Image": "",
    "StatusList": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "AdmissionNo": "ADMNO002",
        "FirstName": "ROHITH",
        "SecondName": "RAJ",
        "Gender": "Male",
        "DOB": "01-08-1998",
        "Nationality": "Indian",
        "Religion": "Hindhu",
        "Caste": "Ezhava",
        "FathersName": "FOne",
        "MothersName": "MOne",
        "FatherMobile": "1234567898",
        "StudentMobile": "9876541520",
        "Email": "ral@example.com",
        "AddressType": "Permanent",
        "Country": "Indian",
        "State": "Kerala",
        "District": "Thrissur",
        "City": "Kodakara",
        "Street": "Kavil Road",
        "HouseName": "One",
        "PostOffice": "Kodakara",
        "PostalCode": "680684",
        "IdentificationMark": "Nil",
        "Course": "BSC CS",
        "CourseId": "1",
        "SSLCMark": "800",
        "SSLCFile": "",
        "PlusTwoMark": "1000",
        "PlusTwoFile": "",
        "ExtraActivities": "",
        "ExrtaFile": "",
        "Note": "",
        "LastStatus": "Requested",
        "Status": "Created",
        "Image": "",
        "StatusList": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T20:12:58.140834",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T20:12:58.145830",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Student/GetAdmissionDetailsById/

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
        "AdmissionNo": "ADMNO002",
        "FirstName": "ROHITH",
        "SecondName": "RAJ",
        "Gender": "Male",
        "DOB": "01-08-1998",
        "Nationality": "Indian",
        "Religion": "Hindhu",
        "Caste": "Ezhava",
        "FathersName": "FOne",
        "MothersName": "MOne",
        "FatherMobile": "1234567898",
        "StudentMobile": "9876541520",
        "Email": "ral@example.com",
        "AddressType": "Permanent",
        "Country": "Indian",
        "State": "Kerala",
        "District": "Thrissur",
        "City": "Kodakara",
        "Street": "Kavil Road",
        "HouseName": "One",
        "PostOffice": "Kodakara",
        "PostalCode": "680684",
        "IdentificationMark": "Nil",
        "Course": "BSC CS",
        "CourseId": "1",
        "SSLCMark": "800",
        "SSLCFile": "",
        "PlusTwoMark": "1000",
        "PlusTwoFile": "",
        "ExtraActivities": "",
        "ExrtaFile": "",
        "Note": "",
        "LastStatus": "Requested",
        "Status": "Created",
        "Image": "",
        "StatusList": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T20:12:58.140834",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T20:12:58.145830",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Student/GetAllAdmissionDetails/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "AdmissionNo": "ADMNO002",
            "FirstName": "ROHITH",
            "SecondName": "RAJ",
            "Gender": "Male",
            "DOB": "01-08-1998",
            "Nationality": "Indian",
            "Religion": "Hindhu",
            "Caste": "Ezhava",
            "FathersName": "FOne",
            "MothersName": "MOne",
            "FatherMobile": "1234567898",
            "StudentMobile": "9876541520",
            "Email": "ral@example.com",
            "AddressType": "Permanent",
            "Country": "Indian",
            "State": "Kerala",
            "District": "Thrissur",
            "City": "Kodakara",
            "Street": "Kavil Road",
            "HouseName": "One",
            "PostOffice": "Kodakara",
            "PostalCode": "680684",
            "IdentificationMark": "Nil",
            "Course": "BSC CS",
            "CourseId": "1",
            "SSLCMark": "800",
            "SSLCFile": "",
            "PlusTwoMark": "1000",
            "PlusTwoFile": "",
            "ExtraActivities": "",
            "ExrtaFile": "",
            "Note": "",
            "LastStatus": "Requested",
            "Status": "Created",
            "Image": "",
            "StatusList": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T20:12:58.140834",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T20:12:58.145830",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "AdmissionNo": null,
            "FirstName": "RAHUL",
            "SecondName": "RAJ",
            "Gender": "Male",
            "DOB": "01-07-1998",
            "Nationality": "Indian",
            "Religion": "Hindhu",
            "Caste": "Ezhava",
            "FathersName": "FOne",
            "MothersName": "MOne",
            "FatherMobile": "1234567899",
            "StudentMobile": "9876541520",
            "Email": "rahul@example.com",
            "AddressType": "Permanent",
            "Country": "Indian",
            "State": "Kerala",
            "District": "Thrissur",
            "City": "Kodakara",
            "Street": "Kavil Road",
            "HouseName": "One",
            "PostOffice": "Kodakara",
            "PostalCode": "680684",
            "IdentificationMark": "Nil",
            "Course": "BSC CS",
            "CourseId": "1",
            "SSLCMark": "800",
            "SSLCFile": "",
            "PlusTwoMark": "1000",
            "PlusTwoFile": "",
            "ExtraActivities": "",
            "ExrtaFile": "",
            "Note": "",
            "LastStatus": "Requested",
            "Status": "Created",
            "Image": "",
            "StatusList": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T20:11:43.362363",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T20:11:43.362363",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Student/DeleteAdmissionDetails/

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

http://127.0.0.1:8000/api/Student/CreateInternalNotification/

Passing:

{
    "Id": 0,
    "Date": "2021-07-25T12:51:42.390961",
    "CourseId": 1,
    "SemesterId": 2,
    "CourseCode": "CODE02",
    "SemesterNo": 3,
    "Note": "Example",
    "Status": "Active",
    "Files": "",
    "Description": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "Date": "2021-07-25T12:51:42.390961",
        "CourseCode": "CODE02",
        "SemesterNo": "3",
        "Note": "Example",
        "Status": "Active",
        "Files": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-26T13:02:37.676188",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-26T13:02:37.676188",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 2
    }
}

http://127.0.0.1:8000/api/Student/GetAllInternalNotification/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0   
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "Date": "2021-07-25T12:51:42.390961",
            "CourseCode": "CODE02",
            "SemesterNo": "3",
            "Note": "Example",
            "Status": "Active",
            "Files": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-26T13:02:37.676188",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-26T13:02:37.676188",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 2
        },
        {
            "Id": 1,
            "Date": "2021-07-25T12:51:42.390961",
            "CourseCode": "CODE01",
            "SemesterNo": "1",
            "Note": "Example",
            "Status": "Active",
            "Files": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-26T13:02:16.897011",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-26T13:02:16.897011",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        }
    ]
}

http://127.0.0.1:8000/api/Student/GetInternalNotificationById/

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
        "Date": "2021-07-25T12:51:42.390961",
        "CourseCode": "CODE02",
        "SemesterNo": "3",
        "Note": "Example",
        "Status": "Active",
        "Files": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-26T13:02:37.676188",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-26T13:02:37.676188",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 2
    }
}

http://127.0.0.1:8000/api/Student/DeleteInternalNotification/

Passing:

{
    "Id": 2
}

Result:

{
    "Message": "Delete Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}


http://127.0.0.1:8000/api/Student/CreateInternal/

Passing:

{
    "Id": 0,
    "Date": "2021-07-25T12:51:42.390961",
    "CourseId": 1,
    "StudentId": "",
    "SemesterId": 2,
    "CourseCode": "CODE02",
    "SemesterNo": 3,
    "Note": "Example",
    "Status": "Active",
    "Files": "",
    "Description": "",
    "ClassNo": 1,
    "StudentName": "RR",
    "MarkList": ""
}


Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "Date": "2021-07-25T12:51:42.390961",
        "CourseName": null,
        "SemesterNo": "3",
        "ClassNo": "1",
        "Note": "Example",
        "Status": "Active",
        "Files": "",
        "StudentName": "RR",
        "Description": "",
        "MarkList": "",
        "CreateBy": null,
        "CreateDate": "2021-07-26T13:12:34.713313",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-26T13:12:34.713313",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 2,
        "StudentId": null
    }
}

http://127.0.0.1:8000/api/Student/GetAllInternal/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0   
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 2,
    "Data": [
        {
            "Id": 2,
            "Date": "2021-07-25T12:51:42.390961",
            "CourseName": null,
            "SemesterNo": "3",
            "ClassNo": "2",
            "Note": "Example",
            "Status": "Active",
            "Files": "",
            "StudentName": "RR",
            "Description": "",
            "MarkList": "",
            "CreateBy": null,
            "CreateDate": "2021-07-26T13:14:06.663272",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-26T13:14:06.663272",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 2,
            "StudentId": null
        },
        {
            "Id": 1,
            "Date": "2021-07-25T12:51:42.390961",
            "CourseName": null,
            "SemesterNo": "3",
            "ClassNo": "1",
            "Note": "Example",
            "Status": "Active",
            "Files": "",
            "StudentName": "RR",
            "Description": "",
            "MarkList": "",
            "CreateBy": null,
            "CreateDate": "2021-07-26T13:12:34.713313",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-26T13:12:34.713313",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 2,
            "StudentId": null
        }
    ]
}


http://127.0.0.1:8000/api/Student/GetInternalById/

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
        "Date": "2021-07-25T12:51:42.390961",
        "CourseName": null,
        "SemesterNo": "3",
        "ClassNo": "2",
        "Note": "Example",
        "Status": "Active",
        "Files": "",
        "StudentName": "RR",
        "Description": "",
        "MarkList": "",
        "CreateBy": null,
        "CreateDate": "2021-07-26T13:14:06.663272",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-26T13:14:06.663272",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 2,
        "StudentId": null
    }
}


http://127.0.0.1:8000/api/Student/DeleteInternal/

Passing:

{
    "Id": 2
}

Result:

{
    "Message": "Delete Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}