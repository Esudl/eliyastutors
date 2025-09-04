function showTextbox() {
    var subjectSelect = document.getElementById("subject");
    var otherSubjectDiv = document.getElementById("otherSubjectDiv");

    if (subjectSelect.value === "other") {
        // Show the textbox when "Other" is selected
        otherSubjectDiv.style.display = "block";
    } else {
        // Hide the textbox for all other selections
        otherSubjectDiv.style.display = "none";
    }
}