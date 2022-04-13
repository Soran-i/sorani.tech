AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mechatronics Engineer Intern",
    cardImage:
      "assets/images/experience-page/wabtec-corporation-logo-vector.svg",
    place: "Wabtec Corporation",
    time: "(May 2021 - Present)",
    desp: "<li></li><li></li><li></li>",
  },
  {
    title: "Student Software Engineer",
    cardImage:
      "assets/images/experience-page/western-university-vector-logo.svg",
    place: "Department of Earth Sciences, Western University",
    time: "(May 2020 - April 2021)",
    desp: "<li>Migrated app to Google Maps from Mapbox API, increasing battery life by <b>32%</b> </li><li>Identified memory leaks in objective-C using XCode debugging tools and repaired them by eliminating retain cycles</li><li><b>Leveraged knowledge in</b> automatic reference counting, Google Maps, Mapbox, Scrum & Agile development framework, Model View Controller design pattern</li>",
  },
  {
    title: "Electrical Engineer Intern",
    cardImage: "assets/images/experience-page/Magna_logo.svg",
    place: "Magna International",
    time: "(May 2019 - Sep 2019)",
    desp: "<li>Designed and constructed schematic for a torque robot control panel, consisting of safety relays, PLC IO modules, and other rack devices for electrical safety authority approval</li><li>Utilized Solidworks with 3D printing to solve <b>18</b> safety and ergonomic issues with a maximum <b>3</b> day lead time as they arose on the assembly line</li> <li>Developed a quality control program using Python to detect failures in robot inspection pictures requiring further verification</li> <li><b>Leveraged knowledge in </b> HTML, CSS, Javascript (ES6), Docker, Selenium, pyTesseract, and FANUC Robots </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ul>
              ${desp}
            </ul>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hack Western",
    subtitle: "Hacker",
    image: "assets/images/experience-page/hackwestern.png",
    desp: "Our team made Treble the music bot for Discord!",
  },
  {
    title: "RoboHacks",
    subtitle: "Hacker",
    image: "assets/images/experience-page/MLH.png",
    desp: "Our team made an instagram caption generator that utilizes google cloud machine learning API services, Flask as a backend and React as a frontend.",
  },
  {
    title: "Hack The North",
    subtitle: "Hacker",
    image: "assets/images/experience-page/hackthenorth.png",
    desp: "Out team developed app that allows you to locate lost devices using an SMS API called Twilio.",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
