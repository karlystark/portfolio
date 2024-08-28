import RoutesList from './RoutesList.js';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js";
// import Footer from "./Footer.js";
import './App.css';

/** App renders BrowserRouter, Nav, and RoutesList. Contains projectData and
 * feeds this as "projects" to RoutesList to be passed down to necessary
 * components.
 *
 * props: none
 *
 * state: none
 *
 * index => App => {BrowserRouter, Nav, RoutesList}
 */

function App() {
  const projectData = [
    {
      "id": 1,
      "title": "Shed",
      "date" : "work in progress",
      "type" : "Personal Project",
      "role": ["Full-Stack Developer", "UI/UX Design"],
      "description_short": `a resource-sharing app for chosen family networks.`,
      "description_long": `Shed is a resource-sharing app for chosen family
      networks that allows users to easefully list, search, and communicate
      around shared resources (think: tools, gear, services, food, etc.)`,
      "stack": ["React", "Node.js", "PostgreSQL", "AWS S3"],
      "img": "shedhome.png",
      "detail_images": [],
      "github": "https://github.com/karlystark/shed-frontend",
    },
    {
      "id": 2,
      "title": "WAMF?",
      "date" : "2024",
      "type" : "Personal Project",
      "role": ["Full-Stack Developer", "UI/UX Design"],
      "description_short": `a vacation-logging app that answers the eternal question - which friends are in town today?`,
      "description_long": `A full-stack application that I built for a friend, which allows users to add friends and store their vacation plans. On any given day, when a user visits the app, friend cards will display where that friend is located. Who's in town to hang out today?`,
      "stack": ["React", "Node.js", "MongoDB"],
      "img": "wamf.png",
      "detail_images": [],
      "github": "https://github.com/karlystark/find-friends-frontend",
      "demo": "wherearemyfriends.mp4"
    },
    {
      "id": 3,
      "title": "Pix.ly",
      "date": "2023",
      "type": "Personal Project",
      "role": ["Full-Stack Developer", "UI/UX Design"],
      "description_short": `an accessible photo gallery app with custom alt-text`,
      "description_long": `Pix.ly is a photo gallery app that allows users to
      upload photos to their pix.ly board, view metadata (including the camera
      used and location), contribute custom alt-text for their photos (and
      learn how to effectively write it!), and download photos. Future
      implementations will include search functionality, focusing on exif
      data search.`,
      "stack": ["React", "Python", "Flask", "PostgreSQL", "AWS S3"],
      "img": "pixly_home.png",
      "detail_images": [["pixly_form.png", `pix.ly's file upload form shows a
      custom alt-text field`],
      ["pixly_alt.png", `a modal gives instructions of how to write good
      alt-text with an example`]],
      "github": "https://github.com/karlystark/pixly-frontend",
      "demo": "pixly-demo-oct.mp4",
      "purpose": [`Pix.ly is a full-stack application built in a week from
      scratch, and presented an opportunity to learn project management,
      prioritizing key tasks under a tight deadline, and systems design.
      The initial MVP presented to our cohort at the end of the week was made
      in partnership with my pair programming partner, Kirra Hyde.`,
        `In these first few days of development, our goal was to build out the
      robust backend for the application, making sure that our images could be
      efficiently stored in AWS S3 and accessed, that we could extract the
      necessary exif data from our images, including location, camera make/model
      data, lens data, and aperture/shutter speed settings, and that this data
      could then be stored in our database. Once this was complete, I was able
      to build out a simple UI for the project in our final day of the sprint,
      creating a clear, reusable component hierarchy in React and using CSS
      grid layout for the gallery.`,
        `After our initial sprint, I had the opportunity to continue development
      on my own, during which time I worked more extensively on accessibility
      and performance. Given the lack of meaningful metadata to use as alt-text
      for each image, I decided to incorporate a user-empowering, intentional
      process of adding custom alt-text on image upload, allowing this to be
      stored in the database alongside the exif data and retrieved upon render.`,
        `My goal moving forward with this project is to incorporate search
      functionality based on the exif data extracted from each image. As a
      photography nerd, I would love to be able to search my photographs based
      on the lens focal length, aperture and shutter speed values, or camera
      make/model used. My other goal is to make the app fully responsive, as
      well as incorporate lazy loading and image compression to allow for more
      performant image loading in the gallery.`],
    },
    {
      "id": 4,
      "title": "Bar Chovy",
      "date" : "2024",
      "type" : "Personal Project",
      "role": ["Developer", "UI/UX Design"],
      "description_short": `a monthly supper club website with photo gallery and rsvp.`,
      "description_long": `Bar Chovy is a website for a monthly supper club that
      allows users to see the monthly menu, view and save photos from each event,
      and RSVP for future supper club dinners.`,
      "stack": ["Next.js", "TypeScript", "TailwindCSS", "AWS S3"],
      "img": "barchovyabout.png",
      "detail_images": [["barchovygallery.png", "a gallery page shows two images with date and a button to expand"]
      ,["barchovyrsvp.png", "a rsvp page shows inputs for name, friend's name, and menu item bringing with a button to rsvp"]],
      "github": "https://github.com/karlystark/bar-chovy",
      "purpose": [`I've been wanting to start a monthly supper club with my chosen
      family for a while, since so many of us are missing having regular opportunities
      to connect with community and share meals and have been busy with our work
      and lives. I also wanted to practice Next.js' new app router (which I absolutely love),
      so this was a perfect opportunity to experiment and make a useful, fun site for my community.`],
      "demo": "barchovy.mp4"
    },
    {
      "id": 5,
      "title": "Orbit",
      "date" : "2024",
      "type" : "Personal Project",
      "role": ["Developer", "UI/UX Design"],
      "description_short": `a simple game of timing and touch- set planets into
      orbit and make sure they align!`,
      "description_long": `Orbit is a simple and fun game of timing and touch,
      written in Vanilla Javascript on a Saturday. Players must set two planets
      into orbit such that they meet on the middle line simultaneously!`,
      "stack": ["Javascript", "HTML", "CSS"],
      "img": "orbit1.png",
      "detail_images": [["orbit2.png", `The game screen show planets aligned on
      the center line with a victory message`],["orbit3.png", `The game screen
      shows planets unaligned on the center line with a try again message`]],
      "github": "https://github.com/karlystark/orbit-game",
      "purpose": [``],
      "demo": "orbit-demo.mov"
    },
    {
      "id": 6,
      "title": "Rat King",
      "date" : "2024",
      "type" : "Personal Project",
      "role": ["Developer", "UI/UX Design"],
      "description_short": `a choose-your-own-adventure story game`,
      "description_long": `Rat King is a choose-your-own-adventure story game that is absurd and trash-packed and no matter how you slice it, you're going to wind up indebted to an eternal trash animal who loves taco bell. You'll live forever, though!`,
      "stack": ["Javascript", "HTML", "CSS"],
      "img": "ratking.png",
      "detail_images": [],
      "github": "rat-king.vercel.app",
      "demo": "ratkingdemo.mp4"
    },
    {
      "id": 6,
      "title": "Rithm SIS",
      "date": "2023",
      "type": "Internship",
      "role": ["Tags Feature", "Pair Programming System"],
      "description_short": `an internship building features in a production
      learning management system with 80,000+ lines of code.`,
      "description_long": `A month-long internship completed at Rithm School,
      working in a live codebase of 80,000+ lines of code, in an agile team
      workflow, and maintaining 100% test coverage.`,
      "stack": ["Python", "Django", "unittest"],
      "img": "sis_home.png",
      "detail_images": [["sis_tagsearch.png", `search results for
      object-oriented programming show numerous resources`],
      ["sis_pair1.png", `an update pair preferences form lists names and buttons
      to move each name up or down the list.`]],
      "github": "",
      "demo": "sis_tagsearch.mp4",
      "purpose": [`Our internship with Rithm School's student information
      system had us immersed in a large codebase written in a new language
      (Django), working on a scrum team to complete a series of tickets over the
      course of a month. After a couple days of self-directed Django tutorials
      and thoroughly reading docs, we were introduced to the codebase, spent a
      day researching a specific corner/element of its design, and presenting
      it to our cohort (I researched SIS' Django REST framework and API). We then
      analyzed groupings of tickets and played planning poker, before being
      assigned to our first tickets. We learned the process of ticket evaluation
      and time management, pattern matching for best practices within an
      existing codebase, writing successful pull requests, and git management
      workflows within teams. By the end of the month, each member of the team
      had completed three tickets of increasing complexity.`,
        `Tickets that I worked on included:`,
        `Adding a view that would allow a user to see all the cohorts/programs
      that they were enrolled in and navigate to those homepages. In this simple
      sprint, we learned about navigating models and data tables in Django, writing
      generic class-based views, and writing comprehensive tests for these views.`,
        `Adding editable tags to curriculum items (lectures, exercises, events,
      assessments, and resources) that were displayed on the item detail
      pages and were searchable using the app’s main search page. This was
      one of the more difficult tasks assigned during this sprint, and
      required much resilience and flexibility in working with Django and
      SIS's complex model relationships. We built this feature from scratch
      in order to have complete control over the UI and functionality, and we
      were incredibly proud to achieve full searchability by the end of the
      sprint.`,
        `Implementing a system whereby students could provide a ranking of their
      pair programming preferences and submit them, and then utilize a stable
      roommate algorithm to reliably assign and display pairs for each sprint
      to staff/admins. These preference lists could be changed at any time, and
      the algorithm would take into account if pairs had worked together on the
      last/most recent sprint, or had worked together frequently throughout
      the bootcamp.`],
    },
    {
      "id": 7,
      "title": "Warbler",
      "date": "2023",
      "type": "Personal Project",
      "role": ["Full-Stack Developer", "Auth and Security", "Testing"],
      "description_short": "a social media app with a focus on auth & security.",
      "description_long": `Warbler is a full-stack social media app clone that
      allows users to write posts, follow other users, like other user's posts,
      and edit their profile. It includes full authentication/authorization,
      including login/logout and password encryption, as well as full testing
      coverage.`,
      "stack": ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Jinja", "Bcrypt",
        "unittest"],
      "img": "warbler_home.png",
      "detail_images": [["warbler_profile.png", `a warbler profile page shows
      text posts, profile photos, and banner.`],
      ["warbler_feed.png", `a warbler feed that shows all posts that user
      follows.`]],
      "github": "https://github.com/karlystark/warbler",
      "demo": "warbler-demo.mp4",
      "purpose": [`Warbler was an opportunity to get into a barely-functioning
      codebase that had numerous bugs, incomplete testing coverage, and missing
      features, with the intent to orient ourselves within an existing
      application and build upon it. During this sprint, I had the opportunity
      to pair program with my cohort-mate Michael Frederickson.`,

        `We built the login/logout and authorization infrastructure on the backend
      using bCrypt for password hashing, middleware to protect the RESTful API
      routes, and Flask's sessions, g object, and local storage to track current
      users. We also protected user and database information from CSRF attacks
      through WTForm's form validation using CSRF tokens. Along with
      building out security features, we implemented authorization in the
      app's profile edit feature, which ensured that a user provided a valid
      password and was logged in in order to edit their profile information.`,

        `Our next task was to build a fully-functioning "likes" feature, which
      allowed a user to "like" and "unlike" another user's posts by clicking
      on a heart icon next to a post. These likes were then stored and presented
      on a linked page on a user's profile, which lists that user's liked posts.
      This required managing many-to-many database relationships with Python
      ORM SQLAlchemy.`,

        `Finally, we were tasked with ensuring that unit and integration testing
      for models and routes/view-functions maintained 100% converage using
      unittest.`],
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList projects={projectData} />
          {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
