// Get references to form elements and output div
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var downloadResumeButton = document.getElementById('download-resume');
var shareLink = document.getElementById('share-link');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content
    resumeOutput.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n    ");
    // Create a unique sharable link
    var currentUrl = window.location.href.split('?')[0]; // Strip out any query params
    var shareUrl = "".concat(currentUrl, "?user=").concat(username);
    shareLink.href = shareUrl;
    shareLink.textContent = "Share Resume (".concat(shareUrl, ")");
});
// Handle PDF download
downloadResumeButton.addEventListener('click', function () {
    var element = document.getElementById('resume-output');
    if (element) {
        html2pdf().from(element).save('resume.pdf');
    }
});
