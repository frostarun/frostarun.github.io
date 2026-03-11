import { Injectable } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  client?: string;
  period: string;
  current: boolean;
  domain: string;
  bullets: string[];
  tags: string[];
}

export interface SkillGroup {
  icon: string;
  label: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
  pct: number;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly profile = {
    name: 'Arun Kumar GR',
    title: 'Senior Software Engineer',
    years: '9+',
    location: 'Chennai, India',
    email: 'engineer.arun1995@gmail.com',
    phone: '+91 89393 85607',
    linkedin: 'https://linkedin.com/in/frostarun',
    github: 'https://github.com/frostarun',
    summary: `Self-motivated and self-taught engineer with 9+ years of experience designing and
      delivering enterprise-grade software across fintech, OTT, healthcare, and banking.
      Passionate about microservices, cloud-native architecture, and security systems.
      A collaborative team player who enjoys mentoring, leading technical discussions,
      and solving complex engineering challenges.`
  };

  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Comcast',
      period: 'Apr 2024 — Present',
      current: true,
      domain: 'OTT · Identity & Access Management',
      bullets: [
        'Building and maintaining SSO (Single Sign-On) systems for OTT platforms, enabling seamless authentication across Comcast\'s streaming products.',
        'Implementing OAuth 2.0 authorization flows including token issuance, refresh, and revocation with secure login and session management.',
        'Developing Spring Batch jobs for large-scale identity data processing and user migration pipelines.',
        'Deploying and managing serverless workloads via AWS Lambda and container images through Amazon ECR.',
        'Automating CI/CD pipelines with Jenkins for reliable, zero-downtime deployments of SSO services.'
      ],
      tags: ['OAuth2', 'Spring Boot', 'Spring Batch', 'AWS Lambda', 'ECR', 'Jenkins', 'SSO', 'Token Management']
    },
    {
      role: 'Sr. Associate — Technology',
      company: 'Synechron',
      client: 'CitiBank',
      period: 'Sep 2021 — Mar 2024',
      current: false,
      domain: 'FinTech · Forex Trading',
      bullets: [
        'Owned end-to-end delivery of Forex trading desktop and Angular-Java web applications deployed as microservices.',
        'Managed the full release lifecycle: design, code review, build, testing, deployment, monitoring, and production support.',
        'Led a cross-functional agile team; drove mentorship, technical discussions, and Jira-based sprint tracking.'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'Microservices', 'Docker', 'Kafka']
    },
    {
      role: 'Senior Software Engineer',
      company: 'SMI',
      client: 'Global Healthcare Exchange',
      period: 'Sep 2020 — Sep 2021',
      current: false,
      domain: 'Healthcare · Supply Chain',
      bullets: [
        'Built RESTful services for a healthcare supply chain platform serving hospitals and medical suppliers.',
        'Developed features, resolved bugs, and authored unit & integration test suites.',
        'Led a full dashboard revamp: analyzed legacy Angular services and redesigned the backend from the ground up.'
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'PostgreSQL']
    },
    {
      role: 'Software Associate Engineer',
      company: 'Banca Sella',
      period: 'Aug 2018 — Apr 2020',
      current: false,
      domain: 'Banking · Back Office',
      bullets: [
        'Developed batch applications to process large financial datasets, delivering POS usage analytics to customers.',
        'Designed and built the Back Office Dashboard backend — API design, development, and architectural planning.'
      ],
      tags: ['Java', 'Spring', 'Batch', 'Oracle', 'Sybase']
    },
    {
      role: 'Software Engineer',
      company: 'Corent Technologies',
      period: 'May 2016 — Jul 2018',
      current: false,
      domain: 'Cloud · SaaS',
      bullets: [
        'Migrated on-premise servers and applications to AWS, Azure, and Oracle Cloud using the SurpaaS platform.',
        'Developed Java CLI tools, shell & batch scripts, and integrated multi-cloud APIs.',
        'Built RESTful services for a multi-tenant microservice architecture; led system design and SQL optimisation.'
      ],
      tags: ['Java', 'AWS', 'Azure', 'Oracle Cloud', 'Shell', 'Microservices']
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      icon: '⚙️',
      label: 'Core Backend',
      skills: ['Java', 'Spring Boot', 'Spring Batch', 'Microservices', 'JPA', 'Hibernate', 'REST APIs', 'Swagger']
    },
    {
      icon: '🔐',
      label: 'Identity & Security',
      skills: ['OAuth 2.0', 'SSO', 'Token Management', 'Login Management', 'JWT']
    },
    {
      icon: '🗄️',
      label: 'Databases',
      skills: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'Sybase', 'Elasticsearch']
    },
    {
      icon: '📨',
      label: 'Messaging',
      skills: ['Apache Kafka', 'Solace']
    },
    {
      icon: '☁️',
      label: 'Cloud & DevOps',
      skills: ['AWS', 'AWS Lambda', 'ECR', 'Azure', 'Docker', 'Jenkins', 'TeamCity', 'UDeploy', 'Autosys', 'Splunk']
    },
    {
      icon: '🔧',
      label: 'Tools & Platforms',
      skills: ['GitHub CoPilot', 'BitBucket', 'SVN', 'Tomcat', 'Weblogic', 'Shell', 'Batch']
    },
    {
      icon: '🖥️',
      label: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS / SCSS']
    }
  ];

  readonly languages: Language[] = [
    { name: 'English',    level: 'Full Professional',     pct: 95 },
    { name: 'Tamil',      level: 'Professional Working',   pct: 85 },
    { name: 'Sourashtra', level: 'Limited Working',        pct: 40 },
    { name: 'Japanese',   level: 'Elementary',             pct: 22 }
  ];
}
