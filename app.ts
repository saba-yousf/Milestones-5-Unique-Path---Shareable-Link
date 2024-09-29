// Get references to form elements and output div
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
const downloadResumeButton = document.getElementById('download-resume') as HTMLButtonElement;
const shareLink = document.getElementById('share-link') as HTMLAnchorElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form data
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generate the resume content
    resumeOutput.innerHTML = `
        <h2 contenteditable="true">${name}</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
    `;

    // Create a unique sharable link
    const currentUrl = window.location.href.split('?')[0]; // Strip out any query params
    const shareUrl = `${currentUrl}?user=${username}`;
    shareLink.href = shareUrl;
    shareLink.textContent = `Share Resume (${shareUrl})`;
});

// Handle PDF download
downloadResumeButton.addEventListener('click', () => {
    const element = document.getElementById('resume-output');
    if (element) {
        html2pdf().from(element).save('resume.pdf');
    }
});
