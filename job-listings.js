// job-listings.js

// Sample job data (replace with your actual data)
const jobListings = [
    { id: 1, title: 'Software Engineer', company: 'TechCo', location: 'Tripur', description: 'We looking for a person who have knowledge in js.' },
    { id: 2, title: 'Full Stack Developer', company: 'DesignHub', location: 'Chennai', description: 'We looking for a person who have knowledge in both frontend and backend.' },
    { id: 3, title: 'Data Engineer', company: 'Hub', location: 'Chennai', description: 'We looking for a person who have knowledge in maintain data.' },
    
    { id: 3, title: 'Data Analyst', company: 'KPMG', location: 'Trichy', description: 'We looking for a person who have knowledge in maintain data.' },
   
]

// Function to display job listings on the page
function displayJobListings(jobs) {
    const jobListingsContainer = document.getElementById('jobListings');
    jobListingsContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        
        // Add event listener to job listing element
        jobCard.addEventListener('click', () => {
            if (job.title === 'Software Engineer') {
                // Redirect to another page (e.g., job details page for Software Engineer)
                window.location.href = 'software-engineer-details.html';
            } else {
                // Handle other job listings (if needed)
                console.log(`Clicked on ${job.title}`);
            }
        });
        jobCard.addEventListener('click', () => {
            if (job.title === 'Full Stack Developer') {
                // Redirect to another page (e.g., job details page for Software Engineer)
                window.location.href = 'fs.html';
            } else {
                // Handle other job listings (if needed)
                console.log(`Clicked on ${job.title}`);
            }
        });
        jobCard.addEventListener('click', () => {
            if (job.title === 'Data Engineer') {
                // Redirect to another page (e.g., job details page for Software Engineer)
                window.location.href = 'data.html';
            } else {
                // Handle other job listings (if needed)
                console.log(`Clicked on ${job.title}`);
            }
        });
        jobCard.addEventListener('click', () => {
            if (job.title === 'Data Analyst') {
                // Redirect to another page (e.g., job details page for Software Engineer)
                window.location.href = 'da.html';
            } else {
                // Handle other job listings (if needed)
                console.log(`Clicked on ${job.title}`);
            }
        });


        jobListingsContainer.appendChild(jobCard);
    });
}

// Function to filter jobs based on location
function filterJobs() {
    const locationFilter = document.getElementById('locationFilter');
    const selectedLocation = locationFilter.value;

    if (selectedLocation === 'all') {
        displayJobListings(jobListings);
    } else {
        const filteredJobs = jobListings.filter(job => job.location === selectedLocation);
        displayJobListings(filteredJobs);
    }
}

// Call the function to display job listings when the page loads
window.onload = function () {
    displayJobListings(jobListings);
    filterJobs(); // Call this to initialize with all jobs
};

