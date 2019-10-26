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
        resources: [
            {
                link:
                    "https://www.bdtonline.com/news/survey-ranks-west-virginia-rd-overall-for-bullying-problems/article_81d9a866-65bb-11e6-8af6-4f1cf2fe6deb.html",
                description: "",
            },
            {
                link:
                    "https://www.cybersmile.org/advice-help/category/who-to-call",
                description: "",
            },
            {
                link:
                    "https://www.mhanational.org/bullying-what-do-if-im-bullied",
                description: "",
            },
            {
                link:
                    "https://www.stopbullying.gov/kids/what-you-can-do/index.html",
                description: "",
            },
            {
                link:
                    "https://www.helpguide.org/articles/abuse/bullying-and-cyberbullying.htm",
                description: "",
            },
        ],
    },
    {
        id: "social-media",
        name: "Social Media",
        resources: [
            {
                link:
                    "https://sysomos.com/2016/10/27/can-social-media-affect-health",
                description: "",
            },
            {
                link:
                    "https://www.creditdonkey.com/negative-effects-social-media.html",
                description: "",
            },
            {
                link:
                    "https://childmind.org/article/is-social-media-use-causing-depression/",
                description: "",
            },
        ],
    },
    {
        id: "peer-pressure",
        name: "Peer Pressure",
        resources: [
            {
                link:
                    "https://www.sageday.com/blog/peer-pressure-and-depression-in-teenagers",
                description: "",
            },
        ],
    },
    {
        id: "depression",
        name: "Depression",
        resources: [
            {
                link: "https://www.verywellmind.com/depression-4157261",
                description:
                    "A resource with a comprehensive set of articles about the causes, symptoms, and treatment of depression.",
            },
            {
                link:
                    "https://www.psychologytoday.com/us/treatment-rehab/depression/west-virginia",
                description:
                    "A list of depression treatment centers in West Virginia.",
            },
        ],
    },
    {
        id: "anxiety",
        name: "Anxiety",
        resources: [
            {
                link: "https://www.apa.org/topics/anxiety/index",
                description:
                    "This resource contains a handful of resources relating to anxiety, such as research articles and a list of publications relating to anxiety.",
            },
            {
                link:
                    "https://www.psychologytoday.com/us/treatment-rehab/anxiety/west-virginia",
                description:
                    "A list of anxiety treatment centers in West Virginia, with the ability to filter by city.",
            },
        ],
    },
    {
        id: "addiction",
        name: "Addiction",
        resources: [
            {
                link:
                    "https://www.addicted.org/directory/category/putnam-county-5.html",
                description: "",
            },
        ],
    },
    {
        id: "homelessness",
        name: "Homelessness",
        resources: [
            {
                link:
                    "https://www.wvgazettemail.com/flipside/flipside_news/teen-homelessness-is-a-major-problem-that-needs-addressed-flipside/article_8ec410dc-eb00-5aa3-96d7-bd3f828fe265.html",
                description: "",
            },
            {
                link:
                    "http://wvde.state.wv.us/federal-programs/documents/OpeningDoorsinWVPlan-FINAL-lowres.pdf",
                description: "",
            },
            {
                link:
                    "https://www.rehabcenter.net/teen-rehab-centers/west-virginia-teen-rehab-centers/",
                description: "",
            },
        ],
    },
];

// Export
export default topicData;
