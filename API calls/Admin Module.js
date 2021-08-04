http://127.0.0.1:8000/api/Admin/CreateAdminDetails/

Passing:

{
    "Id": 0,
    "FullName": "Marigiri",
    "Mobile": 9876543210,
    "Email": "marygiricollege@gmail.com",
    "Gender": "Male",
    "DOB": "",
    "Address": "House",
    "AreaOfInterest": "",
    "Password": 123,
    "Status": "Created",
    "Image": ""
}

Result:
  
{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "FullName": "Marigiri",
        "Mobile": "9876543210",
        "Email": "marygiricollege@gmail.com",
        "Gender": "Male",
        "DOB": "",
        "Address": "House",
        "AreaOfInterest": "",
        "Password": "123",
        "Status": "Created",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-13T15:20:23.391805",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-13T15:20:23.391805",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetAdminDetailsById/

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
        "FullName": "Marigiri",
        "Mobile": "9876543210",
        "Email": "marygiricollege@gmail.com",
        "Gender": "Male",
        "DOB": "",
        "Address": "House",
        "Usertype": "Admin",
        "AreaOfInterest": "",
        "Password": "123",
        "Status": "Created",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-13T15:20:23.391805",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-13T15:24:45.925673",
        "DeletedBy": null,
        "DeletedDate": null
    }
}


http://127.0.0.1:8000/api/Admin/GetAllAdminDetails/

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
            "FullName": "Marigiri",
            "Mobile": "9876543210",
            "Email": "marygiricollege01@gmail.com",
            "Gender": "Male",
            "DOB": "",
            "Address": "House",
            "Usertype": "Admin",
            "AreaOfInterest": "",
            "Password": "123",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-13T15:27:02.897204",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-13T15:27:02.897204",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}

http://127.0.0.1:8000/api/Admin/DeleteAdminDetails/

Passing:

{
    "Id": 2,
    "DeletedBy": 1
}

Result:

{
    "Message": "Id 2 does not exist in the database",
    "Success": false,
    "TotalCount": 0,
    "Data": []
}

http://127.0.0.1:8000/api/Admin/AdminLogin/

Passing:

{
    "Username": "marygiricollege@gmail.com",
    "Password": 123
}

{
    "Message": "Login Successfully as Admin",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "FullName": "Marigiri",
        "Mobile": "9876543210",
        "Email": "marygiricollege@gmail.com",
        "Gender": "Male",
        "DOB": "",
        "Address": "House",
        "Usertype": "Admin",
        "AreaOfInterest": "",
        "Password": "123",
        "Status": "Created",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-13T15:20:23.391805",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-13T15:24:45.925673",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/AdminResetPassword/

Passing: 

{
    "Username": "marygiricollege01@gmail.com",
    "Password": 123,
    "ConfirmPassword": 123
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {}
}

http://127.0.0.1:8000/api/Admin/CreatePublications/

Passing: 

{
    "Id": 0,
    "Name": "QWERTY",
    "PublishedBy": "Students",
    "PublishedDate": "2021-007-14",
    "Status": "Created",
    "Image": "",
    "Description": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 3,
        "Name": "QWERTY",
        "PublishedBy": "Students",
        "PublishedDate": "2021-007-14",
        "Status": "Created",
        "Image": "",
        "Description": "Qwerty",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:12:39.432492",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:12:49.258416",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetPublicationsById/

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
        "Name": "QWERTY",
        "PublishedBy": "Students",
        "PublishedDate": "2021-007-14",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:12:33.313677",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:12:33.313677",
        "DeletedBy": null,
        "DeletedDate": null
    }
}


