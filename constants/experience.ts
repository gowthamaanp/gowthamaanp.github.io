import { IExperience } from "@/interface/experience";

export const experiences: IExperience[] = [
    {
        title: "Research Assistant",
        company: "Medical Imaging and Reconstruction Laboratory, IIT Madras",
        period: "2024 - Present",
        location: "Chennai, India",
        description: [
            "Conducting research on image super-resolution techniques for medical imaging",
            "Developing deep learning models for chest X-ray diagnosis and analysis",
            "Working on automated medical report structuring and generation systems",
        ],
        logo: "/assets/png/iitm_logo.png",
        link: "https://ed.iitm.ac.in/~gankrish/",
        tags: ["Image Super-Resolution", "Computer Vision", "Deep Learnig", "Medical Image Analysis"],
    },
    {
        title: "Assistant Application Developer",
        company: "Aerobiosys Innovations Pvt Ltd",
        period: "Jan 2022 - Present",
        location: "Chennai & Puducherry, India",
        description: [
            "Led full-stack development of JeevanCloud Remote Patient Monitoring platform using Flutter, Django, WebSockets, Redis and PostgreSQL",
            "Engineered and deployed IoT mobile application for JeevanLite ICU medical ventilator with enhanced UI/UX",
            "Optimized embedded firmware for medical ventilator, integrating STM32 and NRF microcontrollers with sensor arrays",
        ],
        logo: "/assets/png/aerobiosys_logo.png",
        link: "https://www.aerobiosys.com",
        tags: ["Flutter", "Django", "IoT", "Embedded Systems", "Full-Stack Development"],
    },
    {
        title: "Application & Firmware Developer Intern",
        company: "Aerobiosys Innovations Private Limited",
        period: "Nov 2020 - Jan 2022",
        location: "Puducherry, India",
        description: [
            "Engineered algorithms in Embedded C for real-time flow rate and volumetry calculations in mechanical ventilation",
            "Developed frame-based data protocol with flow control and error correction for BLE communication between NRF52832 hardware and mobile application",
        ],
        logo: "/assets/png/aerobiosys_logo.png",
        link: "https://www.aerobiosys.com",
        tags: ["Embedded C", "BLE", "Firmware Development", "Medical Devices"],
    },
    {
        title: "Research Assistant",
        company: "Syntank Private Limited",
        period: "Sep 2019 - Oct 2020",
        location: "Puducherry, India",
        description: [
            "Designed and developed innovative science kits and teaching aids for middle and high school students",
            "Organized and conducted Apply Science Exhibition, a state-level science competition",
        ],
        logo: "/assets/png/syntank_logo.png",
        link: "https://www.linkedin.com/company/syntank-private-limited",
        tags: ["Education Technology", "STEM", "Curriculum Development"],
    },
];
