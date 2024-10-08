import USER from "./assets/icons/user.png";
import MONEY from "./assets/icons/money.png";
import FOLDER from "./assets/icons/folder.png";

import NUMBERONE from "./assets/icons/numbers/1.png";
import NUMBERTWO from "./assets/icons/numbers/2.png";
import NUMBERTHREE from "./assets/icons/numbers/3.png";
import NUMBERFOUR from "./assets/icons/numbers/4.png";
import NUMBERFIVE from "./assets/icons/numbers/5.png";

import JIHANCHEN from "./assets/headshots/JihanChen.jpg";
import MARCOSSANCHEZNAVARRO from "./assets/headshots/MarcosSanchezNavarro.jpg";
import SHIYAONING from "./assets/headshots/ShiyaoNing.jpg";
import RILKWONG from "./assets/headshots/RilkWong.jpg";
import ZHIHUISI from "./assets/headshots/ZhihuiSu.jpeg";
import ETHANTSE from "./assets/headshots/EthanTse.png";
import SUSANNABELT from "./assets/headshots/SusannaBelt.jpeg";
import SIROUWANG from "./assets/headshots/SirouWang.jpg";
import SEZINADAYAYDIN from "./assets/headshots/SezinAdayAydin.jpg";
import ALICEHOU from "./assets/headshots/AliceHou.jpg";
import SHREYASRAORANE from "./assets/headshots/ShreyasRaorane.jpg";

import INFOSOCIAL from "./assets/events/Info-Social.png";
import MEMBERSHIPAPPLICATIONFLYER from "./assets/events/Membership-Application-Flyer.png";
import PROBONOPROJECTSFALL2024 from "./assets/events/Pro-Bono-Projects-Fall-2024 .png";

import BCG from "./assets/sponsors/gold/bcg.png";
import BGSA from "./assets/sponsors/gold/bgsa.jpeg";
import CLEARVIEW from "./assets/sponsors/gold/clearview.png";
import GAPSA from "./assets/sponsors/gold/gapsa.png";
import LEK from "./assets/sponsors/gold/lek.jpg";
import LPS from "./assets/sponsors/gold/lps.png";
import MCKINSEY from "./assets/sponsors/gold/mckinsey.jpg";
import PENNENG from "./assets/sponsors/gold/penn-eng.png";

import FANSURE from "./assets/sponsors/silver/fansure.png";
import LANDMARK from "./assets/sponsors/silver/landmark.png";
import PENNARTS from "./assets/sponsors/silver/penn-arts.png";
import PENNDESIGN from "./assets/sponsors/silver/penn-design.png";
import PENNSPP from "./assets/sponsors/silver/penn-spp.jpeg";
import PREPLOUNGE from "./assets/sponsors/silver/preplounge.png";

// Navbar
export const HOME = "";
export const ABOUT = "about";
export const EVENTS = "events";
export const CONSULTING = "consulting";
export const SPONSORS = "sponsors";
export const RESOURCES = "resources";
export const CALENDAR = "calendar";
export const CONTACTUS = "contact-us";

export const tabList = [
  {
    tabName: "Home",
    tabPath: "",
  },
  {
    tabName: "About",
    tabPath: ABOUT,
  },
  {
    tabName: "Events",
    tabPath: EVENTS,
  },
  {
    tabName: "Pro Bono Projects",
    tabPath: CONSULTING,
  },
  {
    tabName: "Sponsors",
    tabPath: SPONSORS,
  },
  {
    tabName: "Resources",
    tabPath: RESOURCES,
  },
  // {
  //   tabName: "Calendar",
  //   tabPath: CALENDAR,
  // },
];

//Home Page

export const missionContentParaList = [
  `Penn Graduate Consulting Club (PGCC) is one of the largest student-run consulting clubs for non-MBA graduate students (PhDs, MDs, JDs, master's, etc.) and post-docs at the University of Pennsylvania. The mission of PGCC is to educate the community about the consulting industry and to help advanced degree candidates prepare for a career in consulting.`,
  `PGCC currently has 500+ members and a strong impact on the broader Penn Community. More than 80% of our members show great passion for a consulting career, and more than 200 members will be applying for full-time jobs or internships in the next recruiting cycle.`,
];