http://127.0.0.1:8000/api/Admin/GetAllPublications/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 3,
    "Data": [
        {
            "Id": 3,
            "Name": "QWERTY",
            "PublishedBy": "Students",
            "PublishedDate": "2021-007-14",
            "Status": "Created",
            "Image": "",
            "Description": "Qwerty",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:12:39.432492",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:12:49.258416",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 2,
            "Name": "QWERTY",
            "PublishedBy": "Students",
            "PublishedDate": "2021-007-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:12:37.933378",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:12:37.933378",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "Name": "QWERTY",
            "PublishedBy": "Students",
            "PublishedDate": "2021-007-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:12:33.313677",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:12:33.313677",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeletePublications/

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


http://127.0.0.1:8000/api/Admin/CreateCourses/

Passing:

{
    "Id": 0,
    "CourseName":  "Commerce",
    "CourseCode":  "BCOM001",
    "CourseDuration": "3",
    "Status": "Created",
    "Image": "",
    "Description": "NA",
    "Eligibility": "SSLC, PLUSTWO",
    "Syllabus": "NA",
    "Semesters": "6"
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 3,
        "CourseName": "Commerce",
        "CourseCode": "BCOM001",
        "CourseDuration": "3",
        "Status": "Created",
        "Image": "",
        "Description": "NA",
        "Eligibility": "SSLC, PLUSTWO",
        "Syllabus": "NA",
        "Semesters": "6",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:21:05.585926",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:21:05.585926",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetCoursesById/

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
        "CourseName": "Computer Science",
        "CourseCode": "BSCCS001",
        "CourseDuration": "3",
        "Status": "Created",
        "Image": "",
        "Description": "NA",
        "Eligibility": "SSLC, PLUSTWO",
        "Syllabus": "NA",
        "Semesters": "6",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:20:13.318128",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:20:13.318128",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetAllCourses/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 3,
    "Data": [
        {
            "Id": 3,
            "CourseName": "Commerce",
            "CourseCode": "BCOM001",
            "CourseDuration": "3",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "Eligibility": "SSLC, PLUSTWO",
            "Syllabus": "NA",
            "Semesters": "6",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:21:05.585926",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:21:05.585926",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 2,
            "CourseName": "Psychology",
            "CourseCode": "BSCPSY001",
            "CourseDuration": "3",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "Eligibility": "SSLC, PLUSTWO",
            "Syllabus": "NA",
            "Semesters": "6",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:20:42.223774",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:20:42.223774",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "CourseName": "Computer Science",
            "CourseCode": "BSCCS001",
            "CourseDuration": "3",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "Eligibility": "SSLC, PLUSTWO",
            "Syllabus": "NA",
            "Semesters": "6",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:20:13.318128",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:20:13.318128",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}

http://127.0.0.1:8000/api/Admin/DeleteCourses/

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

http://127.0.0.1:8000/api/Admin/CreateSemester/

Passing:

{
    "Id": 0,
    "SemesterNo": "IV",
    "CourseId": "1",
    "CourseName": "Computer Science",
    "SemesterDuration": "6 Months",
    "Status": "Created",
    "Image": ""
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 4,
        "SemesterNo": "IV",
        "CourseName": "Computer Science",
        "SemesterDuration": "6 Months",
        "Status": "Created",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:50:19.166163",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:50:19.166163",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1
    }
}

http://127.0.0.1:8000/api/Admin/GetSemesterById/

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
        "SemesterNo": "I",
        "CourseName": "Computer Science",
        "SemesterDuration": "6 Months",
        "Status": "Created",
        "Image": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:49:41.838169",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:49:41.838169",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1
    }
}

http://127.0.0.1:8000/api/Admin/GetAllSemester/

Passing:

{
    "PageIndex": 0,
    "PageSize": 0
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 4,
    "Data": [
        {
            "Id": 4,
            "SemesterNo": "IV",
            "CourseName": "Computer Science",
            "SemesterDuration": "6 Months",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:50:19.166163",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:50:19.166163",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1
        },
        {
            "Id": 3,
            "SemesterNo": "III",
            "CourseName": "Computer Science",
            "SemesterDuration": "6 Months",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:50:12.242684",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:50:12.242684",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1
        },
        {
            "Id": 2,
            "SemesterNo": "II",
            "CourseName": "Computer Science",
            "SemesterDuration": "6 Months",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:49:55.674200",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:49:55.674200",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1
        },
        {
            "Id": 1,
            "SemesterNo": "I",
            "CourseName": "Computer Science",
            "SemesterDuration": "6 Months",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:49:41.838169",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:49:41.838169",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeleteSemester/

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

http://127.0.0.1:8000/api/Admin/CreateSubjects/

Passing:

{
    "Id": 0,
    "CourseId": 1,
    "SemesterId": 1,
    "CourseName": "Computer Science",
    "SemesterNo": "II",
    "SubjectName": "Statistics",
    "SubjectCode": "STAT",
    "Description": "NA",
    "Status": "Created",
    "Image": ""

}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 5,
        "CourseName": "Computer Science",
        "SemesterNo": "II",
        "SubjectName": "Statistics",
        "SubjectCode": "STAT",
        "Status": "Created",
        "Image": "",
        "Description": "NA",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:57:41.640394",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:57:41.640394",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 1
    }
}

http://127.0.0.1:8000/api/Admin/GetSubjectsById/

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
        "CourseName": "Computer Science",
        "SemesterNo": "I",
        "SubjectName": "Mathematics",
        "SubjectCode": "MAC",
        "Status": "Created",
        "Image": "",
        "Description": "NA",
        "CreateBy": null,
        "CreateDate": "2021-07-14T12:56:51.125210",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T12:56:51.125210",
        "DeletedBy": null,
        "DeletedDate": null,
        "CourseId": 1,
        "SemesterId": 1
    }
}


http://127.0.0.1:8000/api/Admin/GetAllSubjects/

Passing:

