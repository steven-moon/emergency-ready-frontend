const yearsTitle = () => {
    return yearsInBusiness() + ' years'
}

const yearsDescription = () => {
    return 'Founded in 2008 we have been creating Mobile and Web Apps for ' + yearsInBusiness() + 'years.'
}

const yearsInBusiness = () => {
    return (new Date().getFullYear() - 2008)
}

export default () => ({
    images: [
        'images/temp/about-bg.png',
        'images/temp/career-1.jpg',
        'images/temp/career-2.jpg',
        'images/temp/focus-group.jpg',
        'images/temp/intro-android-app-development.png',
        'images/temp/intro-android-developers.png',
        'images/temp/intro-android-development.png',
        'images/temp/intro-app-design.png',
        'images/temp/intro-app-developers.png',
        'images/temp/intro-app-development-consulting.png',
        'images/temp/intro-approach.jpg',
        'images/temp/intro-billing-models.jpg',
        'images/temp/intro-blog.jpg',
        'images/temp/intro-careers.jpg',
        'images/temp/intro-contactus.jpg',
        'images/temp/intro-custom-app-development.png',
        'images/temp/intro-dedicated-resources.png',
        'images/temp/intro-design-to-html.png',
        'images/temp/intro-design-to-reactive.png',
        'images/temp/intro-emergency.jpg',
        'images/temp/intro-featured.jpg',
        'images/temp/intro-ios-app-development.png',
        'images/temp/intro-ios-developers.png',
        'images/temp/intro-ios-development.png',
        'images/temp/intro-ipad-app-development.png',
        'images/temp/intro-ipad-developers.png',
        'images/temp/intro-iphone-app-development.png',
        'images/temp/intro-iphone-developers.png',
        'images/temp/intro-iphone-development.png',
        'images/temp/intro-legacy-upgrades.png',
        'images/temp/intro-maintenance-and-support.png',
        'images/temp/intro-mobile-app.jpg',
        'images/temp/intro-mobile-app-development.png',
        'images/temp/intro-mobile-developers.png',
        'images/temp/intro-mobile-development.png',
        'images/temp/intro-platform.jpg',
        'images/temp/intro-project-rescues.png',
        'images/temp/intro-prototype.png',
        'images/temp/intro-prototyping.png',
        'images/temp/intro-services.jpg',
        'images/temp/intro-testimonials.jpg',
        'images/temp/intro-web-app-development.png',
        'images/temp/intro-web-developers.png',
        'images/temp/intro-web-development.png',
        'images/temp/post-1.jpg',
    ],
    pagesViewed: [],
    whoIsCleverCoding: {
        title: 'Who is Clever Coding?',
        description: 'We are an app development company focused on Native iOS Apps, Native Android Apps, Highly Responsive - Light Weight - Scalable Cloud APIs and React Web Apps. We are dedicated to delivering high quality apps that are built to scale from the ground up using current industry standards.',
        cards: [
            {
                title: yearsTitle(),
                description: yearsDescription(),
                icon: 'icon-calendar'
            },
            {
                title: 'Senior Developers',
                description: 'Our average developer has 9+ years of mobile/web experience and 15+ years of overall development experience.',
                icon: 'icon-square-dev',
            },
            {
                title: 'Experience',
                description: 'Since 2008 we have worked on 400+ projects. These projects span all industries, technologies and budgets.',
                icon: 'icon-virtual-reality',
            },
            {
                title: 'Customer Focused',
                description: 'We work diligently to make sure and take care of our customers.',
                icon: 'icon-customer-support',
            },
            {
                title: 'Long term partnership',
                description: 'Our primary goal with new clients is to form a long term partnership. Our average customer has been working with us for 5+ years.',
                icon: 'icon-privacy',
            },
            {
                title: 'Limited projects',
                description: 'We only accept a limited number of new clients each year. We focus on working with companies wo are looking for long term development partner. We limit the number of active projects so that we can focus on providing high quality personal service to each client.',
                icon: 'icon-list-numbers',
            }
        ],
        media: {
            entry: "Check out our downloadable PDF or our promotional video for more information.",
            pdf: "/Who_Is_Clever_Coding.pdf",
            video: "https://www.youtube.com/embed/Z0jxGskF2IE"
        }
    },
    technologiesUsed: {
        title: "The technology platforms we use",
        description: "As a mobile app development company, we stay on the cutting edge of technology. To help us with our goals, we enhance our capabilities by working with various programming languages, platforms, and new technologies. Check out the list below to see which ones we utilize.",
        variants: [
            {
                icon: 'icon-mobile-device',
                title: "Mobile development",
                list: [
                    'iOS',
                    'Android',
                    'Cordova',
                    'Ionic'
                ]
            },
            {
                icon: 'icon-desktop-device',
                title: "Web platform",
                list: [
                    'VueJS',
                    'NodeJs',
                    'React',
                    'Angular'
                ]
            },
            {
                icon: 'icon-html-code',
                title: "Programming languages",
                list: [
                    'iOS',
                    'Objective C',
                    'Swift',
                    'Java',
                    'Kotlin',
                    'PHP'
                ]
            },
            {
                icon: 'icon-relations',
                title: "Technologies",
                list: [
                    'REST',
                    'SQL',
                    'SwiftUI',
                    '?'
                ]
            }
        ]
    },
    hireCallout: {
        title: "Want to develop a custom mobile or web app?",
        image: '/images/temp/callout.jpg'
    },
    developmentCycle: {
        title: "Our mobile and web app development cycle",
        description: "We take a systematic and structured aproach to complex and simple projects. We use agile development methodologies to build and grow exceptional apps incrementally and efficiently.",
        alt: [""],
        steps: [
            {
                name: "PLAN",
                text: "Discover & Define"
            },
            {
                name: "Design",
                text: "Create Visuals"
            },
            {
                name: "BUILD",
                text: "Develop & Test"
            },
            {
                name: "LAUNCH",
                text: "Optimize & Go Live"
            }
        ]
    },
    ceoData: {
        name: "Steven Moon",
        title: "CEO & Founder",
        image: '/images/steve-moon.jpg',
        alt: ["Steve Moon"],
        descriptions: [
            "In the summer of 2000 Steve got his first software development job in BYU's IT Department. Working on the school's PeopleSoft Team. He then work for a consulting firm installing a cutting edge PeopleSoft HR plugin at Oklahoma Univerity, University of Houston and BYU EFY.",
            "In the summer of 2008 when Apple opened up the App Store to third party developers Steve could immediate see what a game changer the iPhone would be. After creating one of the first 2000 apps on the App Store Steve quit his job and founded Clever Coding.",
            "Steve's passion at work is learning new technologies and coding as often as he can. Steve did a lot of web development prior to starting Clever Coding but for the first 9 years of the business primarily did Native iOS and Native Android Development. The last few years he has feel in love with creating Reactive Web Apps that uses highly scalable Cloud APIs build using Amazon Web Services.",
            "Steve still personally talks to all new potential clients and personally puts together a free no obligation quote based on the experience he has gained estimating and overseeing hundreds of projects."
        ]
    },
    pages: {
        privacyPolicy: {
            title: 'Privacy Policy',
            description: '',
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Privacy Policy Effective Date 1/1/2022',
                    description: 'This privacy policy (“Policy”) describes how Clever Coding (“Clever Coding”, “we”, “us” or “our”) collects,' +
                        ' protects and uses the personally identifiable information (“Personal Information”) you (“User”, “you” or “your”)' +
                        ' may provide on the clevercoding.com website and any of its advertising, products, or services (collectively,' +
                        ' “Website” or “Services”).' +
                        ' It also describes the choices available to you regarding our use of your Personal Information and how you can' +
                        ' access and update this information. This Policy does not apply to the practices of companies that we do not' +
                        'own or control, or to individuals that we do not employ or manage',
                    icon: ''
                },
                {
                    title: 'Automatic collection of information',
                    description: 'When you visit the Website our servers automatically record information that your browser sends. This data' +
                        ' may include information such as your device’s IP address, browser type and version, operating system type' +
                        ' and version, language preferences or the webpage you were visiting before you came to our Website, pages of' +
                        ' our Website that you visit, the time spent on those pages, information you search for on or Website, access' +
                        ' times and dates, and other statistics.' +
                        ' We also may use these technologies to collect information about your online activities over time and across' +
                        ' third-party websites or other online services (behavioral tracking). If you would like to opt out of behavioral' +
                        ' tracking, email us at contact@clevercoding.com for a summary of your options.' +
                        ' Information collected automatically may include personal information or we may maintain it or associate it with' +
                        ' personal information we collect in other ways or receive from third parties. It helps us improve our Website and' +
                        ' deliver a better and more personalized service. It is also used to identify potential cases of abuse and establish' +
                        ' statistical information regarding Website usage.',
                    icon: ''
                },
                {
                    title: 'Collection of personal information',
                    description: 'You can visit the Website without telling us who you are or revealing any information by which someone could' +
                        ' identify you as a specific, identifiable individual. If, however, you wish to use some of the Website’s features,' +
                        ' you may be asked to provide certain Personal Information (for example, your name and e-mail address). We' +
                        ' receive and store any information you provide to us when you fill any online forms on the Website.  When' +
                        ' required, this information may include the following:',
                    content: '<ul class="text-left">' +
                        '<li>Personal details such as name, country of residence, etc.</li>' +
                        '<li>Contact information such as email address, address, etc.</li>' +
                        '<li>Any other materials you willingly submit to us such as articles, images, feedback, etc.</li>' +
                        '</ul> <br>' +
                        ' You can choose not to provide us with your Personal Information, but then you may not be able to take' +
                        ' advantage of some of the Website’s features. Users who are uncertain about what information is mandatory' +
                        ' are welcome to contact us.',
                    icon: ''
                },
                {
                    title: 'Storing personal information',
                    description: 'We will retain and use your Personal Information for the period necessary to comply with our legal obligations,' +
                        ' resolve disputes, and enforce our agreements unless a longer retention period is required or permitted by law.' +
                        ' We may use any aggregated data derived from or which incorporates your Personal Information after you' +
                        ' update or delete it, but not in a manner that would identify you personally. Once the retention period expires,' +
                        ' Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to' +
                        ' rectification, and the right to data portability cannot be enforced after the expiration of the retention period.',
                    icon: ''
                },
                {
                    title: 'Use and processing of collected information',
                    description: 'In order to make our Website and Services available to you, or to meet a legal obligation, we need to collect ' +
                        ' and use certain Personal Information. If you do not provide the information that we request, we may not be ' +
                        ' able to provide you with the requested products or services. Some of the information we collect is directly from ' +
                        ' you via our Website. However, we may also collect Personal Information about you from other sources. Any of ' +
                        ' the information we collect from you may be used for the following purposes:',
                    content: '<ul class="text-left">' +
                        '<li>Deliver products or services</li>' +
                        '<li>Improve products and services</li>' +
                        '<li>Send administrative information</li>' +
                        '<li>Send marketing and promotional communications</li>' +
                        '<li>Respond to inquiries and offer support</li>' +
                        '<li>Request user feedback</li>' +
                        '<li>Improve user experience</li>' +
                        '<li>Post customer testimonials</li>' +
                        '<li>Deliver targeted advertising</li>' +
                        '<li>Administer prize draws and competitions</li>' +
                        '<li>Enforce terms and conditions and policies</li>' +
                        '<li>Protect from abuse and malicious users</li>' +
                        '<li>Respond to legal requests and prevent harm</li>' +
                        '<li>Run and operate our Website and Services</li>' +
                        '</ul> <br>' +
                        'Processing your Personal Information depends on how you interact with our Website, where you are located in' +
                        ' the world and if one of the following applies: (i) You have given your consent for one or more specific purposes.' +
                        ' This, however, does not apply, whenever the processing of Personal Information is subject to European data' +
                        ' protection law; (ii) Provision of information is necessary for the performance of an agreement with you and/or' +
                        ' for any pre-contractual obligations thereof; (iii) Processing is necessary for compliance with a legal obligation' +
                        ' to which you are subject; (iv) Processing is related to a task that is carried out in the public interest or in the' +
                        ' exercise of official authority vested in us; (v) Processing is necessary for the purposes of the legitimate' +
                        ' interests pursued by us or by a third party. <br><br>' +
                        'Note that under some legislation we may be allowed to process information until you object to such processing' +
                        ' (by opting out), without having to rely on consent or any other of the following legal bases below. In any case,' +
                        ' we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the' +
                        ' provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter' +
                        ' into a contract.',
                    icon: ''
                },
                {
                    title: 'The rights of users',
                    description: 'You may exercise certain rights regarding your information processed by us. In particular, you have the right to' +
                        ' do the following: (i) you have the right to withdraw consent where you have previously given your consent to' +
                        ' the processing of your information; (ii) you have the right to object to the processing of your information if the' +
                        ' processing is carried out on a legal basis other than consent; (iii) you have the right to learn if information is' +
                        ' being processed by us, obtain disclosure regarding certain aspects of the processing and obtain a copy of the' +
                        ' information undergoing processing; (iv) you have the right to verify the accuracy of your information and ask for' +
                        ' it to be updated or corrected; (v) you have the right, under certain circumstances, to restrict the processing of' +
                        ' your information, in which case, we will not process your information for any purpose other than storing it; (vi)' +
                        ' you have the right, under certain circumstances, to obtain the erasure of your Personal Information from us;' +
                        ' (vii) you have the right to receive your information in a structured, commonly used and machine readable' +
                        ' format and, if technically feasible, to have it transmitted to another controller without any hindrance. This' +
                        ' provision is applicable provided that your information is processed by automated means and that the' +
                        ' processing is based on your consent, on a contract which you are part of or on pre-contractual obligations' +
                        ' thereof. <br> <br>' +
                        'Nevada residents who wish to exercise their sale opt-out rights under Nevada Revised Statutes Chapter 603A' +
                        ' may submit a request to this designated address:contact@clevercoding.com.',
                    icon: ''
                },
                {
                    title: 'Privacy of children',
                    description: 'Our Website is not intended for children under the age of 13. We do not knowingly collect any Personal' +
                        ' Information from children under the age of 13. If you are under the age of 13, please do not submit any' +
                        ' Personal Information through our Website. We encourage parents and legal guardians to monitor their' +
                        ' children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal' +
                        ' Information through our Website or Service without their permission. <br> <br>' +
                        'If you have reason to believe that a child under the age of 13 has provided Personal Information to us through' +
                        ' our Website, please contact us. You must also be old enough to consent to the processing of your Personal' +
                        ' Information in your country (in some countries we may allow your parent or guardian to do so on your behalf).',
                    icon: ''
                },
                {
                    title: 'Newsletters',
                    description: 'We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to' +
                        ' keeping your e-mail address confidential and will not disclose your email address to any third parties except as' +
                        ' allowed in the information use and processing section or for the purposes of utilizing a third-party provider to' +
                        ' send such emails. We will maintain the information sent via e-mail in accordance with applicable laws and' +
                        ' regulations. <br><br>' +
                        ' In compliance with the CAN-SPAM Act, all e-mails sent from us will clearly state who the e-mail is from and' +
                        ' provide clear information on how to contact the sender. You may choose to stop receiving our newsletter or' +
                        ' marketing emails by following the unsubscribe instructions included in these emails or by contacting us.',
                    icon: ''
                },
                {
                    title: 'Cookies',
                    description: 'The Website uses “cookies” to help personalize your online experience. A cookie is a text file that is placed on' +
                        ' your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your' +
                        ' computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that' +
                        ' issued the cookie to you. <br><br>' +
                        'We may use cookies to collect, store, and track information for statistical purposes to operate our Website and' +
                        ' Services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies,' +
                        ' but you can usually modify your browser setting to decline cookies if you prefer. To learn more about cookies' +
                        ' and how to manage them, visit internetcookies.org. <br><br>' +
                        'In addition to using cookies and related technologies as described above, we also may permit certain' +
                        ' third-party companies to help us tailor advertising that we think may be of interest to users and to collect and' +
                        ' use other data about user activities on the Website. These companies may deliver ads that might also place' +
                        ' cookies and otherwise track user behavior.',
                    icon: ''
                },
                {
                    title: 'Do Not Track signals',
                    description: 'Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to' +
                        ' have your online activity tracked. Tracking is not the same as using or collecting information in connection with' +
                        ' a website. For these purposes, tracking refers to collecting personally identifiable information from consumers' +
                        ' who use or visit a website or online service as they move across different websites over time. How browsers' +
                        ' communicate the Do Not Track signal is not yet uniform. As a result, this Website is not yet set up to interpret' +
                        ' or respond to Do Not Track signals communicated by your browser. Even so, as described in more detail' +
                        ' throughout this Policy, we limit our use and collection of your personal information.',
                    icon: ''
                },
                {
                    title: 'Links to other websites',
                    description: 'Our Website contains links to other websites that are not owned or controlled by us. Please be aware that we' +
                        ' are not responsible for the privacy practices of such other websites or third-parties. We encourage you to be' +
                        ' aware when you leave our Website and to read the privacy statements of each and every website that may' +
                        ' collect Personal Information.',
                    icon: ''
                },
                {
                    title: 'Information security',
                    description: 'We secure information you provide on computer servers in a controlled, secure environment, protected from' +
                        ' unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical' +
                        ' safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal' +
                        ' Information in its control and custody. However, no data transmission over the Internet or wireless network can' +
                        ' be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there' +
                        ' are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and' +
                        ' privacy of any and all information and data exchanged between you and our Website cannot be guaranteed;' +
                        ' and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best' +
                        ' efforts.',
                    icon: ''
                },
                {
                    title: 'Data breach',
                    description: 'In the event we become aware that the security of the Website has been compromised or users Personal' +
                        ' Information has been disclosed to unrelated third parties as a result of external activity, including, but not' +
                        ' limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including,' +
                        ' but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement' +
                        ' authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we' +
                        ' believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise' +
                        ' required by law. When we do, we will post a notice on the Website.',
                    icon: ''
                },
                {
                    title: 'Legal disclosure',
                    description: 'We will disclose any information we collect, use or receive if required or permitted by law, such as to comply' +
                        ' with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to' +
                        ' protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government' +
                        ' request. In the event we go through a business transition, such as a merger or acquisition by another company,' +
                        ' or sale of all or a portion of its assets, your user account, and Personal Information will likely be among the' +
                        ' assets transferred.',
                    icon: ''
                },
                {
                    title: 'Changes and amendments',
                    description: 'We may update this Privacy Policy from time to time in our discretion and will notify you of any material' +
                        ' changes to the way in which we treat Personal Information. When changes are made, we will revise the' +
                        ' updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion,' +
                        ' such as through contact information you have provided. Any updated version of this Privacy Policy will be' +
                        ' effective immediately upon the posting of the revised Privacy Policy unless otherwise specified. Your continued' +
                        ' use of the Website or Services after the effective date of the revised Privacy Policy (or such other act specified' +
                        ' at that time) will constitute your consent to those changes. However, we will not, without your consent, use' +
                        ' your Personal Data in a manner materially different from what was stated at the time your Personal Data was' +
                        ' collected.',
                    icon: ''
                },
                {
                    title: 'Acceptance of this policy',
                    description: 'We may update this Privacy Policy from time to time in our discretion and will notify you of any material' +
                        ' changes to the way in which we treat Personal Information. When changes are made, we will revise the' +
                        ' updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion,' +
                        ' such as through contact information you have provided. Any updated version of this Privacy Policy will be' +
                        ' effective immediately upon the posting of the revised Privacy Policy unless otherwise specified. Your continued' +
                        ' use of the Website or Services after the effective date of the revised Privacy Policy (or such other act specified' +
                        ' at that time) will constitute your consent to those changes. However, we will not, without your consent, use' +
                        ' your Personal Data in a manner materially different from what was stated at the time your Personal Data was' +
                        ' collected.',
                    icon: ''
                },
                {
                    title: 'Contacting us',
                    description: 'If you would like to contact us to understand more about this Policy or wish to contact us concerning any' +
                        ' matter relating to individual rights and your Personal Information, you may send an email to' +
                        ' contact@clevercoding.com. <br><br>' +
                        ' This page was last updated on January 1, 2022',
                    icon: ''
                },]
        },
        aboutUs: {
            title: "Welcome to Clever Coding – Your Blockchain and AI Partner",
            largeTitle: "",
            description: "<h3>Empowering Businesses Since 2008</h3>" +
                "<p> Are you ready to transform your digital presence? Look no further! Clever Coding is here to turn your app idea into a reality. For the past 15 years, we have crafted exceptional app experiences for clients worldwide, solidifying our reputation as industry leaders in iOS, Android, and Web app development.</p> " +
                "<p> With hundreds of successful apps under our belt, our team of skilled developers, designers, and strategists know how to take your app idea from concept to reality. We pride ourselves on our ability to consistently deliver top-notch, tailor-made solutions that give our clients a competitive edge in the ever-evolving app market. </p>" +
                "<h3>Focosed on Blockchain and AI Development</h3>" +
                "<p> Talk to us today about how AI integrations can super charge your business. <a href='/ai-development/ai-services'>Click Here to Learn More</a></p> " +
                "<p> Need a decentralized app built.  We got you covered.  <a href='/blockchain-development/blockchain-services'>Click Here to Learn More</a></p>" +
                "<h3>Customized Solutions to Fit Your Needs</h3>" +
                "<p> At Clever Coding, we believe in the power of innovation. We specialize in creating stunning, user-friendly apps for iOS, Android, and the Web, ensuring that your brand shines across all platforms. Our deep understanding of the latest trends, technologies, and industry standards guarantees that your app will be as unique as your business. </p>" +
                "<p> Our commitment to excellence is evident in our impressive portfolio of satisfied clients. We've built a legacy of delivering top-quality, custom app solutions that consistently exceed expectations. With Clever Coding, you can trust that your project is in the hands of experts who genuinely care about your success. </p>" +
                "<h3>Ready to Launch Your App? Get Started Today!</h3>" +
                "<p>It's time to elevate your business with a powerful, cutting-edge app that sets you apart from the competition. Join the ranks of our happy clients who have benefited from our unparalleled expertise, and let Clever Coding turn your app idea into reality.</p> " +
                "<p>Don't wait! Contact us now for a free consultation and let's get your project off the ground!</p>",
            image: '',
            alt: ["Mobile App Developers"],
            meta: {
                title: "The Clever Coding Story",
                description: 'Clever Coding has been developing world class mobile & desktop apps since 2008. With over __ years experience, our developers turn your app idea into a reality. '
            }
        },
        androidDevelopment: {
            title: 'Android App Development',
            description: 'Creating amazing android apps since 2008',
            image: '/images/temp/intro-android-app-development.png',
            alt: ["Team of android software and mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Android App Development Overview',
                    description: 'Clever Coding has offered android app development services since 2008. We have provided android app development services for clients around the world. ' +
                        'If you need android app development services you have come to the right place. When you hire us for your android app development needs you are hiring the best. ' +
                        'Our goal is to turn your Android app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise in Android App Development',
                    description: 'Since 2008 we have built hundreds of Android apps that cover the spectrum of what is possible.  We like to say “if you can dream it up, then we can build it”. ' +
                        'We have created Android apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Android Apps</li>' +
                        '<li>Medical Android Apps</li>' +
                        '<li>Utility Android Apps</li>' +
                        '<li>Social Media Android Apps</li>' +
                        '<li>Geolocation Android Apps</li>' +
                        '<li>MLM Android Apps</li>' +
                        '<li>Companion Android Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise in Android App Development',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of Android geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between Android sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating Android mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Android Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Android App Development Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your Android app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the Android app so that you can install the Android app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in submitting Android App to be live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        appDevelopment: {
            title: 'App Development',
            description: 'Creating amazing apps since 2008',
            image: 'images/temp/intro-app-developers.png',
            alt: ["Mobile app project for a business client from Clever Coding", "Desktop app project for a business client from Clever Coding", "Team of IOS and Android mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'App Development Overview',
                    description: 'Clever Coding has offered app development services since 2008. We have provided app development services for clients around the world. ' +
                        'If you need app development services you have come to the right place. When you hire us for your app development needs you are hiring the best. ' +
                        'Our goal is to turn your app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise',
                    description: 'Since 2008 we have built hundreds of apps that cover the spectrum of what is possible. We like to say “if you can dream it up, then we can build it”.  We have created apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Android Apps</li>' +
                        '<li>Medical Android Apps</li>' +
                        '<li>Utility Android Apps</li>' +
                        '<li>Social Media Android Apps</li>' +
                        '<li>Geolocation Android Apps</li>' +
                        '<li>MLM Android Apps</li>' +
                        '<li>Companion Android Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of Android geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between Android sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating Android mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Android Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your Android app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the Android app so that you can install the app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in submitting Android App to be live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        appDevelopmentConsulting: {
            title: 'App Development Consulting',
            description: 'Creating amazing apps since 2008',
            image: 'images/temp/intro-app-development-consulting.png',
            alt: ["Mobile app project for a business client from Clever Coding", "Desktop app project for a business client from Clever Coding", "Team of IOS and Android mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'App Development Overview',
                    description: 'Clever Coding has offered consulting services since 2008. We have provided consulting services for clients around the world. ' +
                        'If you need consulting services you have come to the right place. When you hire us to consult on your project you are hiring the best. ' +
                        'Our goal is to turn your app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise',
                    description: 'Since 2008 we have built hundreds of apps that cover the spectrum of what is possible. We like to say “if you can dream it up, then we can build it”.  We have created apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Android Apps</li>' +
                        '<li>Medical Android Apps</li>' +
                        '<li>Utility Android Apps</li>' +
                        '<li>Social Media Android Apps</li>' +
                        '<li>Geolocation Android Apps</li>' +
                        '<li>MLM Android Apps</li>' +
                        '<li>Companion Android Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the app so that you can install the app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in submitting app to be live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        appDesign: {
            title: 'UX/UI App Design',
            description: 'Let us design a rapid prototype for your app project',
            image: '/images/temp/intro-app-design.png',
            alt: ["Mobile app design project for a business client from Clever Coding", "Software design project for a business client from Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'App Design Overview',
                    description: 'We have a team of designers ready to take your app idea from concept to completion. Clever Coding offers rapid app design services and strives to ensure clear understanding between the client and designer. ' +
                        'Clever Coding will help you visualize your idea, by designing a proof of concept prototype so you can quickly see your idea coming to life, just the way you have imagined it.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Design',
                    description: 'When designing an app or website we rely on our expertise to focus on the following core principles:',
                    content: '<ul class="text-left">' +
                        '<li>Intuitive design that is easy to use</li>' +
                        '<li>Maintaining your company brand</li>' +
                        '<li>Cross platform friendly designs</li>' +
                        '<li>User productivity</li>' +
                        '<li>Minimum task completion time</li>' +
                        '<li>In mobile apps - ensuring we adhere to Apple’s and Google’s UI guidelines</li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Design Prototype',
                    description: 'Through our designer’s tools we can provide you with a web prototype of your design that has clickable areas to let you evaluate the usability of the design before it is implemented in code. This allows the customer to see how well the app will function before it is complete and make any necessary changes before the code goes live.',
                    icon: 'icon-brain'
                },
                {
                    title: 'App Prototyping',
                    description: 'Some apps may contain features that need to be tested on-device to evaluate the feasibility of the project.  We offer rapid prototyping services to let you test your concept before committing to a Mobile/Web App development contract.' +
                        'Some clients come to us with other reasons to create a prototype of their app.  No matter what your reason is we can rapidly create a prototype of your mobile app or website that allows you to take your idea to the next level.',
                    icon: 'icon-tablet-mobile'
                }]
        },
        billingModels: {
            title: "Our Approach",
            image: '/images/temp/intro-billing-models.jpg',
            alt: ["Billing models for client projects developed by Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    icon: 'icon-lock',
                    title: "Fixed price",
                    description: 'For smaller projects that have a clearly defined scope that is not going to change during development we can offer a fixed price model. Under this model we will mutually agree to what the deliverables and timeframe will be. The project will be broken up into clearly defined segments and a cost will be attached to each segment. Once we have completed a segment and you have signed off on it then the payment will be due for that segment. This model allows very little flexibility. If requirements change even slightly during development, an assessment will be made to determine if those changes will affect the overall number of hours to complete the project. If changes happen that add hours to the overall scope of the project, then an amendment will need to be made to the service agreement that adjusts the price of the project to account for the additional time and resources put toward the project.'
                },
                {
                    icon: 'icon-clock',
                    title: "Time and materials",
                    description: 'The Time & Material model is what works best for most projects. During your initial engagement with Clever Coding, we will gather all available information about your project to help us understand the vision of what you are wanting done. During this phase of engagement we will try and understand the scope of work. Based on the information provided to us, we will then provide you with a proposal for your project that includes cost estimates and a breakdown of milestones including delivery dates. This model works best for more complex projects. We have found that most complex projects inevitably have changes made to the scope of work during the development phase. When changes are made, we will provide a new cost estimate and adjustments to the timeline so you are aware of the impact of the changes to the project. Time & Material projects are billed bi-weekly based on hours performed during that time period. When the invoice is sent, a status is provided about how the project is doing in relation to the original cost and timeframe estimate. If the scope of work changes for the project during development, an amendment will be made to the service agreement to provide updated cost and timeframe estimates. This model allows for complete flexibility. We are able to put multiple resources to work on various parts of the project, which allows us to get the project done in the shortest time period. We are able to easily adapt to changes that may come up during development and allows for a more agile development process.'
                },
                {
                    icon: 'icon-verified',
                    title: "Milestone billing",
                    description: 'On large scale projects we also offer milestone billing. As in all projects, during initial engagement we will provide you with a free no obligation proposal that provides cost estimates and timeframes for each milestone agreed upon. As each milestone is reached and you have signed off on it being properly completed then an invoice will be sent based on hours spent for that milestone. If the scope of work changes for parts of the project being worked on then an amendment will be made to the service agreement to provide updated cost and timeframe estimates. This model allows you to more closely monitor cost based on milestones being reached. In this model our preference is to only work on one milestone at a time, so the overall length of the project may be longer.'
                },
                {
                    icon: 'icon-mobile-dev',
                    title: "Dedicated resources",
                    description: 'We offer dedicated resources to extend your in-house development abilities. You can choose how many developers/designers you need, and how many hours per week you want them to work. Then a service agreement will be drawn for the number of weeks you will need those resources, detailing the costs associated with utilizing those dedicated resources.'
                }
            ]
        },
        blogPage: {
            title: "A Place For Thoughts, Articles and News Items",
            image: '/images/temp/intro-blog.jpg',
            alt: ["Company Blog"],
            meta: {
                title: "",
                description: ''
            },
        },
        careersPage: {
            title: "Grow and Develop Your Career With Clever Coding",
            image: '/images/temp/intro-careers.jpg',
            alt: ["Jobs Postings"],
            meta: {
                title: "",
                description: ''
            },
            description: "Clever Coding’s most valuable asset is it’s employees. We work hard to provide you with opportunities to excel and grow in your position. Get on board with meaningful work, a fast paced environment, strong core values, as well as opportunities for growth and development. Our leadership team has 12+ years of developing and managing app development.",
            notice: "Check out our positions available below, feel free to apply today!",
            list: [
                {
                    image: '/images/temp/career-1.jpg',
                    title: 'Mobile developer',
                    description: 'We are currently looking for both experienced iOS and Android developers to join our team. Get to work on a wide variety of projects that let you grow and expand your skills.',
                    email: 'jobs@clevercoding.com'
                },
                {
                    image: '/images/temp/career-2.jpg',
                    title: 'Web developer',
                    description: 'We are currently looking for experienced Web Developers to join our team.  Most of our projects are built on a LAMP stack running in the cloud.  Preference will be given to someone with strong PHP skills along with strong front end skills with the ability to turn designs into html/css.',
                    email: 'jobs@clevercoding.com'
                }
            ]
        },
        contactUs: {
            title: "CONTACT US",
            image: '/images/temp/intro-contactus.jpg',
            alt: ["Contact Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            list: [
                {
                    icon: 'icon-pin',
                    title: 'Location',
                    content: '3300 N Triumph Blvd <br /> Suite #100 <br />Lehi, UT 84043'
                },
                {
                    icon: 'icon-envelope',
                    title: 'Email',
                    content: '<a href="mailto:contact@clevercoding.com">contact@clevercoding.com</a>'
                },
                {
                    icon: 'icon-phone',
                    title: 'Phone',
                    content: '<a href="tel:+8019010231">(801) 901-0231</a> <br />Mon - Fri, 9:00 AM - 5:00 PM'
                }
            ]
        },
        contentManagementSystem: {
            title: 'Custom Content Management System',
            description: 'In need of a customized content management system.  We offer a robust, full-featured content management system that we can custom branded for companies and individuals. The custom CMS include deep OpenAI integration to help you create content. Use our AI assistant to help you generate your content.  Call today for a demo.',
            image: '/images/temp/Intro-Content-Management-System.png',
            alt: ["Mobile app design project for a business client from Clever Coding", "Software design project for a business client from Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            headerCards: [
                {
                    title: 'What do you do when your current Content Management System just isn\'t quite cutting it?',
                    description: 'The solution is to build your own custom content management system!',
                    icon: 'icon-nodes'
                },
                {
                    title: '',
                    description: '',
                    icon: 'icon-calculator'
                },
            ],
            cards: [
                {
                    title: 'CMS Cost Overview',
                    description: 'We charge a one time licensing fee for the base product which buys you a lifetime royalty free license to a copy of the projects source code for use in your project.' +
                        '',
                    icon: 'icon-calculator'
                },
                {
                    title: 'Features',
                    description: 'The base CMS feature include',
                    content: '<ul class="text-left">' +
                        '<li>Deep OpenAI integration</li>' +
                        '<li>AI Assistant to help you generate content</li>' +
                        '<li>Support Rich Text, Documents, Images and Videos</li>' +
                        '<li>Ability to group your content by library</li>' +
                        '<li>Ability to monitize content through subscriptions or per item in app purchases</li>' +
                        '<li>Built to be deployed on cloud systems including AWS and Azure</li>' +
                        '<li>Cross platform friendly designs</li>' +
                        '<li>Responsive Web App that includes web admin and end user apps</li>' +
                        '<li>End User Native iOS and Android Apps</li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Need Customizations?',
                    description: 'The base CMS is created to be extended.  You can hire us to add in those custom features your project might require. Or since you are purchasing a license to the source code your in house developers can customize the product for you.',
                    icon: 'icon-mobile-dev'
                },
                {
                    title: 'Starter App Include',
                    description: 'The CMS is built on top of our Starter App Product.  So all Starter App modules are available for you to include in your project at no additional cost.  The Starter App is modular so you only include those features relevant to your project.  Those features include:',
                    content: '<ul class="text-left">' +
                        '<li>User Messaging</li>' +
                        '<li>Notifications</li>' +
                        '<li>Help & FAQ</li>' +
                        '<li>Branding Admin</li>' +
                        '<li>Learning Management System</li>' +
                        '<li>Customer Relation System</li>' +
                        '<li>Contact Us, Send Feedback, Rating System, About Us</li>' +
                        '<li>Privacy Policy, Terms and Conditions and Editors to edit content</li>' +
                        '<li>Page Builder for your public facing website with support for dynamic marketing/funnel pages </li>' +
                        '<li>Blog</li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-relations'
                }]
        },
        customAppDevelopment: {
            title: 'Custom App Development',
            description: 'Creating amazing apps since 2008',
            image: '/images/temp/intro-custom-app-development.png',
            alt: ["Custom mobile app development project for a business client from Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Overview',
                    description: 'We have been creating mobile apps for iOS and Android since 2008. We have creating hundreds of apps for clients around the world since then. If you need an iPhone app or Android app created you have come to the right place. When you ' +
                        'hire us to create your mobile app you are hiring the best. Our goal is to turn your app idea into a reality. Our main office is located in Lehi, Utah. We work well with clients around the world but if you are along the Wasatch Front we would be glad ' +
                        'to have you come into our office to discuss your idea or we would be glad to come to your office to meet with you.',
                    icon: 'icon-eye'
                },
                {
                    title: 'iPhone, iPAD and android app development',
                    description: 'Information about our iOS and Android Mobile App Development has moved to our iOS and Android App Development page.',
                    content: '',
                    button: 'Learn more',
                    path: '/app-development',
                    icon: 'icon-tablet-mobile'
                },
                {
                    title: 'Reactive web development',
                    description: 'Information about our Web Development has moved to Web Development page.',
                    content: '',
                    button: 'Learn more',
                    path: '/website-development',
                    icon: 'icon-nodes'
                },
                {
                    title: 'States:',
                    path: '',
                    button: '',
                    description: '',
                    content: '<p><a href="States/Mobile-Dev-Alabama">Alabama</a> ' +
                        '<a href="States/Mobile-Dev-Alaska">Alaska</a>' +
                        '<a href="States/Mobile-Dev-Arizona">Arizona</a>' +
                        ' <a href="States/Mobile-Dev-Arkansas">Arkansas</a>' +
                        ' <a href="States/Mobile-Dev-California">California</a>  ' +
                        ' <a href="States/Mobile-Dev-Canada">Canada</a>  ' +
                        ' <a href="States/Mobile-Dev-Colorado">Colorado</a>' +
                        ' <a href="States/Mobile-Dev-Connecticut">Connecticut</a>' +
                        ' <a href="States/Mobile-Dev-Delaware">Delaware</a> ' +
                        ' <a href="States/Mobile-Dev-Florida">Florida</a>' +
                        ' <a href="States/Mobile-Dev-Georgia">Georgia</a>  ' +
                        ' <a href="States/Mobile-Dev-Hawaii">Hawaii</a>  ' +
                        ' <a href="States/Mobile-Dev-Idaho">Idaho</a> ' +
                        ' <a href="States/Mobile-Dev-Illinois">Illinois</a>' +
                        '<a href="States/Mobile-Dev-Indiana">Indiana</a>' +
                        ' <a href="States/Mobile-Dev-Iowa">Iowa</a>' +
                        ' <a href="States/Mobile-Dev-Kansas">Kansas</a>  ' +
                        ' <a href="States/Mobile-Dev-Kentucky">Kentucky</a>  ' +
                        ' <a href="States/Mobile-Dev-Louisiana">Louisiana</a>' +
                        ' <a href="States/Mobile-Dev-Maine">Maine</a>' +
                        ' <a href="States/Mobile-Dev-Maryland">Maryland</a> ' +
                        ' <a href="States/Mobile-Dev-Massachusetts">Massachusetts</a>' +
                        ' <a href="States/Mobile-Dev-Michigan">Michigan</a>  ' +
                        ' <a href="States/Mobile-Dev-Minnesota">Minnesota</a>  ' +
                        ' <a href="States/Mobile-Dev-Mississippi">Mississippi</a> ' +
                        ' <a href="States/Mobile-Dev-Missouri">Missouri</a>' +
                        '<a href="States/Mobile-Dev-Montana">Montana</a>' +
                        ' <a href="States/Mobile-Dev-Nebraska">Nebraska</a>' +
                        ' <a href="States/Mobile-Dev-Nevada">Nevada</a>  ' +
                        ' <a href="States/Mobile-Dev-New-Hampshire">New Hampshire</a>  ' +
                        ' <a href="States/Mobile-Dev-New-Jersey">New Jersey</a>' +
                        ' <a href="States/Mobile-Dev-New-Mexico">New Mexico</a>' +
                        ' <a href="States/Mobile-Dev-New-York">New York</a> ' +
                        ' <a href="States/Mobile-Dev-North-Carolina">North Carolina</a>' +
                        ' <a href="States/Mobile-Dev-North-Dakota">North Dakota</a>  ' +
                        ' <a href="States/Mobile-Dev-Ohio">Ohio</a>  ' +
                        ' <a href="States/Mobile-Dev-Oklahoma">Oklahoma</a> ' +
                        ' <a href="States/Mobile-Dev-Oregon">Oregon</a>' +
                        '<a href="States/Mobile-Dev-Pennsylvania">Pennsylvania</a>' +
                        ' <a href="States/Mobile-Dev-Rhode-Island">Rhode Island</a>' +
                        ' <a href="States/Mobile-Dev-South-Carolina">South Carolina</a>  ' +
                        ' <a href="States/Mobile-Dev-South-Dakota">South Dakota</a>  ' +
                        ' <a href="States/Mobile-Dev-Tennessee">Tennessee</a>' +
                        ' <a href="States/Mobile-Dev-Texas">Texas</a>' +
                        ' <a href="States/Mobile-Dev-Utah">Utah</a> ' +
                        ' <a href="States/Mobile-Dev-Vermont">Vermont</a>' +
                        ' <a href="States/Mobile-Dev-Virginia">Virginia</a>  ' +
                        ' <a href="States/Mobile-Dev-Washington-DC">Washington DC</a>  ' +
                        ' <a href="States/Mobile-Dev-Washington">Washington</a> ' +
                        ' <a href="States/Mobile-Dev-West-Virginia">West Virginia</a>' +
                        '<a href="States/Mobile-Dev-Wisconsin">Wisconsin</a>' +
                        ' <a href="States/Mobile-Dev-Wyoming">Wyoming</a>' +
                        '</p>',
                    icon: 'icon-nodes'
                }
            ]
        },
        dedicatedResources: {
            title: 'Dedicated Resources',
            image: 'images/temp/intro-dedicated-resources.png',
            meta: {
                title: "",
                description: ''
            },
            sections: [
                {
                    title: 'Dedicated Resources',
                    description: 'Helping you supplement your team.',
                    cards: [
                        {
                            title: 'Overview',
                            description: '<p>Do you find yourself in need of some extra resources?  We offer clients the option to use our team to supplement their own.</p>',
                            icon: 'icon-overview'
                        },
                        {
                            title: 'How it works',
                            description: '<p>When you engage with us to discuss your mobile app/web development needs, we will provide you with an overview of the talent we have available including a work history of the types of projects they have worked on.  If you find that our resources would be a good fit to supplement your team, we will create a service agreement that covers a certain number of hours per week for a given number of weeks.  The service agreement will include the option for you to extend the agreement for more hours or more weeks at the same rate that is agreed upon in the original contract.</p>',
                            icon: 'icon-how-it-works'
                        },
                        {
                            title: 'Available Resource',
                            description: '<p>All resources are available part or full time.  Currently we have the following available talent:</p>' +
                                '<ul class="text-left">' +
                                '<li>Web Developers - LAMP Stack</li>' +
                                '<li>Android Developers</li>' +
                                '<li>iOS Developers</li>' +
                                '<li>Graphic Designers</li>' +
                                '</ul>',
                            icon: 'icon-available-resources'
                        }],
                    actions: null
                }],
        },
        designToHtml: {
            title: 'Design to HTML - Frontend Coding Services',
            description: 'We will convert design files: Sketch, AI, PSD, Adobe XD into a pixel perfect HTML/CSS template or reactive app',
            image: '/images/temp/intro-design-to-html.png',
            alt: ["HTML/CSS design project for a business client from Clever Coding."],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Focus on Quality and Flexibility on the design to HTML process',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Coding Standards that creates the same naming convention and similar HTML structures across projects.</li>' +
                        '<li>HTML Templates look great across all modern browsers and devices</li>' +
                        '<li>Responsive design that looks good on desktops, tablets and mobile devices</li>' +
                        '<li>Ability to integrate Videos and Audio into pages</li>' +
                        '<li>Option to use SASS/LESS/PostCSS as your css preprocessors</li>' +
                        '<li>We can create the CSS from scratch or integrate any framework you want such as Bootstrap, Neat Bourbon, Skeleton, etc.</li>' +
                        '<li>Companion App to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-eye'
                },
                {
                    title: 'Deliverables',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Pixel-perfect</li>' +
                        '<li>Handcoded</li>' +
                        '<li>W3C validated code</li>' +
                        '<li>Compatible with all modern browsers</li>' +
                        '<li>SEO Friendly</li>' +
                        '<li>Custom Fonts included</li>' +
                        '<li>Unlimited Revisions</li>' +
                        '<li>Basic Javascript for free</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Additional Services Available',
                    description: '',
                    content: '<ul class="list-bullets">' +
                        '<li>Integrate open source libraries or create custom javascript or to add responsive/interactive features to page</li>' +
                        '<li><a href="web-developers">Backend API creation</a> through PHP Framework Lumen</li>' +
                        '<li>Native iOS and Android Development</li>' +
                        '</ul>',
                    icon: 'icon-more'
                }]
        },
        designToReactive: {
            title: 'Design to Reactive App - Frontend Coding Services',
            description: 'We will convert design files: Sketch, AI, PSD, Adobe XD into a pixel perfect HTML/CSS template or reactive app',
            image: '/images/temp/intro-design-to-reactive.png',
            alt: ["Reactive app design project for a mobile app client from Clever Coding.", "Reactive web design project for a website client from Clever Coding."],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Focus on Quality and Flexibility',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Coding Standards that creates the same naming convention and similar HTML structures across projects.</li>' +
                        '<li>Reactive HTML Templates look great across all modern browsers and devices</li>' +
                        '<li>Reactive & Responsive design that looks good on desktops, tablets and mobile devices</li>' +
                        '<li>Ability to integrate Videos and Audio into pages</li>' +
                        '<li>Option to use SASS/LESS/PostCSS as your css preprocessors</li>' +
                        '<li>We can create the CSS from scratch or integrate any framework you want such as Bootstrap, Neat Bourbon, Skeleton, etc.</li>' +
                        '<li>Companion App to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-eye'
                },
                {
                    title: 'Deliverables',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Pixel-perfect</li>' +
                        '<li>Handcoded Reactive Code</li>' +
                        '<li>W3C validated code</li>' +
                        '<li>Compatible with all modern browsers</li>' +
                        '<li>SEO Friendly</li>' +
                        '<li>Custom Fonts included</li>' +
                        '<li>Unlimited Revisions</li>' +
                        '<li>Basic Javascript for free</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Additional Services Available',
                    description: '',
                    content: '<ul class="list-bullets">' +
                        '<li>Integrate open source libraries or create custom javascript or to add responsive/interactive features to page</li>' +
                        '<li><a href="web-developers">Backend API creation</a> through PHP Framework Lumen</li>' +
                        '<li>Native iOS and Android Development</li>' +
                        '</ul>',
                    icon: 'icon-more'
                }]
        },
        emergencyReadyApp: {
            title: "Emergency Ready App",
            image: 'images/temp/intro-emergency.jpg',
            alt: [""],
            meta: {
                title: "",
                description: ''
            },
            sections: [
                {
                    title: "Custom branded emergency ready app.",
                    description: "Hire us to create a custom branded version of the Emergency Ready App for your agency or company. App Store links to download the Emergency Ready App and a sample custom version we built for one of our clients is available below.",
                    cards: [
                        {
                            icon: 'icon-mobile-device',
                            title: "Custom branded iOS & android apps",
                            description: 'We can create a custom emergency app for iOS and Android, Phone, and Tablet. That includes your branding guidelines, logos and images. We can customize the home screen designed to meet your needs.'
                        },
                        {
                            icon: 'icon-notification',
                            title: "Notifications",
                            description: 'Platform enables you to send notifications to your user’s phones and tablets.'
                        },
                        {
                            icon: 'icon-e-reader',
                            title: "Custom guides, manuals & scenarios",
                            description: 'We will add any custom emergency guides and scenarios that are needed to meet your agencies or company needs.'
                        },
                        {
                            icon: 'icon-mobile-bank',
                            title: "Fixed price",
                            description: 'Everything we do is based on a fixed price. We offer free consulation to help us understand your goals and help you understand if our service will fit your needs.'
                        },
                    ],
                    actions: {
                        title: "Emergency ready app",
                        text: 'Base App for all Custom Builds',
                        appStoreLink: 'https://apps.apple.com/us/app/emergency-ready/id1480621536?ls=1',
                        playStoreLink: 'https://play.google.com/store/apps/details?id=com.clevercoding.theemergencyapp'
                    }
                },
                {
                    title: "Emergency ready app",
                    description: "Below is a list of standard features of the Emergency Ready App which is the foundation of each custom branded version we create.",
                    cards: [
                        {
                            icon: 'icon-mobile-device',
                            title: "Make a plan",
                            description: 'Ability for users to add in their info that will be needed in an emergency. Features including: Add family member with individuals info, medical info, medications, etc. Add info for meeting places, emergency contacts, insurance info, evacuation list, home inventory and other useful checklists.'
                        },
                        {
                            icon: 'icon-notification',
                            title: "Get a kit",
                            description: 'Predefined Check List including: Evacutation Kit, Sanitation Kit, Vehicle Kit, Pet Kit, Shelter-In Kit, Elderly/Special Needs, Child/Baby Kit, First Aid Kit and other Additional Info.'
                        },
                        {
                            icon: 'icon-e-reader',
                            title: "Be informed",
                            description: 'Hazard guides and education information for different emergency situations including: Coping with Disasters, Earthquakes, Hazardous Weather, Fires, Utility Failres, Public Health Emergencies, Hazardous Material, Terrorism.'
                        },
                        {
                            icon: 'icon-mobile-bank',
                            title: "Custom branded sections",
                            description: 'Sections to add info on how users can get involved with your agency or company, and other national emergency groups. Custom contact sections where you can add contact info for agencies and companies relevant to your users. This could include local, county, state and federal agencies. Contact info for your agency or company. Contact info options include phone numbers, websites, social media accounts. Links to local traffic, weather, and ability for user to send you photos by email.'
                        },
                    ],
                    actions: {
                        title: "Tooele ready app",
                        text: 'Tooele County Emergency Management partnered with us to create the Tooele Ready App for Tooele County, Utah.',
                        appStoreLink: 'https://apps.apple.com/us/app/tooele-ready-app/id1364203121?ls=1',
                        playStoreLink: 'https://play.google.com/store/apps/details?id=clevercoding.com.edraw'
                    }
                }
            ]
        },
        featuredAppsPage: {
            image: '/images/temp/intro-featured.jpg',
            alt: ["Gallery of example projects"],
            title: 'Featured Apps',
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Maverik',
                    category: 'Business',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/maverik-logo-sm.png',
                    slug: 'maverik',
                    info: '“Prepare yourself for perks, prizes, freebies and more from Maverik — Adventure’s First Stop. The Maverik Adventure …'
                },
                {
                    title: 'First Words',
                    category: 'Educational',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/first-words-logo-sm.png',
                    slug: 'first-words',
                    info: 'First Words is an educational app for young children. The app has been featured many times by Apple in the education …'
                },
                {
                    title: 'Official BYU Athletics App',
                    category: 'Entertainment',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/byu-logo-sm.png',
                    slug: 'byu',
                    info: 'BYU Cougars is the official app of the BYU Athletics Department. Available for free on iPad and iPhone, this app makes it easy for Cougar Nation to get up-to-date ...'
                },
                {
                    title: 'Carnival',
                    category: 'Entertainment',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/carnival-logo-sm.png',
                    slug: 'carnival',
                    info: 'The Carnival Cruise Line Fun Squad app lets cruise entertainment directors play Trivial Pursit and Speak 0ut ...'
                },
                {
                    title: 'Showscoop',
                    category: 'Entertainment',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/showscoop-logo-sm.png',
                    slug: 'showscoop',
                    info: 'ShowScoop Concerts rate how bands perform live. Never go to a bad concert again. With ShowScoop you can rate ...'
                },
                {
                    title: 'Paper Pilot',
                    category: 'Games',
                    solutions: '',
                    technology: '',
                    image: '/images/portfolio/paper-pilot-logo-sm.png',
                    slug: 'paper-pilot',
                    info: 'Paper Pilot is a 3D flying game built with the game engine Unity It has risen as high as the #2 free app on the App Store ...'
                },
                {
                    title: 'i-calQ',
                    category: 'Medical',
                    solutions: '',
                    technology: '',
                    image: '/images/featured/i-calq-logo-sm.png',
                    slug: 'i-calQ',
                    info: 'i-calQ has developed the world’s first smartphone-based point-of-care integrated mobile diagnosis and decision ...'
                },
                {
                    title: 'Roots Magic',
                    category: 'Reference',
                    solutions: '',
                    technology: '',
                    image: '/images/featured/roots-magic-logo-sm.png',
                    slug: 'rootsmagic',
                    info: 'Your family tree at your fingertips! Now you can easily take and show off your family history with you wherever you go.'
                },
                {
                    title: 'Heritage Makers',
                    category: 'Shopping',
                    solutions: '',
                    technology: '',
                    image: '/images/featured/heritage-makers-logo-sm.png',
                    slug: 'heritage-makers',
                    info: 'Heritage Makers allows you to upload the photos on your iPhone directly to your Studio account. This streamlined ...'
                },
                {
                    title: 'Who’s Your Caddy',
                    category: 'Sports',
                    solutions: '',
                    technology: '',
                    image: '/images/featured/caddy-logo-sm.png',
                    slug: 'caddy',
                    info: "Who's Your Caddy is your own Caddy when you play golf. Who's Your Caddy includes video and written Caddy Tips …"
                },
                {
                    title: 'Emergency Ready App',
                    category: 'Utilties',
                    solutions: '',
                    technology: '',
                    image: '/images/featured/emergency-ready-logo-sm.png',
                    slug: 'emergency-ready',
                    info: "The Emergency Ready App is your go to app in the event of an emergency and to help you prepare for potential emergencies …"
                },
                // {
                //   title: 'NewAge',
                //   category: '',
                //   solutions: '',
                //   technology: '',
                //   image: '/images/featured/featured-placeholder.png',
                //   slug: 'new-age',
                //   info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                // },
                // {
                //   title: 'YPhoto',
                //   category: '',
                //   solutions: '',
                //   technology: '',
                //   image: '/images/featured/featured-placeholder.png',
                //   slug: 'y-photo',
                //   info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                // }
            ]
        },
        home: {
            title: "Building an app just got easier with",
            largeTitle: "Clever Coding.",
            description: "We provide a quick and timely solution for bringing your project to life. Let us guide you through the entire process.",
            image: '/images/temp/about-bg.png',
            alt: ["Mobile App Developers"],
            meta: {
                title: "Clever Coding: App & Web Development Experts",
                description: 'Clever Coding offers a full range of mobile android app development services since 2008. Our developers & designers turn your business app idea into a reality.'
            }
        },
        iosAppDevelopment: {
            title: 'iOS App Development',
            description: 'Creating amazing iOS apps since 2008',
            image: '/images/temp/intro-ios-app-development.png',
            alt: ["Mobile app project for an apple client from Clever Coding", "Team of IOS software and mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'iOS App Development Overview',
                    description: 'Clever Coding has offered iOS app development services since 2008. We have provided iOS app development services for clients around the world. ' +
                        'If you need iOS app development services you have come to the right place. When you hire us for your iOS app development needs you are hiring the best. ' +
                        'Our goal is to turn your iOS app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise in iOS App Development',
                    description: 'Since 2008 we have built hundreds of iOS apps that cover the spectrum of what is possible.  We like to say “if you can dream it up, then we can build it”.  We have created iOS apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business iOS Apps</li>' +
                        '<li>Medical iOS Apps</li>' +
                        '<li>Utility iOS Apps</li>' +
                        '<li>Social Media iOS Apps</li>' +
                        '<li>Geolocation iOS Apps</li>' +
                        '<li>MLM iOS Apps</li>' +
                        '<li>Companion iOS Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise in iOS App Development',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of iOS geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between iOS sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating iOS mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>iOS Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our iOS App Development Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your iOS app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the iOS app so that you can install the iOS app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in submitting iOS App to be live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        learningManagementSystem: {
            title: 'Custom Learning Management System',
            description: 'In need of a custom learning management system.  We offer a robust, full-featured learning management system that we can custom brand for companies and individuals.  The custom LMS include deep OpenAI integration to help you create content. Create Course Content with the help of our custom AI assistant.  Call today for a demo.',
            image: '/images/starter-app/LMS/LMS-11.png',
            alt: ["In need of a custom learning management system.  We offer a robust, full-featured learning management system that we can custom brand for companies and individuals."],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'LMS Cost Overview',
                    description: 'We charge a one time licensing fee for the base product which buys you a lifetime royalty free license to a copy of the products source code for use in your project.',
                    icon: 'icon-calculator'
                },
                {
                    title: 'Features',
                    description: 'The base LMS feature include',
                    content: '<ul class="text-left">' +
                        '<li>Deep OpenAI integration</li>' +
                        '<li>AI Assistant to help you generate content</li>' +
                        '<li>Support Rich Text, Documents, Images and Videos</li>' +
                        '<li>Ability to group assignments into lessons, lessons into courses and courses into course bundles</li>' +
                        '<li>Ability to monitize content through subscriptions or per item in app purchases</li>' +
                        '<li>Support for quizzes with quiz builder and auto-grader</li>' +
                        '<li>Built to be deployed on cloud systems including AWS and Azure</li>' +
                        '<li>Cross platform friendly designs</li>' +
                        '<li>Built in support for business accounts to manage LMS content for employees</li>' +
                        '<li>Built in support for parent/teacher accounts where they can manage their child/students LMS content</li>' +
                        '<li>Responsive Web App that includes web admin and end user apps</li>' +
                        '<li></li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Need Customizations?',
                    description: 'The base LMS is created to be extended.  You can hire us to add in those custom features your project might require. Or since you are purchasing a license to the source code your in house developers can customize the product for you.',
                    icon: 'icon-brain'
                },
                {
                    title: 'Starter App Include',
                    description: 'The LMS is built on top of our Starter App Product.  So all Starter App modules are available for you to include in your project at no additional cost.  The Starter App is modular so you only include those features relevant to your project.  Those features include:',
                    content: '<ul class="text-left">' +
                        '<li>User Messaging</li>' +
                        '<li>Notifications</li>' +
                        '<li>Help & FAQ</li>' +
                        '<li>Branding Admin</li>' +
                        '<li>Content Management System</li>' +
                        '<li>Customer Relation System</li>' +
                        '<li>Contact Us, Send Feedback, Rating System, About Us</li>' +
                        '<li>Privacy Policy, Terms and Conditions and Editors to edit content</li>' +
                        '<li>Page Builder for your public facing website with support for dynamic marketing/funnel pages </li>' +
                        '<li>Blog</li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-mobile-dev'
                }]
        },
        legacyUpgrades: {
            title: 'Legacy Upgrades',
            image: 'images/temp/intro-legacy-upgrades.png',
            alt: [""],
            meta: {
                title: "",
                description: ''
            },
            sections: [
                {
                    title: 'Legacy Upgrades',
                    description: 'Let us bring your legacy systems up to modern standards',
                    cards: [
                        {
                            title: 'Overview',
                            description: '<p>Do you have a legacy system that needs to be updated?  We specialize in updating websites and mobile apps to meet modern standards.</p>',
                            icon: 'icon-overview'
                        },
                        {
                            title: 'Companion Mobile App',
                            description: '<p>Are you being left behind in the mobile revolution?  We specialize in creating mobile apps for iOS and Android that integrate with older legacy systems.  We can help develop the app and APIs into your legacy system to help you enter the mobile age.</p>',
                            icon: 'icon-companion-mobile-app'
                        },
                        {
                            title: 'Mobile App Upgrade',
                            description: '<p>There has been rapid progress in the mobile app world since 2008.  Do you have an old app that needs to be brought up to current standards?  We help with these types of projects all the time.  A few of the things we can help you with:</p>' +
                                '<ul class="text-left">' +
                                '<li>Update iOS and Android apps to run on latest OS versions</li>' +
                                '<li>Clean up deprecated code to meet current iOS and Android Standards</li>' +
                                '<li>Convert Objective-C to Swift</li>' +
                                '<li>Convert Android Eclipse projects to Android Studio</li>' +
                                '</ul>',
                            icon: 'icon-mobile-app-upgrades'
                        },
                        {
                            title: 'Website Upgrade',
                            description: '<p>Has it been awhile since you updated your website?  We offer many services to help breathe new life into your site:</p>' +
                                '<ul class="text-left">' +
                                '<li>Give your site a design refresh for a clean modern look</li>' +
                                '<li>Update your HTML, CSS and Javascript to meet latest standards</li>' +
                                '<li>Convert Objective-C to Swift</li>' +
                                '<li>Port old code into a new more modern language</li>' +
                                '</ul>',
                            icon: 'icon-website-upgrade'
                        }],
                    actions: null
                }],
        },
        maintenanceSupport: {
            title: 'Maintenance & Support',
            image: 'images/temp/intro-maintenance-and-support.png',
            alt: [""],
            meta: {
                title: "",
                description: ''
            },
            sections: [
                {
                    title: 'Maintenance & Support',
                    description: 'We are in it for the long term. Our goal with every client is to establish a long term relationship. We strive to provide the best level of service possible during the initial development of your project, while we are building the app, and of course, after it goes live. We want you to call us for all your future mobile and web app maintenance & support needs.',
                    cards: [
                        {
                            title: 'Bug Fixes',
                            description: 'We work hard to ensure all bugs are identified and fixed prior to launching your mobile app or website. But even with the best of testing, bugs can and do happen. On critical bugs, we strive for same day turn around to resolve the issue as quickly as possible.',
                            icon: 'icon-bug-fixes'
                        },
                        {
                            title: 'Mobile OS Updates',
                            description: 'Apple and Google release new versions of their Mobile OS on a yearly basis. We will work with you proactively to identify changes in your code that need to be addressed and updated for the new OS. Typically there is minimal work that needs to be done to update most apps, and sometimes there aren’t any updates that need to be made at all; However, we will work with you to identify what needs to be done, and the cost associated with making the required updates/changes.',
                            icon: 'icon-mobile-os-updates'
                        },
                        {
                            title: 'New Features',
                            description: 'After your mobile app or website goes live, you will typically start receiving a ton of feedback from your users. For Example: They love your app but wish it could do a few more things. We want to be there for you when this occurs to help you with all new features and upgrades to your mobile app and website. As you bring your end users wishlist to us, we will help you identify the cost and timeframe associated with each feature, so you can decide which items you want to add.',
                            icon: 'icon-new-features'
                        },
                        {
                            title: 'New Projects',
                            description: 'Our goal is to be your long term partner. We strive to provide you with excellent service at every level and hope that you will come to us with all your future mobile app and web development projects.',
                            icon: 'icon-new-projects'
                        }],
                    actions: null
                }],
        },
        mobileAppDevelopment: {
            title: 'Mobile App Development',
            description: 'Creating amazing apps since 2008',
            image: '/images/temp/intro-mobile-app-development.png',
            alt: ["Mobile app project for a business client from Clever Coding", "Team of IOS and Android mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Mobile App Development Overview',
                    description: 'Clever Coding has offered mobile app development services since 2008. We have provided mobile app development services for clients around the world. ' +
                        'If you need mobile app development services you have come to the right place. When you hire us for your mobile app development needs you are hiring the best. ' +
                        'Our goal is to turn your Mobile app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise in Mobile App Development',
                    description: 'Since 2008 we have offered mobile app development services that cover the spectrum of what is possible.  We like to say “if you can dream it up, then we can build it”.  We have created apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Apps</li>' +
                        '<li>Medical Apps</li>' +
                        '<li>Utility Apps</li>' +
                        '<li>Social Media Apps</li>' +
                        '<li>Geolocation Apps</li>' +
                        '<li>MLM Apps</li>' +
                        '<li>Companion Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise in Mobile App Development',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Mobile App Development Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your Mobile app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the Mobile app so that you can install the Mobile app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in submitting Mobile App to be live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        aiDevelopment: {
            title: "AI Development Services",
            description: "Transform Your Business with AI Solutions",
            image: "/images/ai-hero.png",
            alt: ["Transform Your Business with AI Solutions"],
            meta: {
                title: "AI Development Services",
                description: "Harness the power of AI with Clever Coding to drive innovation and efficiency."
            },
            cards: [
                {
                    title: "Our AI Capabilities",
                    description: "<ul class='text-left'>" +
                        "<li>Machine Learning: Develop predictive models to enhance decision-making.</li>" +
                        "<li>Natural Language Processing: Improve customer interactions with advanced NLP tools.</li>" +
                        "<li>OpenAI Integrations</li>" +
                        "<li>Leveraging open source LLMS like Llama3, Mistral, etc.</li>" +
                        "</ul>",
                    icon: "icon-ai"
                },
                {
                    title: "Why Choose Clever Coding?",
                    description: "<ul class='text-left'>" +
                        "<li>Proven Expertise: Trusted by clients for over a decade in delivering cutting-edge solutions.</li>" +
                        "<li>Customized Approach: We craft AI solutions tailored to your specific industry and requirements.</li>" +
                        "<li>Dedicated Support: From ideation to deployment, our team ensures a seamless integration of AI technologies.</li>" +
                        "</ul>",
                    icon: "icon-binary-code"
                },
                {
                    title: "Ready to Innovate?",
                    description: "Contact us to explore how our AI development services can transform your business.",
                    icon: "icon-open-ai"
                }
            ]
        },
        blockchainDevelopment: {
            title: "Blockchain Development Services",
            description: "Secure and Transparent Blockchain Solutions",
            image: "/images/blockchain-hero.png",
            alt: ["Secure and Transparent Blockchain Solutions"],
            meta: {
                title: "Blockchain Development Services",
                description: "Discover robust blockchain solutions with Clever Coding for enhanced security and transparency."
            },
            cards: [
                {
                    title: "Our Blockchain Expertise",
                    description: "<ul class='text-left'>" +
                        "<li>Smart Contracts Development.</li>" +
                        "<li>Decentralized Applications (DApps): Create secure, user-friendly decentralized applications.</li>" +
                        "<li>Blockchain Integration: Enhance existing systems with blockchain technology for improved security and transparency.</li>" +
                        "</ul>",
                    icon: "icon-blockchain"
                },
                {
                    title: "Why Clever Coding for Blockchain?",
                    description: "<ul class='text-left'>" +
                        "<li>Industry Leaders: Leveraging years of development experience to bring reliable blockchain solutions.</li>" +
                        "<li>Tailored Solutions: Custom blockchain applications designed to fit your unique business needs.</li>" +
                        "<li>Comprehensive Support: Full lifecycle support from concept to deployment and beyond.</li>" +
                        "</ul>",
                    icon: "icon-helm"
                },
                {
                    title: "Explore Blockchain with Us",
                    description: "Get in touch to discover how our blockchain development services can benefit your business.",
                    icon: "icon-brain"
                }
            ]
        },
        ourApproach: {
            title: "Our Approach",
            description: "Clever Coding has a simple yet thorough approach for the mobile development projects we work on.",
            image: '/images/temp/intro-approach.jpg',
            alt: ["Clever Coding has a simple yet thorough approach for the mobile development projects we work on."],
            meta: {
                title: "",
                description: ''
            },
            focus: {
                image: '/images/temp/focus-group.jpg',
                title: 'Long-term partnership',
                description: "Our goal is to be a great development partner with your company. We work hard during the initial development phase to lay the groundwork for a long term partnership with you focused on your success and delivering high quality products."
            },
            cards: [
                {
                    icon: 'icon-message',
                    title: "Understand your requirements",
                    description: 'We work with you to gather details about your project to insure we clearly understand your overall goals and requirements.'
                },
                {
                    icon: 'icon-calculator',
                    title: "Free no-obligation estimate",
                    description: 'Based on your goals and requirement we will put together an estimate for the cost of the project and the time frame we can have it completed in.'
                },
                {
                    icon: 'icon-route',
                    title: "Create a roadmap",
                    description: 'Once you are ready to move forward, we will work with you to establish a roadmap for the project including milestones, timeframes and deliverables.'
                },
                {
                    icon: 'icon-prototype',
                    title: "Rapid prototyping",
                    description: 'The first deliverable with be an app you can install on your mobile device or view on a mobile, tablet and desktop browsers.'
                },
                {
                    icon: 'icon-calendar-lg',
                    title: "Weekly builds",
                    description: 'Our goal is to provide you with a weekly build of your project so that you can see the progress made during the week and provide constant feedback on the project.'
                },
                {
                    icon: 'icon-meeting',
                    title: "Support",
                    description: 'Once the project is done we will assist you in getting your mobile apps published on Apple and Google and helping publish a public version of your website. We then hope to establish a long-term partnership with you to support the product and help develop future features.'
                }
            ]
        },
        prototyping: {
            title: 'Prototyping',
            description: 'Let us create a rapid prototyping for your project',
            image: '/images/temp/intro-prototyping.png',
            alt: ["Prototyping and UX/UI Design project for an app client from Clever Coding", "Prototyping and UX/UI Design project for a website client from Clever Coding", "Team of IOS and Android mobile app developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Prototyping Overview',
                    description: 'We have a team of designers ready to take your app idea from concept to completion. Clever Coding offers rapid prototyping services to ensure clear understanding between the client and designer.' +
                        'Clever Coding will help you visualize your idea, by creating a proof of concept prototype so you can quickly see your idea coming to life, just the way you have imagined it.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Prototyping Design',
                    description: 'When designing an app or website we rely on our expertise to focus on the following core principles:',
                    content: '<ul class="text-left">' +
                        '<li>Intuitive design that is easy to use</li>' +
                        '<li>Maintaining your company brand</li>' +
                        '<li>Cross platform friendly designs</li>' +
                        '<li>User productivity</li>' +
                        '<li>Minimum task completion time</li>' +
                        '<li>In mobile apps - ensuring we adhere to Apple’s and Google’s UI guidelines</li>' +
                        '</ul><!-- /.list-bullets -->',
                    icon: 'icon-nodes'
                },
                {
                    title: 'App Prototyping',
                    description: 'Some apps may contain features that need to be tested on-device to evaluate the feasibility of the project.  We offer rapid prototyping services to let you test your concept before committing to a Mobile/Web App development contract.' +
                        'Some clients come to us with other reasons to create a prototype of their app.  No matter what your reason is we can rapidly create a prototype of your mobile app or website that allows you to take your idea to the next level.',
                    icon: 'icon-tablet-mobile'
                }]
        },
        projectRescues: {
            title: 'Project Rescues',
            image: '/images/temp/intro-project-rescues.png',
            alt: [""],
            meta: {
                title: "",
                description: ''
            },
            sections: [
                {
                    title: "Project Rescues",
                    description: 'Rescuing the lost and stranded projects from ruin',
                    cards: [
                        {
                            icon: 'icon-overview',
                            title: "Overview",
                            description: '<p>On a regular basis we get contacted by potential clients that tell us horror stories of app and website projects gone horribly wrong.  Our goal is to help these clients rescue their project and get it completed in the quickest most cost effective way possible.</p>',
                        },
                        {
                            icon: 'icon-common-issues',
                            title: "Common Issues",
                            description: '<p>There are a wide variety of issues that may arise that would cause a mobile app or website project to require rescue.  Some of the common reasons people choose Clever Coding to help them include:</p>' +
                                '<ul class="text-left">' +
                                '<li>Huge project cost overruns</li>' +
                                '<li>Unstable and unusable apps</li>' +
                                '<li>Deadlines not being met in a reasonable time frame</li>' +
                                '<li>Communication barriers with foreign developers</li>' +
                                '<li>Unresponsive developers not meeting the client\'s expectations</li>' +
                                '</ul>',
                        },
                        {
                            icon: 'icon-the-fix',
                            title: "The Fix",
                            description: '<p>The first step in the process is to get us access to the current code base.  We are happy to sign an NDA before you send us the code.  When we receive the code we will do a thorough review and come back to you with our recommendations on the best way to move forward.  This review of the code is done for free with no obligation to you.</p>' +
                                '<p>Our goal is to always find the best solution that provides the quickest turn around and lowest cost to completion.  That being said anything we work on and deliver to clients has to meet certain quality standards which may mean some parts of the project may need to be redone or at least cleaned up before those standards are met.  Any code we identify that does not meet our quality standards will be discussed with you during the free no obligation review process.</p>',
                        },
                    ],
                    actions: null
                }
            ],
        },
        testimonials: {
            title: "Testimonials",
            description: "We have had the privilege of working with some great clients from around the world. We always work hard to do an amazing job for our clients and provide incomparable service. Don’t just take our word for it. Here is what a few of our clients had to say after working with us.",
            image: '/images/temp/intro-testimonials.jpg',
            alt: ["Read what our customers are saying about us."],
            meta: {
                title: "",
                description: ''
            },
            list: [
                {
                    image: '/images/testimonials/testimonial-1.png',
                    author: 'Duff Tittle, Associate Athletics Director - Communications',
                    company: 'BRIGHAM YOUNG UNIVERSITY',
                    text: "We had a great experience working with Clever Coding during the creation of the BYU Cougars mobile app. The team at Clever Coding was extremely skilled, innovative and very easy to work with. From conceptual design through launch of the mobile app our experience was fantastic. I highly recommend Clever Coding."
                },
                {
                    image: '/images/testimonials/testimonial-2.png',
                    author: 'Timothy Lyon, CEO',
                    company: 'RED MAT MEDIA',
                    text: "Working with Clever Coding has been perfect for us. They are very creative and responsive. They have helped us with many different apps. We worked with other app developers in the past and did not have a positive experience, with Clever Coding it has been great from the beginning."
                },
                {
                    image: '/images/testimonials/testimonial-3.png',
                    author: 'Micah Smurthwaite, Founder',
                    company: 'SHOWSCOPP',
                    text: "In terms of design and functionality, the Clever Coding Team guided my project from concept to execution. They balance best-in-class knowledge of technical skills with creative solutions to deliver superior results."
                },
                {
                    image: '/images/testimonials/testimonial-4.png',
                    author: 'Shelby Meinzer, Founder',
                    company: 'MINDTAPP',
                    text: "Working with Clever Coding has been an all around amazing experience. The group that Steve has put together is a very talented and hard working crew. They are also incredibly easy to work with and bring a lot to the table. Clever Coding can cover everything from design to development and deployment, they even gave me tips on how to market my app. I will go back to Clever Coding for all my iOS development needs."
                },
                {
                    image: '/images/testimonials/testimonial-5.png',
                    author: 'Brad Ainge, Owner',
                    company: 'POSITIVE DISCIPLINE',
                    text: "Working with Clever Coding has been a wonderful experience. They provided all the functionality we needed in our app and even added some additional features that made it even better. They were able to create versions for Apple devices as well as Android. I would highly recommend Clever Coding and we plan on working with them in the future."
                },
                {
                    image: '/images/testimonials/testimonial-6.png',
                    author: 'Luke Biesinger, CEO',
                    company: 'UNIVERSITY VALUES',
                    text: "We had an excellent experience working with Clever Coding and are very satisfied with the three apps they have built for us over the past two years. We especially appreciate their high levels of integrity, communication, and competency."
                },
                {
                    image: '/images/testimonials/testimonial-7.png',
                    author: 'Larry Myler, CEO',
                    company: 'By MONDAY, INC.',
                    text: "So few app development companies deliver what they promise, but Clever Coding performed beyond my expectations. I will be using them again very soon."
                },
                {
                    image: '/images/testimonials/testimonial-8.png',
                    author: 'Shaw Phillips, Owner and CEO',
                    company: 'HEARTS FOR HOSPICE AND HOME HEALTH',
                    text: "When we started looking at an iTunes Apps we didn’t know where to go. We called Clever Coding, not only did they make every need we had come true, but did it at a very fair price. We have had lots of business from our App due to the great design Clever Coding did for us. Very pleased customer!"
                },
                {
                    image: '/images/testimonials/testimonial-9.png',
                    author: 'Bruce Buzbee, President',
                    company: 'ROOTSMAGIC, INC.',
                    text: "When we decided to create a companion iPhone / iPad app for our RootsMagic desktop software, we looked at a number of different companies, both US and overseas. We had narrowed our decision down to two companies, but chose Clever Coding based on the positive feedback we got from another company they had done work for. <br />Choosing Clever Coding was the best decision we could have made. They were easy to work with, and were more than capable of handling the complicated code and algorithms we threw at them. They helped us design a user interface that was both intuitive and nice to look at, and were able to point out potential pitfalls before we ran into them. <br />The bottom line? We were so pleased with their work that we hired them to create our Android app as well."
                }
            ]
        },
        webAppDevelopment: {
            title: 'Web App Development',
            description: 'Creating amazing web apps since 2006',
            image: '/images/temp/intro-web-app-development.png',
            alt: ["Desktop & web app project for a business client from Clever Coding", "Team of software developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Web App Development Overview',
                    description: 'Clever Coding has offered web app development services since 2008. We have provided web app development services for clients around the world. ' +
                        'If you need web app development services you have come to the right place. When you hire us for your web app development needs you are hiring the best. ' +
                        'Our goal is to turn your Web app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise in Web App Development',
                    description: 'Since 2008 we have built hundreds of apps that cover the spectrum of what is possible.  We like to say “if you can dream it up, then we can build it”.  We have created apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Apps</li>' +
                        '<li>Medical Apps</li>' +
                        '<li>Utility Apps</li>' +
                        '<li>Social Media Apps</li>' +
                        '<li>Geolocation Apps</li>' +
                        '<li>MLM Apps</li>' +
                        '<li>Companion Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise in Web App Development',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Web App Development Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your web app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the Web app so that you can view the web app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in getting the web app live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
        websiteDevelopment: {
            title: 'Web Development',
            description: 'Creating amazing websites since 2006',
            image: '/images/temp/intro-web-development.png',
            alt: ["website development project for a business client from Clever Coding", "Web development project that has both a mobile and desktop responsive design", "Team of web developers at Clever Coding"],
            meta: {
                title: "",
                description: ''
            },
            cards: [
                {
                    title: 'Web Development Overview',
                    description: 'Clever Coding has offered web development services since 2008. We have provided web development services for clients around the world. ' +
                        'If you need web development services you have come to the right place. When you hire us for your web development needs you are hiring the best. ' +
                        'Our goal is to turn your Web app idea into a reality. Even though we are based in Lehi, Utah. We are happy to travel to any location to meet with you if needed.  ' +
                        'With tools like zoom and google meet we have found most projects can be done fully remote.',
                    icon: 'icon-eye'
                },
                {
                    title: 'Industry Expertise in Web Development',
                    description: 'Since 2008 we have built hundreds of apps that cover the spectrum of what is possible.  We like to say “if you can dream it up, then we can build it”.  We have created apps for almost every different industry. A few of them include:',
                    content: '<ul class="text-left">' +
                        '<li>Business Apps</li>' +
                        '<li>Medical Apps</li>' +
                        '<li>Utility Apps</li>' +
                        '<li>Social Media Apps</li>' +
                        '<li>Geolocation Apps</li>' +
                        '<li>MLM Apps</li>' +
                        '<li>Companion Apps to supplement existing website</li>' +
                        '</ul>',
                    icon: 'icon-nodes'
                },
                {
                    title: 'Areas of Expertise in Web Development',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Use of geolocation services</li>' +
                        '<li>Networking</li>' +
                        '<li>Integration with external websites and web services, APIs</li>' +
                        '<li>Store state between sessions</li>' +
                        '<li>Mobile Databases</li>' +
                        '<li>Use of XML and JSON</li>' +
                        '<li>Integrating mic including recording user audio</li>' +
                        '<li>Using system services including email, address book, mobile browser and maps</li>' +
                        '<li>Push Notifications</li>' +
                        '<li>Integration with Facebook, Twitter and other Social Networks</li>' +
                        '<li>In App Purchases. Integration with merchant services like Stripe, Paypal</li>' +
                        '<li>Integration of Analytics Packages</li>' +
                        '</ul>',
                    icon: 'icon-brain'
                },
                {
                    title: 'Our Web Development Services to Clients in any location',
                    description: '',
                    content: '<ul class="text-left">' +
                        '<li>Weekly status reports on the progress of your web app</li>' +
                        '<li>Rapid Prototyping</li>' +
                        '<li>Regular builds of beta versions of the web app so that you can view the web app on your own devices during development</li>' +
                        '<li>Help getting accounts setup with Apple and Google, Amazon Web Services, etc</li>' +
                        '<li>Assistance in getting the web app live and available to the public</li>' +
                        '</ul>',
                    icon: 'icon-pin'
                }]
        },
    }
})