export const PGCCGetInvolvedList = [
  {
    id: "PGCCGetInvolved1",
    titleIcon: USER,
    title: "Join Our Executive Board",
    para: `Are you a graduate candidate or post-doc interested in consulting looking to be part of our organization? Applications Open!`,
    buttonText: "Learn more and apply",
    buttonRoute:
      "https://docs.google.com/forms/d/e/1FAIpQLSfC4CrmC7CDmbE9xSZ7_tMwBMKTfObncPPYZxS0uEaA_rXFKg/viewform",
  },
  {
    id: "PGCCGetInvolved2",
    titleIcon: MONEY,
    title: "Become a Sponsor",
    para: `Sponsoring our annual PGCC Case Competition offers a great branding opportunity for your organization.`,
    buttonText: "Find out more",
    buttonRoute: `/${SPONSORS}`,
  },
  {
    id: "PGCCGetInvolved3",
    titleIcon: FOLDER,
    title: "Work With Us",
    para: `PGCC offers pro bono consulting to organizations, providing consultants with analytical skillsets and creativity.`,
    buttonText: "Learn more",
    buttonRoute: `/${CONSULTING}`,
  },
];

export const PGCCNumStatsList = [
  {
    id: "PGCCNumStat1",
    title: "500+",
    subTitle: "Passionate Members",
  },
  {
    id: "PGCCNumStat2",
    title: "12",
    subTitle: "Penn Schools Represented",
  },
  {
    id: "PGCCNumStat3",
    title: "100+",
    subTitle: "Case Comp Participants",
  },
];

// About Page

export const ABOUTHEADER = "About";
export const ABOUTSUBHEADER = "Learn what we do and meet our executive board";
export const ABOUTOVERVIEW = `Welcome to the site of the Penn Graduate Consulting Club (PGCC). The purpose of our group is to serve the members of the Penn graduate and post-doctoral community who share a common interest in learning about careers in management consulting. To this end, we host multiple events, including an annual case competition, panel discussions, seminars, workshops, and lively networking receptions. Members can participate in pro bono consulting projects for real-world clients in order to gain hands-on experience in management consulting. We also create opportunities for our members to understand the perspectives of both experienced and freshly minted consultants. It is our goal to provide our 500+ members with an in-depth exposure to the consulting industry, and with ample support in preparing for case-based interviews.`;

export const OurFocusList = [
  {
    id: "FocusNum1",
    numImg: NUMBERONE,
    numImgAlt: "NUMBERONE",
    para: `Increasing awareness of alternative career paths by introducing the Penn graduate and post-doctoral community to career opportunities in management consulting`,
  },
  {
    id: "FocusNum2",
    numImg: NUMBERTWO,
    numImgAlt: "NUMBERTWO",
    para: `Assisting our members with the application process`,
  },
  {
    id: "FocusNum3",
    numImg: NUMBERTHREE,
    numImgAlt: "NUMBERTHREE",
    para: `Equipping non-MBA students with basic business knowledge`,
  },
  {
    id: "FocusNum4",
    numImg: NUMBERFOUR,
    numImgAlt: "NUMBERFOUR",
    para: `Providing opportunities to practice for case interviews`,
  },
  {
    id: "FocusNum5",
    numImg: NUMBERFIVE,
    numImgAlt: "NUMBERFIVE",
    para: `Helping consulting firms facilitate the recruitment of non-MBA graduate students at Penn`,
  },
];

