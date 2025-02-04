import mail_icon from "/images/phone-png-3.png"
import myphoto from "/images/nQzb7Aej_400x400.jpg"
import github_icon from "/images/github.png"
import linkedin_icon from "/images/LinkedIn.png"
import js_icon from "/images/js-logo 1.png"
import figma_icon from "/images/figma-logo 1.png"
import nodejs_icon from "/images/node-logo 1.png"
import react_icon from "/images/Rectangle 35.png"
import redux_icon from "/images/Group 101.png"
import vscode_icon from "/images/Group 101 (1).png"
import teknolojikyemekler from "/images/teknolojik-yemekler-website.png"
import witflix from "/images/witflix.png"

const data = {
    tr: {
        header: {
            darkMode: "AYDINLIK MOD",
            lightMode: "KARANLIK MOD",
            language: {
                turkish: "ENGLISH",
                switch: "SWITCH",
            },
            buttons: {
                skills: "Yetenekler",
                projects: "Projeler",
                hireMe: "İletişim",
            },
        },
        hero: {
            name: "Berke Öz",
            photo: myphoto,
            title1: "Kahve Sever",
            title2: "Yaratıcı Düşünür",
            description:
                "Merhaba, ben Berke. Full-stack geliştiricisiyim. Hem frontend hem de backend tarafında güçlü çözümler üreterek kullanıcı dostu, verimli ve sürdürülebilir ürünler geliştirmek için buradayım. Gelin, projelerinizi birlikte bir adım ileriye taşıyalım..",
            buttons: [
                {
                    name: "İletişim",
                    key: "hireMe",
                    link: "mailto:beerkeozz@outlook.com",
                    icon: mail_icon
                },
                {
                    name: "Github",
                    key: "github",
                    link: "https://github.com/berke-oz",
                    icon: github_icon
                },
                {
                    name: "Linkedin",
                    key: "linkedin",
                    link: "https://www.linkedin.com/in/berkeozz/",
                    icon: linkedin_icon
                }
            ]
        },
        skills: {
            title: "Yetenekler",
            "skillsList": [
                {
                    "name": "JavaScript",
                    "logo": js_icon
                },
                {
                    "name": "Figma",
                    "logo": figma_icon
                },
                {
                    "name": "Node.js",
                    "logo": nodejs_icon
                },
                {
                    "name": "React",
                    "logo": react_icon
                },
                {
                    "name": "Redux",
                    "logo": redux_icon
                },
                {
                    "name": "VsCode",
                    "logo": vscode_icon
                }
            ]
        },
        profile: {
            title: "Profil",
            profileSection: {
                title: "Profil",
                birthDate: "Doğum Tarihi",
                city: "İkamet Şehri",
                education: "Eğitim Durumu",
                degree: "Mezuniyet",
                role: "Tercih Ettiği Rol",
                birthDateValue: "20.02.2001",
                cityValue: "İstanbul",
                educationValue: "İstanbul Aydın Üniversitesi. Bilgisayar Programcılığı",
                degreeValue: "2023",
                roleValue: "Frontend, Backend",
            },
            aboutSection: {
                title: "Hakkımda",
                description:
                    " Web uygulamalarını sıfırdan tasarlamak ve hayata geçirmek konusunda deneyimliyim. Hem kullanıcı dostu arayüzler hem de verimli, sürdürülebilir altyapılar kurarak projelere değer katıyorum. Teknolojiyi tutkuyla takip ederek, her zaman en iyi sonuçları elde etmeyi hedefliyorum.",
            },
        },
        projects: {
            title: "Projeler",
            projectsList: [
                {
                    name: "Teknolojik Yemekler",
                    description: "Bu projede, React, JavaScript ve CSS kullanarak Teknoloji-Yemekler adında statik bir yemek sipariş websitesi geliştirdim. Projemde yer alan her aşama, web geliştirme konusunda yeteneklerimi geliştirmeme büyük katkı sağladı.",
                    image: teknolojikyemekler,
                    tools: ["React.js", "CSS", "Cypress"],
                    github: "https://github.com/berke-oz/teknolojik-yemekler-website",
                    website: "https://teknolojik-yemekler-website-8g91.vercel.app/",
                },
                {
                    name: "Witflix",
                    description: "Witflix, temel olarak statik bir site olarak geliştirilmiş, Netflix'e benzer bir platformdur. HTML ve CSS kullanarak tasarladığım bu proje, basit ama kullanıcı dostu bir arayüz sunmayı amaçladı. Witflix, içerikleri statik bir şekilde görüntüler ve kullanıcılara film ve dizi seçenekleri sunar. Proje, benim için front-end geliştirme becerilerimi geliştirdiğim ilk adımlardan biri oldu.",
                    image: witflix,
                    tools: ["HTML", "CSS",],
                    github: "https://github.com/berke-oz/WitFlix",
                    website: "",
                },


            ],
        },
        footer: {
            text: "Birlikte çalışalım ve harika ürünler ortaya çıkaralım.",
            email: "beerkeozz@outlook.com",
            socialLinks: [
                { name: "Kişisel Blog", url: "#" },
                { name: "Github", url: "https://github.com/berke-oz" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/berkeozz/" }
            ]
        }

    },
    en: {
        header: {
            darkMode: "LIGHT MODE",
            lightMode: "DARK MODE",
            language: {
                turkish: "TÜRKÇE'YE",
                switch: " GEÇ",
            },
            buttons: {
                skills: "Skills",
                projects: "Projects",
                hireMe: "Hire Me",
            },
        },
        hero: {
            name: "Berke Öz",
            photo: myphoto,
            title1: "Coffee Lover",
            title2: "Creative Thinker",
            description:
                "Hello, I'm Berke. I'm a full-stack developer. I'm here to create strong solutions on both the frontend and backend, developing user-friendly, efficient, and sustainable products. Let's take your projects one step further together.",
            buttons: [
                {
                    name: "Hire Me",
                    key: "hireMe",
                    link: "mailto:beerkeozz@outlook.com",
                    icon: mail_icon
                },
                {
                    name: "Github",
                    key: "github",
                    link: "https://github.com/berke-oz",
                    icon: github_icon
                },
                {
                    name: "Linkedin",
                    key: "linkedin",
                    link: "https://www.linkedin.com/in/berkeozz/",
                    icon: linkedin_icon
                }
            ]
        },
        skills: {
            title: "Skills",
            "skillsList": [
                {
                    "name": "JavaScript",
                    "logo": js_icon
                },
                {
                    "name": "Figma",
                    "logo": figma_icon
                },
                {
                    "name": "Node.js",
                    "logo": nodejs_icon
                },
                {
                    "name": "React",
                    "logo": react_icon
                },
                {
                    "name": "Redux",
                    "logo": redux_icon
                },
                {
                    "name": "VsCode",
                    "logo": vscode_icon
                }
            ]
        },
        profile: {
            title: "Profile",
            profileSection: {
                title: "Profile",
                birthDate: "Date of Birth",
                city: "City of Residence",
                education: "Education",
                degree: "Degree",
                role: "Preferred Role",
                birthDateValue: "February 20, 2001",
                cityValue: "Istanbul",
                educationValue: "Istanbul Aydin Univ. Computer Programming",
                degreeValue: "2023",
                roleValue: "Frontend, Backend",
            },
            aboutSection: {
                title: "About Me",
                description:
                    "I have experience designing and bringing web applications to life from scratch. By creating both user-friendly interfaces and efficient, sustainable infrastructures, I add value to projects. I passionately follow technology and always aim to achieve the best results.",
            },
        },
        projects: {
            title: "Projects",
            projectsList: [
                {
                    name: "Teknolojik Yemekler",
                    description: " In this project, I developed a static food ordering website called Teknoloji-Yemekler using React, JavaScript, and CSS. Each stage of the project greatly contributed to improving my skills in web development. ",
                    image: teknolojikyemekler,
                    tools: ["React.js", "CSS", "Cypress"],
                    github: "https://github.com/berke-oz/teknolojik-yemekler-website",
                    website: "https://teknolojik-yemekler-website-8g91.vercel.app",
                },
                {
                    name: "Witflix",
                    description: "Witflix is essentially a static site developed as a platform similar to Netflix. Designed using HTML and CSS, this project aimed to provide a simple yet user-friendly interface. Witflix displays content statically and offers users movie and series options. The project was one of the first steps in developing my front-end development skills .",
                    image: witflix,
                    tools: ["HTML", "CSS",],
                    github: "https://github.com/berke-oz/WitFlix",
                    website: "",
                },

            ],
        },

        footer: {
            text: "Let's work together to build amazing products.",
            email: "beerkeozz@outlook.com",
            socialLinks: [
                { name: "Personal Blog", url: "#" },
                { name: "Github", url: "https://github.com/berke-oz" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/berkeozz/" }
            ]
        }
    },

};

export default data;