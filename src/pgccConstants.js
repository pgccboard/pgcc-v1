import USER from "./assets/icons/user.png";
import MONEY from "./assets/icons/money.png";
import FOLDER from "./assets/icons/folder.png";

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
    tabName: "Consulting",
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
  {
    tabName: "Calendar",
    tabPath: CALENDAR,
  },
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
    para: `Are you a graduate candidate or post-doc interested in consulting looking to be part of our organization? Applications now open for co-chair of case competition, VP for finance, VP for career development, and VP for business administration.`,
    buttonText: "Learn more and apply",
    buttonRoute:
      "https://docs.google.com/forms/d/e/1FAIpQLSfeOiYdNQLtip8O-Hzjzu-NNe0WmE5KBOFTy4bxV4vcfhIO3A/viewform",
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

// Events Page

export const EVENTSHEADER = "Events";
export const EVENTSSUBHEADER =
  "Get involved with PGCC by attending or hosting events with us";
export const EVENTSOVERVIEW = `PGCC hosts panels with speakers from top consulting and business firms as well as guided case workshops, helping members network and prepare for interviews. Follow our Facebook and Instagram to stay up to date about our events and subscribe to our newsletter for more information.`;

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