{
    "PageIndex": 0,
    "PageSize": 2
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 5,
    "Data": [
        {
            "Id": 5,
            "CourseName": "Computer Science",
            "SemesterNo": "II",
            "SubjectName": "Statistics",
            "SubjectCode": "STAT",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:57:41.640394",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:57:41.640394",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        },
        {
            "Id": 4,
            "CourseName": "Computer Science",
            "SemesterNo": "II",
            "SubjectName": "English",
            "SubjectCode": "ENG",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "CreateBy": null,
            "CreateDate": "2021-07-14T12:57:30.226153",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T12:57:30.226153",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        }
    ]
}

http://127.0.0.1:8000/api/Admin/DeleteSubjects/

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


http://127.0.0.1:8000/api/Admin/CreateTestimonials/

Passing:

{
    "Id": 0,
    "Name": "RAHUL RAJ",
    "Message": "Fun",
    "Date": "2021-07-14",
    "Status": "Created",
    "Image": "",
    "Description": ""

}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "Name": "RAHUL RAJ",
        "Message": "Fun",
        "Date": "2021-07-14",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T13:03:11.071386",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T13:03:11.071386",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetTestimonialsById/

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
        "Name": "RAHUL RAJ",
        "Message": "Fun",
        "Date": "2021-07-14",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T13:02:53.650884",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T13:02:53.650884",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetAllTestimonials/

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
            "Name": "RAHUL RAJ",
            "Message": "Fun",
            "Date": "2021-07-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:03:11.071386",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:03:11.071386",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "Name": "RAHUL RAJ",
            "Message": "Fun",
            "Date": "2021-07-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:02:53.650884",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:02:53.650884",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeleteTestimonials/

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

http://127.0.0.1:8000/api/Admin/CreateEvents/

Passing:

{
    "Id": 0,
    "Name": "Test1",
    "Venue": "NA",
    "Date": "2021-07-14",
    "Status": "Created",
    "Image": "",
    "Description":""

}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "Name": "Test1",
        "Venue": "NA",
        "Date": "2021-07-14",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T13:08:22.948606",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T13:08:22.948606",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetEventsById/

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
            "Name": "Test1",
            "Venue": "NA",
            "Date": "2021-07-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:08:22.948606",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:08:22.948606",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "Name": "Test",
            "Venue": "NA",
            "Date": "2021-07-14",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:08:13.006857",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:08:13.006857",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeleteEvents/

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

http://127.0.0.1:8000/api/Admin/CreatePlacements/

Passing:

{
    "Id": 0,
    "Name": "NA",
    "Company": "Test",
    "Status": "Created",
    "Image": "",
    "Course": "CS",
    "Description": ""

}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "Name": "NA",
        "Company": "Test",
        "Status": "Created",
        "Image": "",
        "Course": "CS",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T13:29:45.719816",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T13:29:45.719816",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetPlacementsById/

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
        "Name": "NA",
        "Company": "Test",
        "Status": "Created",
        "Image": "",
        "Course": "CS",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T13:29:44.954512",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T13:29:44.954512",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetAllPlacements/

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
            "Name": "NA",
            "Company": "Test",
            "Status": "Created",
            "Image": "",
            "Course": "CS",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:29:45.719816",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:29:45.719816",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "Name": "NA",
            "Company": "Test",
            "Status": "Created",
            "Image": "",
            "Course": "CS",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T13:29:44.954512",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T13:29:44.954512",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}

http://127.0.0.1:8000/api/Admin/DeletePlacements/

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


http://127.0.0.1:8000/api/Admin/CreateEnquiry/

Passing:

{
    "Id": 0,
    "Name": "NA",
    "Status": "Created",
    "Mobile": "",
    "Image": "",
    "Description": ""

}

Resuult:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 2,
        "Name": "NA",
        "Mobile": "",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T14:13:50.800819",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T14:13:50.800819",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetEnquiryById/

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
        "Name": "NA",
        "Mobile": "",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T14:13:49.583891",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T14:13:49.583891",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetAllEnquiry/

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
            "Name": "NA",
            "Mobile": "",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T14:13:50.800819",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T14:13:50.800819",
            "DeletedBy": null,
            "DeletedDate": null
        },
        {
            "Id": 1,
            "Name": "NA",
            "Mobile": "",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T14:13:49.583891",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T14:13:49.583891",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeleteEnquiry/

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



http://127.0.0.1:8000/api/Admin/CreateDepartments/

Passing:

{
    "Id": 0,
    "DepartmentName": "CS",
    "Status": "Created",
    "HeadName": "HeadOne",
    "Image": "",
    "Description": ""

}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": {
        "Id": 1,
        "DepartmentName": "CS",
        "HeadName": "HeadOne",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T14:20:01.457528",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T14:20:01.457528",
        "DeletedBy": null,
        "DeletedDate": null
    }
}

http://127.0.0.1:8000/api/Admin/GetDepartmentsById/

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
        "DepartmentName": "CS",
        "HeadName": "HeadOne",
        "Status": "Created",
        "Image": "",
        "Description": "",
        "CreateBy": null,
        "CreateDate": "2021-07-14T14:20:01.457528",
        "ModifiedBy": null,
        "ModifiedDate": "2021-07-14T14:20:01.457528",
        "DeletedBy": null,
        "DeletedDate": null
    }
}


http://127.0.0.1:8000/api/Admin/GetAllDepartments/

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
            "DepartmentName": "CS",
            "HeadName": "HeadOne",
            "Status": "Created",
            "Image": "",
            "Description": "",
            "CreateBy": null,
            "CreateDate": "2021-07-14T14:20:39.498942",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-14T14:20:39.498942",
            "DeletedBy": null,
            "DeletedDate": null
        }
    ]
}


http://127.0.0.1:8000/api/Admin/DeleteDepartments/

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