export const execBoardList = [
  {
    id: `jihan`,
    content: `Jihan is a 2nd-year MS candidate in the Computer and Information Technology (MCIT) program in the School of Engineering and Applied Sciences. Prior to becoming Co-President, he was a VP of Marketing Strategy at PGCC in the 2023-2024 academic year. While varied, his career interests include software engineering, product management, technology consulting, and management consulting. As Co-President, Jihan hopes to continue expanding PGCC’s influence on Penn’s campus, level up PGCC’s technological front, and bring more high-quality in-person events and programs to PGCC members and those interested in consulting and business-relevant careers. Outside of PGCC and his CS coursework, Jihan enjoys learning hip-hop and k-pop choreographies, reading, and city-walking.`,
    name: "Jihan Chen",
    title: "Co-President",
    linkedin: "https://www.linkedin.com/in/9912-jihan-chen/",
    email: "jihanc@seas.upenn.edu",
    image: JIHANCHEN,
  },
  {
    id: `marcos`,
    content: `Marcos Sanchez is a 5th year PhD Candidate in the Neuroscience Graduate Group (NGG) at the Perelman School of Medicine. His PhD thesis work seeks to understand how obesity impacts neural circuits encoding the rewarding value of food and regulating appetite to identify more effective pharmacotherapies to treat obesity. Marcos is fascinated by the intersection of science, innovation, and real-world applications; therefore, he is interested in pursuing careers in life science consulting, or more broadly, biopharmaceutical companies. Prior to becoming Co-President, he was a VP of Operations at PGCC in the 2023-2024 academic year. As Co-President of PGCC, Marcos is dedicated to ensuring PGCC continues to improve and provides its members experience and all the necessary tools to succeed in the world of management consulting. Outside of PGCC and the laboratory setting, Marcos is an avid sports fan, enjoys dancing salsa and bachata, playing video games, and loves going to the beach.`,
    name: "Marcos Sanchez",
    title: "Co-President",
    linkedin: "www.linkedin.com/in/marcos-sanchez-72b534145",
    email: "Sanma@pennmedicine.upenn.edu",
    image: MARCOSSANCHEZNAVARRO,
  },
  {
    id: `shiyao`,
    content: `Shiyao is a first-year Master of Biotechnology candidate at Penn Engineering. She recently graduated from the University of Toronto with majors in Biochemistry and Human Biology and is now moving into biotechnology consulting and investment. As Co-VP of Marketing Strategy for PGCC, Shiyao aims to enhance PGCC’s impact by engaging the campus community in exploring careers in consulting. She is enthusiastic about leveraging her past experiences at IQVIA management consulting and Mengniu Dairy's Corporate Venture Capital to bring insightful and interactive events to PGCC members. On weekends, Shiyao loves to spend time in nature with her friends and her dog, Tezzy.`,
    name: "Shiyao Ning",
    title: "Co-VP of Marketing Strategy",
    linkedin: "http://linkedin.com/in/sning",
    email: "sning@seas.upenn.edu",
    image: SHIYAONING,
  },
  {
    id: `rilk`,
    content: `Rilk is a 1st-year Master of Science candidate in System Engineering at Penn Engineering. He has recently completed his bachelor degree of science in Financial Mathematics in Xi’an Jiaotong-Liverpool University, China. He has worked at an angel investment company and is interested in Data Analysis, Data Transaction and Tech Consulting. He has been responsible for several transnational landing projects and has rich experience in marketing. As the Co-VP of Marketing Strategy, Rilk hopes to maximize PGCC’s influence and benefit Graduate students at Penn as much as possible. Outside of PGCC and working, Rilk is an avid shutterbug, he also enjoys badminton, basketball and road trips.`,
    name: "Rilk Wong",
    title: "Co-VP of Marketing Strategy",
    linkedin: "/about",
    email: "rilk@seas.upenn.edu",
    image: RILKWONG,
  },
  {
    id: `zhihui`,
    content: `Zhihui Su is a 5th year PhD Candidate in the Chemical and Biomolecular Engineering (CBE) in the School of Engineering and Applied Sciences (SEAS). Her PhD thesis work focuses on building synthetic membraneless organelles with intrinsically disordered protein linked with short coiled-coil peptide motifs. Beyond her research pursuits, Zhihui is deeply passionate about exploring the intersection of biotechnology and business, specifically pharmaceutical and life sciences consulting. Prior to becoming the Co-VP of Casing at PGCC, Zhihui has served as the Treasurer for American Chemical Society Biochemical Division (ACS BIOT) Mid-Atlantic Chapter in the 2021-2024 academic year; received Mini-MBA certificate from Penn Biotech Group (PBG) in 2023; and won fourth place in 2023 PBG Biotech Investment Research Program Pitch Competition. As Co-VP of Casing, Zhihui is dedicated to equipping members with business knowledge and analytical skills and engaging members with case interview workshops. Furthermore, Zhihui is also excited to organize case competition events. In her free time, Zhihui enjoys traveling, hiking, and working out.`,
    name: "Zhihui Su",
    title: "Co-VP of Casing",
    linkedin: "https://www.linkedin.com/in/zhihui-su-813264a4/?locale=en_US",
    email: "zhihuisu@seas.upenn.edu",
    image: ZHIHUISI,
  },
  {
    id: `ethan`,
    content: `Ethan Tse is a 2nd year Masters of Public Health (MPH) student at the Perelman School of Medicine. He completed his undergrad at California Polytechnic State University, San Luis Obispo, with a BS in Public Health and double minors in Entrepreneurship and Tech Policy. Passionate about healthcare, emerging technologies, and social impact, he's navigated a wide array of experiences ranging from PE/VC, consulting, business development, startups, public health research, and entrepreneurship. As a Co-VP of Career Development, Ethan's aims to support his peers in blazing their own trail into the world of consulting and beyond.  At Penn, he's also involved in Wharton Impact Venture Associates and Penn Biotech Group as the Co-VP of Case Competition. In his free time, Ethan can be found playing basketball, running half marathons, relaxing on the Schuylkill river trail, seeing family in NYC, and cultivating his entrepreneurial network.`,
    name: "Ethan Tse",
    title: "Co-VP of Career Development",
    linkedin: "https://www.linkedin.com/in/ethan-tse-story/",
    email: "ethan.tse@pennmedicine.upenn.edu",
    image: ETHANTSE,
  },
  {
    id: `susanna`,
    content: `Susanna Belt is a 4th year doctoral candidate in Chemical and Biomolecular Engineering at the University of Pennsylvania. She completed her undergraduate degree in Chemical and Biological Engineering at Princeton University and her masters degree in Biomedical Engineering from Columbia University, where her research focused on developing bioprosthetic heart valves for use in pediatric patients. Her current research focuses on evaluating how cellular contractility controls extracellular matrix composition and function of developing hearts. It uses a combination of optical live imaging, RNA sequencing techniques, and second harmonic imaging to dissect these mechanosensitive cardiac pathways. Before joining the PGCC E-board as a Co-VP of Career Development, Susanna was on the graduate board for Advancing Women in Engineering (AWE) and was Co-President of the Chemical Engineering Graduate Association (CHEGA). As Co-VP of Career Development for PGCC, she is dedicated to curating events, such as collaborative workshops geared toward aiding students with each step of the hiring process, from resume building to interview prep, designed to not only connect members with not only career opportunities but also PGCC alumni to provide personal insight into the consulting industry. In her free time, she loves painting, traveling to new places, and reading in the rain.`,
    name: "Susanna Belt",
    title: "Co-VP of Career Development",
    linkedin: "https://www.linkedin.com/in/susanna-belt/",
    email: "sbelt@seas.upenn.edu",
    image: SUSANNABELT,
  },
  {
    id: `sirou`,
    content: `Sirou Wang is a 2nd year student at the University of Pennsylvania majoring in Interdisciplinary Studies in Human Development with a concentration in basic counseling. With a strong background as an analyst and project manager on the PGCC Spotivity pro bono project, Sirou hopes to better PGCC by diversifying its projects and initiatives. In addition to her work with PGCC, Sirou was involved with the Penn Biotech Group as an analyst and is currently interning at Think Advanced Learning (TAL or Xue Er Si) as a course development intern. Alongside her internship, she runs her own English learning program. Sirou is passionate about pursuing opportunities related to education, educational consulting, and entrepreneurship. In her free time, she enjoys traveling, hanging out, yapping, painting, and playing the guitar.`,
    name: "Sirou Wang",
    title: "Co-VP of Pro Bono Projects",
    linkedin: "https://www.linkedin.com/in/rose-wang-b4193b1b2",
    email: "sirou@upenn.edu",
    image: SIROUWANG,
  },
  {
    id: `sezin`,
    content: `Sezin is a postdoctoral fellow and project manager in the Bioengineering Department. She is an experienced researcher and tech transfer enthusiast who wants to create successful products/services that can significantly impact life sciences and improve patients' lives. Her research interests cover cell culture models, including organ-on-a-chip systems; micro- and nano-technologies for regenerative medicine; miRNAs in health and disease/injury; extracellular vesicles as therapeutics and biomarkers; and therapeutic angiogenesis. Before becoming the Co-VP of Pro Bono Projects at PGCC, Sezin was involved in 8 pro bono projects as manager/director. She was also a Penn Center for Innovation (PCI) fellow and a biotech venture team member. She got 2nd prize with her team at the Penn-Yale-Princeton, Columbia (PYPC) Case Competition and 1st prize at the PGCC Casebook Competition in 2023. As Co-VP of Pro Bono Projects, she aims to provide pro bono project opportunities that align with the interests of PGCC members and to attract new industry partners for the continuous growth of the club. She enjoys journaling, reading, and spending time with her cats in her free time.`,
    name: "Sezin Aday Aydin",
    title: "Co-VP of Pro Bono Projects",
    linkedin: "https://www.linkedin.com/in/sezin-aday-aydin/",
    email: "sezin@seas.upenn.edu",
    image: SEZINADAYAYDIN,
  },
  {
    id: `alice`,
    content: `Alice is an incoming Master of Biotechnology candidate at Penn Engineering. She graduated from Emory University in 2023 with a major in Biology and a minor in Economics. Currently, she works in the neurology lab at the Children's Hospital of Philadelphia, supporting translational research on patients with Leukodystrophy. Alice is particularly passionate about pursuing a career in the healthcare field. As the VP of Finance, Alice will bring valuable experience from her previous role, where she developed her skills in financial management and organizational leadership. In this role, she aims to secure sponsorships, manage the club's budget, and ensure financial transparency. Alice will work closely with other divisions to allocate resources effectively and support various initiatives and activities. Outside of her professional and academic pursuits, Alice enjoys playing tennis with friends and singing acapella. She also shares her home with two beloved cats.`,
    name: "Alice Hou",
    title: "VP of Finance",
    linkedin: "www.linkedin.com/in/zhongqi-alice-hou-83a357218/",
    email: "zhou639@seas.upenn.edu",
    image: ALICEHOU,
  },
  {
    id: `shreyas`,
    content: `Shreyas is a first-year Master of Robotics candidate at Penn Engineering with two years of professional experience in software development. During this time, he has honed his skills in website development, contributing to a range of projects with enthusiasm and precision. Shreyas is now eager to bring his expertise and innovative approach to PGCC, where he aims to make a meaningful impact. In his role as VP of Technology, apart from revamping the website, he plans to introduce new digital tools and platforms to streamline data collection and optimize event management. Outside of work and academics, he enjoys swimming and playing chess, finding these activities both refreshing and intellectually stimulating.`,
    name: "Shreyas Raorane",
    title: "VP of Technology",
    linkedin: "https://www.linkedin.com/in/shreyas-raorane/",
    email: "raorane@seas.upenn.edu",
    image: SHREYASRAORANE,
  },
];

