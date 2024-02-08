interface Location {
    country: string;
    city: string;
    neighborhood: string;
}

interface Dates {
    start: string;
    end?: string;
}

interface Experience {
    title: string;
    companyd: string;
    location: Location;
    dates: Dates;
    desc: string;
}

interface Education {
    schoolname: string;
    degree: string;
    field: string;
    dates: Dates;
}

interface Certificate {
    name: string;
    organization: string;
    date: string;
}

interface Talent {
    name: string;
    year: number;
}

interface Details {
    name: string;
    title: string;
    location: Location;
    email: string;
    phone: string;
    profileImage: string;
}

interface Socials {
    linkedin: string;
    github: string;
    medium: string;
    twitter: string;
    facebook: string;
    webpage: string;
}

export interface USER {
    details?: Details;
    socials?: Socials;
    about?: string;
    docs?: string[];
    savedSearches?: string[];
    applies?: string[];
    experiences?: Experience[];
    educations?: Education[];
    certificates?: Certificate[];
    talents?: Talent[];
    interests?: string[];
}
