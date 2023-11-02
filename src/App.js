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
      "title": "Pix.ly",
      "date": "2023",
      "type": "Personal Project",
      "role": ["Full-Stack Developer", "UI/UX Design"],
      "description_short": `a photo gallery app that teaches you how to
      write alt-text`,
      "description_long": `Pix.ly is a photo gallery app that allows users to
      upload photos to their pix.ly board, view metadata (including the camera
      used and location), contribute custom alt-text for their photos (and
      learn how to effectively write it!), and download photos. Future
      implementations will include search functionality, focusing on exif
      data search.`,
      "stack": ["React", "Python", "Flask", "PostgreSQL", "AWS S3"],
      "stack_explanation": [`Creating a full-stack application from the ground
      up required us to mindfully choose which frameworks we were going to
      use on the front and backends.`,
        `We chose to build our backend using Python's Flask framework due to its
      quick startup time and breadth of library support for exif data
      extraction, PostgreSQL for our database, and AWS S3 to store our image
      files (with boto3 used to send the images we received from our frontend
      upload form to S3). To extract and process exif data, we used a
      combination of libraries - Exif, Pillow, and geoPy's geolocator
      library. Exif and geoPy worked together to translate
      longitudinal/latitudinal values from the image exif (if available)
      and locate the city and country where the image was taken. Pillow was
      used to extract all other exif data points.`,
        `On the frontend, we built a single-page application using React and React
      router. CSS and Bootstrap worked together to create the styling for the
      UI. Inspired by my favorite image site, Unsplash, I created a three
      column layout for our images and full-screen image detail modals
      on-click. On the image upload form, I created a field for users to
      include custom alt-text for their images, and a pop up modal that users
      could click to learn more about how to write effective alt-text.`],
      "img": "pixly_home.png",
      "detail_images": [["pixly_form.png", `pix.ly's file upload form shows a
      custom alt-text field`],
      ["pixly_alt.png", `a modal gives instructions of how to write good
      alt-text with an example`]],
      "github": "https://github.com/karlystark/pixly-frontend",
      "demo": "pixly-demo-oct.mp4",
      "bug_stories": [`Setting up and connecting AWS was a huge learning curve,
      and took us the better part of our first day to work through, but once
      we got that out of the way, the rest of our project was a series of
      incredibly fun problems we got to solve.`,
        `One of our best was in pulling and formatting location data from our
      images — for this, we used a combination of the exif library (to pull
      the longitude and latitude data from the image) and geoPy’s geolocator
      library to translate latitude/longitudes (in decimal degrees) into city
      and country strings. Translating our data between tuple and decimal
      degree form was a great puzzle, and in the end we were able to add a
      really nicely formatted string into our metadata database for any photo
      that contained GPS values.`,
        `On the front-end, we discovered the complications with using
      React/Flask as your stack of choice, namely in how CORS and passing
      data between the two works. We were getting many errors for our basic
      GET API requests, when we had already imported and initialized
      flask_cors, until we figured out that we needed to add an
      Access-Control-Allow-Origin header with the value of "*" to all GET API
      call responses on the backend.`],
      "purpose": [`Pix.ly is a full-stack application built in a week from
      scratch, and presented an opportunity to learn project management,
      prioritizing key tasks under a tight deadline, and systems design.
      The initial MVP presented to our cohort at the end of the week was made
      in partnership with my pair programming partner, Kirra Hyde.`,
        `In these first few days of development, our goal was to build out the
      robust backend for the application, making sure that our images could be
      efficiently stored in AWS S3 and accessed, we could extract the necessary
      exif data from our images, including location, camera make/model data,
      lens data, and aperture/shutter speed settings, and this data could be
      stored in our database. Once this was complete, I was able to build out
      a simple UI for the project in our final day of the sprint, creating a
      component hierarchy in React and using CSS grid layout for the gallery.`,
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
      "lessons": [`Getting my hands on image data and working on a media-heavy
      product allowed me to really lean on my previous career experience as a
      filmmaker/photographer and media library worker. Much of the problem
      solving around handling and accessing exif data was ameliorated by the
      fact that I had a strong background in creating and handling images, and
      also brought new considerations to my attention:`,
        `The accessibility issues in an app of this type, most acutely a lack of
      meaningful alt-text, allowed me to plumb my media accessibility workshops
      and lesson plans to decide a concise, quick, and built-in way to empower
      users to write and think mindfully about their images' alt-text.`,
        `Working with a large gallery of photos meant performance and loading
      issues, until I realized that the images needed to be compressed upon
      storage in AWS S3, and lazy loading could be utilized to decrease load
      times on scroll. When dealing with a media-heavy application, these
      issues became much more apparent to me than they have in previous
      projects, and I was so glad to have the opportunity to explore solutions
      for such projects.`],
    },
    {
      "id": 2,
      "title": "Rithm School - Student Information System (SIS)",
      "date": "2023",
      "type": "Internship",
      "role": ["Tags Feature", "Pair Programming System"],
      "description_short": `an internship building features in a production
      learning management system with 80,000+ lines of code.`,
      "description_long": `A month-long internship completed at Rithm School,
      working in a live codebase of 80,000+ lines of code, in an agile team
      workflow, and maintaining 100% test coverage.`,
      "stack": ["Python", "Django", "unittest"],
      "stack_explanation": [`SIS was built using Django and Django REST
      Framework, with extensive administrative infrastructure and Django
      templates for the frontend. Tools that we used throughout our time in
      the SIS codebase were django watson for search and python matching
      library for stable roommate pairing. All tests were written using
      unittest.`],
      "img": "sis_home.png",
      "detail_images": [["sis_tagsearch.png", `search results for
      object-oriented programming show numerous resources`],
      ["sis_pair1.png", `an update pair preferences form lists names and buttons
      to move each name up or down the list.`]],
      "github": "",
      "demo": "sis_tagsearch.mp4",
      "bug_stories": [`Building a tagging feature from scratch in an abstracted
      system such as Django yielded so many interesting bugs and epiphanies.
      As we were experiencing the quirks of Django for the first time, and had
      our hands in many apps and parts of the codebase to implement this
      site-wide feature. As we discovered, building a tag-feature was going to
      require much flexibility and resilience.`,
        `Once we made the decision to strike out on our own without using a
      tagging library, we began building out our models and writing unit tests
      to maintain full coverage of our work. In this first iteration, we
      discovered how complicated Django’s models could become, researching
      different strategies for our TagItems table, which could connect any of
      five different resources with a tag (but never more than one at a time!).
      Generic foreign key seemed like a good choice at first, but then we
      discovered that querying would get very complicated using this method.
      After some feedback, we went with a table that used ManyToMany
      relationships to connect foreign key curriculum items to the table,
      along with some very fun unique constraints and clean methods to make
      sure that each curriculum item couldn’t have duplicate tags, and no
      tag instance could have multiple curriculum items attached (ex. “React”
      couldn’t show up twice on a given lecture, and a single row/tag
      instance in our table couldn’t have both a lecture and assessment
      attached to it).`,
        `When we began to implement a tags field in our admin forms for our
      curriculum items, so that admins could assign tags to their items and
      also add new tags to the Tags table at large, our model strategy was
      revealed to be tricky - while we could get our Tags table set up as a
      form field, and could add new tags to that table in our database, we
      found that Django was creating a separate table called tags_tag_lecture
      (for the Lectures) that functioned like our TagItems table and the
      Many-to-Many relationships within it. After pulling our senior team in
      to discuss, we realized that Django and SIS were not going to allow us
      to do this feature in the way we had planned it - instead, we pivoted our
      strategy to use Django's created join tables, leaving all the work we had
      previously done to properly clean and test our join table behind.`,
        `Implementing search logic for our tagged items was also quite complicated
      - this required an understanding of django-watson and how it partnered
      with Django's framework and SIS-specific syntax. Pattern matching became
      difficult, since full-text search was standardized across the SIS
      application, and finding the lines of code to add our tag search query
      took many hours of research, including reading the django-watson source
      code. When we finally cracked it, though, we were able to get search up
      and running quickly, and we felt absolutely elated!`],
      "purpose": [`Our internship with Rithm School's student information
      system had us immersed in a large codebase written in a  new language
      (Django), working on scrum team to complete a series of tickets over the
      course of a month. After a couple days of self-directed Django tutorials
      and thoroughly reading docs, we were introduced to the codebase, spent a
      day researching a specific corner/element of the database and presenting
      it to our cohort (I researched SIS' Django REST framework and API),
      analyzed groupings of tickets and played planning poker, and were then
      assigned to our first tickets. We learned the process of ticket evaluation
      and time management, pattern matching for best practices within an
      existing codebase, writing pull requests, and git management workflows.
      By the end of the month, each person had completed three tickets of
      increasing complexity.`,
        `Tickets that I worked on included:`,
        `Adding a view that would allow a user to see all the cohorts/programs
      that they were enrolled in and navigate to those homepages. In this simple
      sprint, we learned a lot about navigating models and data associations in
      Django, writing generic class-based views, and writing tests for these
      views.`,
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
      "lessons": [`Working on an engineering team allowed me to focus intently
      on clear documentation, thorough testing, pattern matching for best
      practices within the codebase, collaborating using git branches and
      writing detailed pull requests, and anticipating time management for
      each ticket. I learned how to tool quickly, learning a new language and
      doing deep research both in documentation and in a large codebase, and how
      to use the knowledge of others and collaborate to solve complex problems.`
      ],
    },
    {
      "id": 3,
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
      "stack_explanation": [`Warbler was built using Python/Flask on the
      backend, PostgreSQL and SQLAlchemy for database management, Jinja for
      HTML templating, and WTForms for all form validation. Flask provided
      quick and RESTful API routing, helpful auth tools such as g object and
      before_request middleware, and great support for our complex database
      structure. SQLAlchemy was an excellent ORM choice to handle and query the
      many-to-many relationships amongst our tables for such things as
      followers/followed.`],
      "img": "warbler_home.png",
      "detail_images": [["warbler_profile.png", `a warbler profile page shows
      text posts, profile photos, and banner.`],
      ["warbler_feed.png", `a warbler feed that shows all posts that user
      follows.`]],
      "github": "https://github.com/karlystark/warbler",
      "demo": "warbler-demo.mp4",
      "bug_stories": "",
      "purpose": [`Warbler was a three-day sprint opportunity to get into a
      somewhat-functioning codebase that had numerous bugs, incomplete testing
      coverage, and missing features, with the intent to orient ourselves
      within an existing application and build upon it. During this sprint, I
      had the opportunity to pair program with my cohort-mate Michael
      Frederickson.`,

        `We built the login/logout and authorization infrastructure on the backend
      using bCrypt for password hashing, middleware to protect the RESTful API
      routes, and Flask's sessions, g object, and local storage to track current
      users. We also protected user and database information from CSRF attacks
      through WTForm's form validation using CSRF tokens. Associated with
      building out of security features, we implemented authorization in the
      app's profile edit feature, which ensured that a user provided a valid
      password and was logged in in order to edit their profile information.`,

        `Our next task was to build a fully-functioning "likes" feature, which
      allowed a user to "like" and "unlike" another user's posts by clicking
      on a heart icon next to a post. These likes were then stored and presented
      on a linked page on a user's profile, which lists that user's liked posts.
      This required managing many-to-many database relationships with Python
      ORM SQLAlchemy.`,

        `Finally, we were tasked with ensuring that unit and integration testing
      for models and routes/view-functions was complete using unittest.`],
      "lessons": [`We learned the practical differences between storing things
      in the session and the g object, the helpfulness of before_request routes,
      linking CSRF protection across an app, the importance of good join table
       naming, SQLAlchemy’s relationship alchemy, raising authorization errors,
       and so many good testing practices. On an app of this scale, we got to
       organize and navigate models and forms and databases and routes and
       tests and stylesheets, and it was exhilarating.`],
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