// Events Page

export const EVENTSHEADER = "Events";
export const EVENTSSUBHEADER =
  "Get involved with PGCC by attending or hosting events with us";
export const EVENTSOVERVIEW = `PGCC hosts panels with speakers from top consulting and business firms as well as guided case workshops, helping members network and prepare for interviews. Follow our Facebook and Instagram to stay up to date about our events and subscribe to our newsletter for more information.`;

export const EVENTSUPCOMINGLIST = [
  {
    id: "upcoming-event-1",
    imgSrc: INFOSOCIAL,
    imgAlt: "INFOSOCIAL",
  },
  {
    id: "upcoming-event-2",
    imgSrc: MEMBERSHIPAPPLICATIONFLYER,
    imgAlt: "MEMBERSHIPAPPLICATIONFLYER",
  },
  {
    id: "upcoming-event-3",
    imgSrc: PROBONOPROJECTSFALL2024,
    imgAlt: "PROBONOPROJECTSFALL2024",
  },
];

// Consulting Page

export const CONSULTINGHEADER = "Pro Bono Consulting";
export const CONSULTINGSUBHEADER =
  "PGCC members can solve business problems for companies across a variety of industries";
export const CONSULTINGOVERVIEW = `PGCC offers pro bono consulting to interested organizations. We staff projects with enthusiastic and bright advanced degree candidates and post-doctoral researchers who use their analytical skillset and creativity to generate solutions for our clients. Projects are staffed with a project director and a project manager, both of whom work closely with the client to scope the project, and 4-6 team members who work together to produce key insights. The end products are a well-crafted deliverable for the client and an inside look into the world of management consulting for the team.`;

