export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface LinkType {
    name: string;
    href: string; 
}

export interface Exercise: {
    workout: string;
    equipment: string;
    description: string;
    img: string;
    video: string;
}