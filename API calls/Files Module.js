http://127.0.0.1:8000/api/Uploads/File/

Passing:

{
	
	File: ""

}


Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": [
        "/media/Screenshot%20(14).png",
        "/media/Screenshot%20(15).png"
    ]
}


http://127.0.0.1:8000/api/Uploads/DeleteFile/


Passing:

{
    "OldName": "Screenshot (15).png"
}

Result:

{
    "Message": "Operation Successfully",
    "Success": true,
    "TotalCount": 1,
    "Data": "J:\\Freelancing\\Marygiri\\SourceCode\\Environment\\CollegeManagement\\media\\Screenshot (15).png"
}