// Sponsors Page

export const SPONSORSHEADER = "Sponsors";
export const SPONSORSSUBHEADER =
  "Connect with top talent while supporting our members";
export const SPONSORSCONTENT = `PGCC offers firms the chance to network with a future talent pool consisting of over 500 graduate students and postdocs from the University of Pennsylvania. Our sponsors create opportunities for our members by funding case competitions, speaker events, and scholarships. Reach out to us to learn how you can become a sponsor.`;

export const GOLDSPONSORSLIST = [
  {
    logo: BCG,
    link: "https://www.bcg.com/",
  },
  {
    logo: BGSA,
    link: "https://www.bcg.com/",
  },
  {
    logo: CLEARVIEW,
    link: "http://www.clearviewhcp.com/",
  },
  {
    logo: GAPSA,
    link: "https://www.gapsa.upenn.edu/",
  },
  {
    logo: LEK,
    link: "https://www.lek.com/",
  },
  {
    logo: MCKINSEY,
    link: "https://www.mckinsey.com/",
  },
  {
    logo: LPS,
    link: "https://www.sas.upenn.edu/lps/welcome",
  },
  {
    logo: PENNENG,
    link: "https://www.seas.upenn.edu/",
  },
];

export const SILVERSPONSORSLIST = [
  {
    logo: FANSURE,
    link: "https://fansure.com/",
  },
  {
    logo: PENNARTS,
    link: "https://www.sas.upenn.edu/",
  },
  {
    logo: PENNDESIGN,
    link: "https://www.design.upenn.edu/",
  },
  {
    logo: PENNSPP,
    link: "https://www.sp2.upenn.edu/",
  },
  {
    logo: PREPLOUNGE,
    link: "https://www.preplounge.com/en/",
  },
];

