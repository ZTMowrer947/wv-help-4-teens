// Types
export interface Resource {
    link: string;
    description: string;
}

export interface Topic {
    id: string;
    name: string;
    resources: Resource[];
}

// Data
const topicData: Topic[] = [
    {
        id: "obesity",
        name: "Obesity",
        resources: [
            {
                link:
                    "https://www.psychologytoday.com/us/treatment-rehab/obesity/west-virginia",
                description:
                    "A list of obesity treatment centers in West Virginia.",
            },
            {
                link: "https://www.camc.org/weightloss",
                description: "",
            },
            {
                link: "https://www.stateofobesity.org/states/wv/",
                description:
                    "A set of statistics regarding obesity in West Virginia.",
            },
            {
                link: "https://www.cdc.gov/obesity/childhood/causes.html",
                description:
                    "A resource detailing the causes and consequences of childhood obesity.",
            },
        ],
    },
    {
        id: "bullying",
        name: "Bullying",
        resources: [],
    },
    {
        id: "social-media",
        name: "Social Media",
        resources: [],
    },
    {
        id: "peer-pressure",
        name: "Peer Pressure",
        resources: [],
    },
    {
        id: "depression",
        name: "Depression",
        resources: [],
    },
    {
        id: "anxiety",
        name: "Anxiety",
        resources: [],
    },
    {
        id: "addiction",
        name: "Addiction",
        resources: [],
    },
    {
        id: "homelessness",
        name: "Homelessness",
        resources: [],
    },
];

// Export
export default topicData;
