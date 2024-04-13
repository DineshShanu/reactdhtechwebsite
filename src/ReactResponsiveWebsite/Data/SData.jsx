import WebD from "../Images/Web-Development.png";
import AppD from "../Images/App-Development.png";
import SofD from "../Images/Software-Development.png";
import DegD from "../Images/Digital-Development.png";
// import AndD from "../Images/Android-Development.png";
// import Mar from "../Images/Marketing.png";
import MyImg from "../Images/Dp.png";

import deloitt from "../Images/Projects/deloitte.png";
import carrier from "../Images/Projects/carrier.png";
import medaz from "../Images/Projects/medaz.png";
import officegx from "../Images/Projects/officegx.png"
import intership from "../Images/Projects/internships.png";


const SData = [
    {
        imgsrc: WebD,
        title: "Web Development",
        cardtext: "Web development focuses on creating websites and web applications, involving designing, coding, and deploying using technologies like HTML, CSS, JavaScript, and backend frameworks.",
        btntext: "Visit"
    },
    // {
    //     imgsrc: AppD,
    //     title: "App Development",
    //     cardtext: "App development involves designing, coding, and deploying mobile applications for various platforms such as iOS and Android, utilizing frameworks and programming languages.",
    //     btntext: "Visit"
    // },
    {
        imgsrc: SofD,
        title: "Software Development",
        cardtext: "Software development involves systematically creating and deploying computer programs to fulfill user needs or business requirements, employing diverse tools and methodologies.",
        btntext: "Visit"
    },
    {
        imgsrc: DegD,
        title: "Digital Development",
        cardtext: "Digital development involves strategically leveraging digital technologies to innovate, streamline processes, and enhance experiences across different sectors like business, education, and healthcare.",
        btntext: "Visit"

    },
    // {
    //     imgsrc: AndD,
    //     title: "Android Development",
    //     cardtext: "Android development involves designing and coding mobile applications specifically for devices running the Android OS, utilizing programming Java or Kotlin and relevant development frameworks.",
    //     btntext: "Visit"
    // },
    // {
    //     imgsrc: Mar,
    //     title: "Marketing",
    //     cardtext: "Marketing involves strategically communicating value propositions to target audiences through various channels, aiming to attract, engage, and retain customers while achieving business objectives.",
    //     btntext: "Visit"
    // }
];

const Mydata = [
    {
        imgsrc: MyImg,
        title: "about me",
        cardtext: "I'm Dinesh Kuumar, a seasoned Full Stack .NET developer with C# and Asp.net MVC Core proficiency who thrives in creating creative software solutions that prioritize performance and scalability. I provide cutting-edge solutions that are customized to meet the demands of clients and I'm dedicated to staying current. thrives in teamwork settings, offering problem-solving abilities and meticulous attention to detail to guarantee project success while continuously aiming for perfection.",
        btntext: "Email"
    },
];

const Myprojects =[
    {
        imgsrc: WebD,
        title: "Q2Hire",
        cardtext: "My current project is the Q2Hire website design, which I'm working on to migrate from VB.Net to React and.NET Core 5 with SQL Server and use Azure CI CD pipeline to deploy in IIS Server.",
        siteUrl: "http://q2hire.com/",
        btntext: "Visit"
    },
    {
        imgsrc: deloitt,
        title: "MAT Global USI",
        cardtext: "Currently operating in the US and Israel, Mat Global is a product for audit and assurance that is used to conduct audits for both public and private firms. In order to conduct an audit, we need company data.",
        siteUrl: "https://matglobal.deloitte.com",
        btntext: "Visit"
    },
    {
        imgsrc: carrier,
        title: "Carrier",
        cardtext: "At Carrier, we understand that home is more than just a place. It’s how you feel. Everyone wants to come home to a space where feelings of comfort and security are a given, and you can rest assured that you and the people you care for are safer and healthier. Carrier provides that confidence every day.",
        siteUrl: "https://www.carrier.com/",
        btntext: "Visit"
    },
    {
        imgsrc: medaz,
        title: "Med A-Z",
        cardtext: "Med A-Z is an accredited Electronic Health Record and Practice management software company. With 350 years of combined software development experience, more than 100 years of clinical experience and years of client feedback, we know how to fulfill your needs.",
        siteUrl: "https://www.medaz.com/",
        btntext: "Visit"
    },
    {
        imgsrc: officegx,
        title: "Office-GX",
        cardtext: "OfficeGx is a Generation Next application to address all your office needs. OfficeGx is shipped with eight robust modules that can make your company operations run seamlessly. ",
        siteUrl: "https://www.officegx.com/",
        btntext: "Visit"
    },
    {
        imgsrc: intership,
        title: "Inernship",
        cardtext: "Seeking .NET Developer Interns! Gain hands-on experience, collaborate with experts, and contribute to real projects. Kickstart your career in software development!",
        siteUrl: "https://www.anblicks.com/",
        btntext: "Visit"
    },

]

export default SData;
export { Mydata, Myprojects};