// Resources Page

export const RESOURCESHEADER = "Helpful Resources";
export const RESOURCESSUBHEADER =
  "Check out the books, podcasts, and case prep resources PGCC recommends";

// Calendar Page

export const CALENDARHEADER = "Calendar";
export const CALENDARSUBHEADER = "Follow along with us with our events";

// Contact Us Page

export const CONTACTUSHEADER = "Get in touch";
export const CONTACTUSSUBHEADER =
  "Inquire about our club through the form and we will respond within 48 hours";

// Footer

export const FooterContent = [
  {
    id: "FooterHeading1",
    footerHeading: "Partnering Organizations",
    footerList: [
      {
        id: "FooterHeading1Item1",
        name: "Penn Biotech Group",
        routeTo: "https://pennbiotechgroup.org/",
      },
      {
        id: "FooterHeading1Item2",
        name: "PennSEM",
        routeTo: "https://pbgconsulting.org/PBGsite/",
      },
    ],
  },
  {
    id: "FooterHeading2",
    footerHeading: "Social Media",
    footerList: [
      {
        id: "FooterHeading2Item1",
        name: "Instagram",
        routeTo: "https://www.instagram.com/upenn_pgcc/",
      },
      {
        id: "FooterHeading2Item2",
        name: "LinkedIn",
        routeTo: "https://www.linkedin.com/groups/1829393/",
      },
    ],
  },
];
