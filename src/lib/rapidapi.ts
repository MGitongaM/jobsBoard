
export function getJobsBySearchTitle(search:string){
  const url= `https://jsearch.p.rapidapi.com/search?query=${search}%2C%20USA&page=1&num_pages=1`
  const options={
    method:'GET',
    headers:{
      "x-rapidapi-key":"e055510141mshe132965b6aee958p13cebfjsna5c96452744b",
      "x-rapidapi-host":"jsearch.p.rapidapi.com",
    }
  }
  const data= fetch(url,options).then((response)=>response.json())
  // const data= fetch(url,options).then((response)=>response.json()).catch((error)=>{return error})
  return data
}

export function getJobDetailsById(jobId:string){
  const url=`https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&extended_publisher_details=false`
  const options={
    method:'GET',
    headers:{
      "x-rapidapi-key":"e055510141mshe132965b6aee958p13cebfjsna5c96452744b",
      "x-rapidapi-host":"jsearch.p.rapidapi.com", 
  }
}
    const data= fetch(url,options).then((response)=>response.json())
    // const data= fetch(url,options).then((response)=>response.json()).catch(error=>{return error})
    return data
}

    export const allJobs= [
        {
          "job_id": "wPe8IPE9xUp6QckTAAAAAA==",
          "employer_name": "Department of Defense Education Activity",
          "employer_logo": "https://media.glassdoor.com/sqll/320562/department-of-defense-education-activity-squarelogo-1487106676230.png",
          "employer_website": "http://www.dodea.edu",
          "employer_company_type": "Education",
          "job_publisher": "USAJobs",
          "job_employment_type": "FULLTIME",
          "job_title": "Teacher (Substitute)",
          "job_apply_link": "https://www.usajobs.gov/job/768361700",
          "job_apply_is_direct": false,
          "job_apply_quality_score": 0.8781,
          "apply_options": [
            {
              "publisher": "USAJobs",
              "apply_link": "https://www.usajobs.gov/job/768361700",
              "is_direct": false
            }
          ],
          "job_description": "This announcement is for Teacher (Substitute) positions located at Cameron, North Carolina and Fort Liberty, North Carolina. **or the following schools: Albritton MS, Bowley ES, Devers ES, Gordon ES, Hampton PS, Irwin IS, Poole ES, Shughart ES, & Shughart MS.\n\nIf you do not hold a Bachelor's degree or higher from a regionally accredited college or university, please apply to the Training Instructor (Substitute) position https://www.usajobs.gov/job/768362000.",
          "job_is_remote": false,
          "job_posted_at_timestamp": 1704153600,
          "job_posted_at_datetime_utc": "2024-01-02T00:00:00.000Z",
          "job_city": "Fort Liberty",
          "job_state": "NC",
          "job_country": "US",
          "job_latitude": 35.139416,
          "job_longitude": -79.00517,
          "job_benefits": null,
          "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=teacher,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=teacher,+usa&htidocid=wPe8IPE9xUp6QckTAAAAAA%3D%3D",
          "job_offer_expiration_datetime_utc": "2024-12-31T00:00:00.000Z",
          "job_offer_expiration_timestamp": 1735603200,
          "job_required_experience": {
            "no_experience_required": false,
            "required_experience_in_months": null,
            "experience_mentioned": false,
            "experience_preferred": false
          },
          "job_required_skills": null,
          "job_required_education": {
            "postgraduate_degree": false,
            "professional_certification": false,
            "high_school": false,
            "associates_degree": false,
            "bachelors_degree": false,
            "degree_mentioned": true,
            "degree_preferred": false,
            "professional_certification_mentioned": false
          },
          "job_experience_in_place_of_education": false,
          "job_min_salary": 16.58,
          "job_max_salary": 16.58,
          "job_salary_currency": "USD",
          "job_salary_period": "HOUR",
          "job_highlights": {},
          "job_job_title": "Teacher",
          "job_posting_language": "en",
          "job_onet_soc": "25203100",
          "job_onet_job_zone": "4",
          "job_occupational_categories": null,
          "job_naics_code": "61",
          "job_naics_name": "Education"
        },
        {
          "job_id": "1J52Ov9gCxskCRjDAAAAAA==",
          "employer_name": "Forest Service",
          "employer_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_the_United_States_Forest_Service.svg/1200px-Logo_of_the_United_States_Forest_Service.svg.png",
          "employer_website": "http://www.usda.gov",
          "employer_company_type": "Construction",
          "job_publisher": "USAJobs",
          "job_employment_type": "FULLTIME",
          "job_title": "Teacher",
          "job_apply_link": "https://www.usajobs.gov/job/776463200",
          "job_apply_is_direct": false,
          "job_apply_quality_score": 0.8394,
          "apply_options": [
            {
              "publisher": "USAJobs",
              "apply_link": "https://www.usajobs.gov/job/776463200",
              "is_direct": false
            }
          ],
          "job_description": "THIS IS AN OPEN CONTINUOUS ANNOUNCEMENT. APPLICATIONS WILL EXPIRE EVERY 90 DAYS. IN ORDER TO REMAIN IN CONSIDERATION, APPLICANTS MUST RESUBMIT THEIR APPLICATIONS.\n\nThe incumbent is responsible for providing classroom instruction to students in a variety of academic subjects.\n\nFor additional information about Job Corps Civilian Conservation Centers and locations click here. For additional information on the duties of the position, contact Scott Palmer scott.palmer@usda.gov.",
          "job_is_remote": false,
          "job_posted_at_timestamp": 1708905600,
          "job_posted_at_datetime_utc": "2024-02-26T00:00:00.000Z",
          "job_city": "Harpers Ferry",
          "job_state": "WV",
          "job_country": "US",
          "job_latitude": 39.32538,
          "job_longitude": -77.738884,
          "job_benefits": null,
          "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=teacher,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=teacher,+usa&htidocid=1J52Ov9gCxskCRjDAAAAAA%3D%3D",
          "job_offer_expiration_datetime_utc": "2025-02-25T00:00:00.000Z",
          "job_offer_expiration_timestamp": 1740441600,
          "job_required_experience": {
            "no_experience_required": false,
            "required_experience_in_months": null,
            "experience_mentioned": true,
            "experience_preferred": false
          },
          "job_required_skills": null,
          "job_required_education": {
            "postgraduate_degree": false,
            "professional_certification": false,
            "high_school": false,
            "associates_degree": false,
            "bachelors_degree": false,
            "degree_mentioned": true,
            "degree_preferred": false,
            "professional_certification_mentioned": true
          },
          "job_experience_in_place_of_education": false,
          "job_min_salary": 59966,
          "job_max_salary": 59966,
          "job_salary_currency": "USD",
          "job_salary_period": "YEAR",
          "job_highlights": {
            "Responsibilities": [
              "The incumbent is responsible for providing classroom instruction to students in a variety of academic subjects"
            ]
          },
          "job_job_title": "Teacher",
          "job_posting_language": "en",
          "job_onet_soc": "25202100",
          "job_onet_job_zone": "4",
          "job_occupational_categories": null,
          "job_naics_code": "23",
          "job_naics_name": "Construction"
        },
    ]


