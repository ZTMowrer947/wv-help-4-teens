// Types
export interface Resource {
    link: string;
    displayName?: string;
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
                description:
                    "A resource by CAMC that offers tips and resources for losing weight.",
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
                link: "https://www.thehotline.org/",
                description:
                    "The website of the National Domestic Violence Hotline.",
            },
            {
                link: "tel:8007997233",
                displayName: "(800) 799-7233",
                description:
                    "The phone number of the National Domestic Violence Hotline.",
            },
            {
                link:
                    "https://www.cybersmile.org/advice-help/category/who-to-call",
                description:
                    "A collection of various helplines both inside and outside the United States.",
            },
            {
                link:
                    "https://www.mhanational.org/bullying-what-do-if-im-bullied",
                description:
                    "A list of steps to consider if you are being bullied.",
            },
            {
                link:
                    "https://www.stopbullying.gov/kids/what-you-can-do/index.html",
                description:
                    "A resource detailing what one can do if they are being bullied.",
            },
            {
                link:
                    "https://www.helpguide.org/articles/abuse/bullying-and-cyberbullying.htm",
                description:
                    "An article that defines bullying and cyberbullying, as well as providing tips on dealing with bullying.",
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
                description:
                    "An article about what effects social media can have on one's health.",
            },
            {
                link:
                    "https://www.creditdonkey.com/negative-effects-social-media.html",
                description:
                    "An article about social media and the effects it has on teens, and how to balance its use.",
            },
            {
                link:
                    "https://childmind.org/article/is-social-media-use-causing-depression/",
                description:
                    "An article about social media and depression, as well as how to avoid its negative effects.",
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
                description:
                    "A blog post about identify peer pressure and depression in teenagers",
            },
            {
                link:
                    "https://teendriving.aaa.com/WV/teens/going-solo/key-points-for-safe-driving/peer-pressure/",
                description:
                    "A list of tips to help teens with peer pressure, specifically in terms of driving.",
            },
        ],
    },
    {
        id: "depression",
        name: "Depression",
        resources: [
            {
                link: "http://www.suicidepreventionhotline.org",
                description: "The website of the Suicide Prevention Hotline.",
            },
            {
                link: "tel:+18002738255",
                displayName: "1-800-273-TALK (8255)",
                description: "The phone number of the Suicide Prevention Hotline."
            },
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
                    "http://help4wv.com/",
                description: "Resources for addiction in West Virginia. (NOTE: This resource is in no way affiliated with WV Help4Teens.)", // We should replace this one
            },
            {
                link:
                    "https://www.rehabcenter.net/teen-rehab-centers/west-virginia-teen-rehab-centers/",
                description: "A list of treatment centers in West Virgina.",
            },
        ],
    },
    {
        id: "homelessness",
        name: "Homelessness",
        resources: [
            {
                link: "https://www.hud.gov/states/west_virginia/homeless",
                description:
                    "A resource by WV Housing and Urban Development containing other resources for homelessness in West Virginia.",
            },
            {
                link:
                    "https://www.homelessshelterdirectory.org/westvirginia.html",
                description:
                    "A resource listing shelters for homelessness people in West Virginia.",
            },
            {
                link:
                    "https://www.wvgazettemail.com/flipside/flipside_news/teen-homelessness-is-a-major-problem-that-needs-addressed-flipside/article_8ec410dc-eb00-5aa3-96d7-bd3f828fe265.html",
                description:
                    "A Flipside article containing figures about teen homelessness and why it is a major issue.",
            },
        ],
    },
];

// Export
export default topicData;
