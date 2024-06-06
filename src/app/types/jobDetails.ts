export type JobDetails = {
    job_id: string;
    employer_name: string;
    employer_logo: null;
    employer_website: null;
    employer_company_type: null;
    job_publisher: string;
    job_employment_type: string;
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits: null;
    job_google_link: string;
    job_offer_expiration_datetime_utc: string;
    job_offer_expiration_timestamp: number;
    job_required_experience: {
      no_experience_required: boolean;
      required_experience_in_months: null;
      experience_mentioned: boolean;
      experience_preferred: boolean;
    };
    job_required_skills: null;
    job_required_education: {
      postgraduate_degree: boolean;
      professional_certification: boolean;
      high_school: boolean;
      associates_degree: boolean;
      bachelors_degree: boolean;
      degree_mentioned: boolean;
      degree_preferred: boolean;
      professional_certification_mentioned: boolean;
    };
    job_experience_in_place_of_education: boolean;
    job_min_salary: null;
    job_max_salary: null;
    job_salary_currency: null;
    job_salary_period: null;
    job_highlights: {
      Qualifications: string[];
      Responsibilities: string[];
      Benefits: string[];
    };
    job_job_title: null;
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
    job_occupational_categories: string[];
    job_naics_code: null;
    job_naics_name: null;
    estimated_salaries: {
      location: string;
      job_title: string;
      publisher_name: string;
      publisher_link: string;
      min_salary: number;
      max_salary: number;
      median_salary: number;
      salary_period: string;
      salary_currency: string;
    }[];
    apply_options: {
      publisher: string;
      apply_link: string;
      is_direct: boolean;
    }[];
    employer_reviews: any[];
  };

export type JobSummary = {
    job_id: string;
    employer_name: string;
    employer_logo: string;
    employer_website: string | null;
    employer_company_type: string | null;
    job_publisher: string;
    job_employment_type: string;
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    apply_options: {
        publisher: string;
        apply_link: string;
        is_direct: boolean;
    }[];
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits: string[] | null;
    job_google_link: string;
    job_offer_expiration_datetime_utc: string;
    job_offer_expiration_timestamp: number;
    job_required_experience: {
        no_experience_required: boolean;
        required_experience_in_months: number | null;
        experience_mentioned: boolean;
        experience_preferred: boolean;
    };
    job_required_skills: string[] | null;
    job_required_education: {
        postgraduate_degree: boolean;
        professional_certification: boolean;
        high_school: boolean;
        associates_degree: boolean;
        bachelors_degree: boolean;
        degree_mentioned: boolean;
        degree_preferred: boolean;
        professional_certification_mentioned: boolean;
    };
    job_experience_in_place_of_education: boolean;
    job_min_salary: number | null;
    job_max_salary: number | null;
    job_salary_currency: string | null;
    job_salary_period: string | null;
    job_highlights: {
        Responsibilities: string[];
        Benefits: string[];
    };
    job_job_title: string;
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
    job_occupational_categories: string[] | null;
    job_naics_code: string | null;
    job_naics_name: string | null;
}