export const data={
    "job_id": "7oKm_SkxjLxpFtVuAAAAAA==",
    "employer_name": "SynergisticIT",
    "employer_logo": null,
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "ZipRecruiter",
    "job_employment_type": "FULLTIME",
    "job_title": "PYTHON DEVELOPER(ENTRY LEVEL)",
    "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.578,
    "job_description": "SynergisticIT is committed to fast track your career by increasing your career prospects. We provide a broad spectrum of career advancement solutions. Whether you are struggling to find a job or hustling to get noticed by the hiring managers, we can help you stand out in your professional endeavors.\nTrusted by thousands of tech enthusiasts, SynergisticIT can bridge your skill and knowledge gap to make you competent for high-tech jobs. Our invaluable business acumen helps us assist thriving job seekers in achieving their career goals.\nCurrently, we are looking for adept entry-level Python Developers to work with our elite group of clients, namely Client, PayPal, Expedia Group, Google, Apple, Cognizant, Ford, Cisco, Walmart Labs, etc.\n\nRequired Qualifications and Background\n• Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,\n• Mathematics or Statistics background\nSkills Required\n• 0 to 2 years of experience in Python development\n• Deep understanding of the software development life cycle\n• Knowledge of Linear Algebra, Statistics, and Mathematics concepts\n• Excellent written and verbal communication skills\n• Technically inquisitive, self-learner, team player, and highly motivated\n• Strong work ethics and creative problem-solving abilities\n\nPreferred Skills\n• Deep Learning\n• Data visualization\n• Scala\n• NLP\n• Django\n• Roles and Responsibilities\nAs an entry-level Python Developer, you need to perform the following duties:\n• Write server-side web application logic\n• Write scalable and effective codes in Python\n• Develop backend components to boost overall application's performance\n• Executing tests and fixing bugs in applications and software\n• Implement data protection and security solutions\n• Connect applications with third-party web services\n• Support frontend developers by integrating UI elements into Python applications\n\nBenefits\n• Competitive salary\n• Flexible work schedule & part-time off\n• E-verified\n• H1B Filing\n• No relocation\n• On job technical support\n• Skill Enhancement\n• Opportunity to work with Fortune 500 Companies\n\nWho can apply?\nThis job opportunity is best suited for recent IT graduates who want to make a mark in the tech industry and upskill their IT talent. Anyone with a basic knowledge of Python programming or having some experience in building Python software solutions can apply for this position.\nNo third-party candidates or c2c candidates\n\nIf you are interested, please apply to the posting.\n\nNo phone calls please, Shortlisted candidates would be reached out.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1627023600,
    "job_posted_at_datetime_utc": "2021-07-23T07:00:00.000Z",
    "job_city": "Austin",
    "job_state": "TX",
    "job_country": "US",
    "job_latitude": 30.267153,
    "job_longitude": -97.74306,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&q=7oKm_SkxjLxpFtVuAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=7oKm_SkxjLxpFtVuAAAAAA%3D%3D&htidocid=7oKm_SkxjLxpFtVuAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-06-13T00:00:00.000Z",
    "job_offer_expiration_timestamp": 1718236800,
    "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
        "Qualifications": [
            "Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,",
            "Mathematics or Statistics background",
            "0 to 2 years of experience in Python development",
            "Deep understanding of the software development life cycle",
            "Knowledge of Linear Algebra, Statistics, and Mathematics concepts",
            "Excellent written and verbal communication skills",
            "Technically inquisitive, self-learner, team player, and highly motivated",
            "Strong work ethics and creative problem-solving abilities",
            "Support frontend developers by integrating UI elements into Python applications"
        ],
        "Responsibilities": [
            "As an entry-level Python Developer, you need to perform the following duties:",
            "Write server-side web application logic",
            "Write scalable and effective codes in Python",
            "Develop backend components to boost overall application's performance",
            "Executing tests and fixing bugs in applications and software",
            "Implement data protection and security solutions",
            "Connect applications with third-party web services"
        ],
        "Benefits": [
            "Competitive salary",
            "Flexible work schedule & part-time off",
            "No relocation",
            "On job technical support",
            "Opportunity to work with Fortune 500 Companies"
        ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_occupational_categories": [
        "15-1132.00: Software Developers, Applications"
    ],
    "job_naics_code": null,
    "job_naics_name": null,
    "estimated_salaries": [
        {
            "location": "Austin, TX",
            "job_title": "Entry Level Python Developer",
            "publisher_name": "Salary.com",
            "publisher_link": "https://www.salary.com/research/salary/posting/entry-level-python-developer-salary/austin-tx",
            "min_salary": 101182,
            "max_salary": 131884,
            "median_salary": 113690,
            "salary_period": "YEAR",
            "salary_currency": "USD"
        },
        {
            "location": "Austin, TX",
            "job_title": "Junior Python Developer",
            "publisher_name": "ZipRecruiter",
            "publisher_link": "https://www.ziprecruiter.com/Salaries/Junior-Python-Developer-Salary-in-Austin,TX",
            "min_salary": 54020,
            "max_salary": 114980,
            "median_salary": 86315,
            "salary_period": "YEAR",
            "salary_currency": "USD"
        }
    ],
    "apply_options": [
        {
            "publisher": "ZipRecruiter",
            "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
            "is_direct": false
        }
    ],
    "employer_reviews": []
}
