// JavaScript Document





$(document).ready(function(){

	
	ReadFile();
	
	/*
	var data = "funky chicken";
	
	var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj); //turn Object into JSON
localStorage.setItem("testJSON", myJSON);
	
	*/
	
/*//NOT CURRENTLY WORKING
	

	
	$.ajax({
	  type: 'POST',
	  url: "textFiles/writeTo.txt",//url of receiver file on server
	  dataType: "text",
	  data: {data:data}, //your data
	  success: function(result) {
        alert('the data was successfully sent to the server');	
		}
    });
	
	*/
	
	function ReadFile(){
	
        $.ajax({
			
			url: "textFiles/readFrom.txt", dataType:"text", async: false, 
			success: function(result){
            $("div").html(result);
			
			
			}
		});

	}
	
	 //WRITE FILE EXAMPLE 1 W/O AJAX
	
	/*
	function WriteFile()
{

var fh = fopen("textFiles/writeTo.txt", 3); // Open the file for writing

if(fh!=-1) // If the file has been successfully opened
{
    var str = "Some text goes here...";
    fwrite(fh, str); // Write the string to a file
    fclose(fh); // Close the file 
}

}

WriteFile();
	*/
	
	
	});