http://127.0.0.1:8000/api/Admin/GetSemesterByCourseId/

Passing:

{
    "CourseId": 1
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 3,
    "Data": [
        {
            "Id": 3,
            "SemesterNo": "III",
            "CourseName": "Computer Science",
            "SemesterDuration": "6 Months",
            "Status": "Created",
            "Image": "",
            "CreateBy": null,
            "CreateDate": "2021-07-22T14:50:21.510748",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:50:21.510748",
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
            "CreateDate": "2021-07-22T14:50:16.516211",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:50:16.516211",
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
            "CreateDate": "2021-07-22T14:50:09.686368",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:50:09.686368",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1
        }
    ]
}


http://127.0.0.1:8000/api/Admin/GetSubjectsBySemId/

Passing:

{
    "SemesterId": 1
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 3,
    "Data": [
        {
            "Id": 3,
            "CourseName": "Computer Science",
            "SemesterNo": "I",
            "SubjectName": "English",
            "SubjectCode": "ENG",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "CreateBy": null,
            "CreateDate": "2021-07-22T14:51:46.149910",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:51:46.149910",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        },
        {
            "Id": 2,
            "CourseName": "Computer Science",
            "SemesterNo": "I",
            "SubjectName": "Statistics",
            "SubjectCode": "STAT",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "CreateBy": null,
            "CreateDate": "2021-07-22T14:51:42.390961",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:51:42.390961",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        },
        {
            "Id": 1,
            "CourseName": "Computer Science",
            "SemesterNo": "I",
            "SubjectName": "Mathematics",
            "SubjectCode": "MAC",
            "Status": "Created",
            "Image": "",
            "Description": "NA",
            "CreateBy": null,
            "CreateDate": "2021-07-22T14:51:35.243599",
            "ModifiedBy": null,
            "ModifiedDate": "2021-07-22T14:51:35.243599",
            "DeletedBy": null,
            "DeletedDate": null,
            "CourseId": 1,
            "SemesterId": 1
        }
    ]
}