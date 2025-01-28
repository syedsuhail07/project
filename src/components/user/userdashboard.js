import React from "react";
import "./userdashboard.css";

const HomePage = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand" >Hostel Hub</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/experiences">Experiences</a></li>
            <li className="nav-item"><a className="nav-link" href="/resources">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Rest of your sections */}
      <section className="hero-section text-center d-flex justify-content-center align-items-center" id="home">
        <div className="container">
          <h1 className="display-4">Hostel Hub</h1>
          <p className="lead">
            Convenient online platform for students to book rooms, request changes,
            generate outpasses, submit complaints, and more.
          </p>
          <button className="btn btn-primary">Explore</button>
        </div>
      </section>

      {/* Other sections... */}
      {/* Discover Section */}
       <section className="text-center py-5 discover-section">
         <div className="container">
           <h2 className="display-4 text-uppercase">Discover More</h2>
           <p className="mt-3">Welcome to Hostel Hub, where convenience meets comfort for student accommodations.</p>
           <button className="btn btn-outline-primary">Explore</button>
         </div>
       </section>

       {/* Features Section */}
     <section className="py-5 features-section" id="features">
     <div className="container">
     <h2 className="text-center mb-4">Key Offerings for Students</h2>
     <p className="text-center">
       Students can easily book rooms, request room changes, generate outpasses,
       raise complaints, and submit vacate room requests through our platform.
     </p>

     <section className="hero-section d-flex flex-column justify-content-center align-items-center">
       <h1 className="hero-title">book your room <br /> <span>Comfortable and Hassle-free stay</span></h1>
       <button className="btn btn-light hero-button">Book Now</button>
     </section>

     <div className="row text-center mt-4">
       <div className="col-md-6 col-lg-3 mb-4">
         <div className="card feature-card">
           <h5 className="card-title">Change Room Request</h5>
           <p className="card-text">
             Submit a request to change your room quickly and easily.
           </p>
         </div>
       </div>
       <div className="col-md-6 col-lg-3 mb-4">
         <div className="card feature-card">
           <h5 className="card-title">Generate Outpass</h5>
           <p className="card-text">
             Create outpasses efficiently to save time.
           </p>
         </div>
       </div>
       <div className="col-md-6 col-lg-3 mb-4">
         <div className="card feature-card">
           <h5 className="card-title">Complaints</h5>
           <p className="card-text">
             Submit and track complaints for faster resolution.
           </p>
         </div>
       </div>
       <div className="col-md-6 col-lg-3 mb-4">
         <div className="card feature-card">
           <h5 className="card-title">Vacate Room Request</h5>
           <p className="card-text">
             Request to vacate your room without hassle.
           </p>
         </div>
       </div>
     </div>
   </div>
 </section>


       {/* Testimonials Section */}
       <section className="py-5 testimonials-section bg-light">
         <div className="container text-center">
           <h2>Student Reviews</h2>
           <div className="row mt-4">
             <div className="col-md-4">
               <p>“The change room request feature saved me a lot of time.”</p>
               <p className="font-weight-bold">Ahmad sheik</p>
             </div>
             <div className="col-md-4">
               <p>“I appreciate how quickly I can generate outpasses.”</p>
               <p className="font-weight-bold">Manish Royal</p>
             </div>
             <div className="col-md-4">
               <p>“The complaints section helped address my concerns.”</p>
               <p className="font-weight-bold">BrownHood</p>
             </div>
           </div>
         </div>
       </section>

       {/* Contact Section */}
       <section className="py-5 contact-section" id="contact">
         <div className="container text-center">
           <h2>Contact Us Today</h2>
           <div className="row mt-4">
             <div className="col-md-6">
               <p>Address: IN</p>
               <p>Email: <a href="mailto:contact@hostelhub.com">contact@hostelhub.com</a></p>
               <p>Phone: +91 12345 67890</p>
             </div>
             <div className="col-md-6">
               <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "10px" }}>
                 Image Placeholder
               </div>
             </div>
           </div>
         </div>
       </section>
      
    </div>
  );
};

export default HomePage;










// import React from "react";
// import { Link } from "react-router-dom"; // Use Link for navigation
// // import Navbar from '../components/shared/navbar';
// import ".//userdashboard.css";
// const HomePage = () => {
//   return (
//     <div>
//       <div>
//       <nav>
//         <ul>
//           <li>
//           <Link to="">Hostel Hub</Link>
//           <br></br>
//           <Link to="/home">Home</Link>
//           <br></br>
//           <Link to="/about">About</Link>
//           <br></br>
//           <Link to="/resources">Resources</Link>
//           <br></br>
//           <Link to="/experiences">Experiences</Link> {/* Add this link */}
//           <br></br>
//           <Link to="/contact">Contact Us</Link>
//           </li>
//           {/* Other navigation items */}
//         </ul>
//       </nav>
//     </div>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
//         <a className="navbar-brand" href="#">Hostel Hub</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
//             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//             <li className="nav-item"><a className="nav-link" href="#features">Experiences</a></li>
//             <li className="nav-item"><a className="nav-link" href="#resources">Resources</a></li>
//             <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section text-center d-flex justify-content-center align-items-center" id="home">
//         <div className="container">
//           <h1 className="display-4">Hostel Hub</h1>
//           <p className="lead">
//             Convenient online platform for students to book rooms, request changes,
//             generate outpasses, submit complaints, and more.
//           </p>
//           <button className="btn btn-primary">Explore</button>
//         </div>
//       </section>

//       {/* Discover Section */}
//       <section className="text-center py-5 discover-section">
//         <div className="container">
//           <h2 className="display-4 text-uppercase">Discover More</h2>
//           <p className="mt-3">Welcome to Hostel Hub, where convenience meets comfort for student accommodations.</p>
//           <button className="btn btn-outline-primary">Explore</button>
//         </div>
//       </section>

//       {/* Features Section */}
//     <section className="py-5 features-section" id="features">
//     <div className="container">
//     <h2 className="text-center mb-4">Key Offerings for Students</h2>
//     <p className="text-center">
//       Students can easily book rooms, request room changes, generate outpasses,
//       raise complaints, and submit vacate room requests through our platform.
//     </p>

//     <section className="hero-section d-flex flex-column justify-content-center align-items-center">
//       <h1 className="hero-title">book your room <br /> <span>Comfortable and Hassle-free stay</span></h1>
//       <button className="btn btn-light hero-button">Book Now</button>
//     </section>

//     <div className="row text-center mt-4">
//       <div className="col-md-6 col-lg-3 mb-4">
//         <div className="card feature-card">
//           <h5 className="card-title">Change Room Request</h5>
//           <p className="card-text">
//             Submit a request to change your room quickly and easily.
//           </p>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-3 mb-4">
//         <div className="card feature-card">
//           <h5 className="card-title">Generate Outpass</h5>
//           <p className="card-text">
//             Create outpasses efficiently to save time.
//           </p>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-3 mb-4">
//         <div className="card feature-card">
//           <h5 className="card-title">Complaints</h5>
//           <p className="card-text">
//             Submit and track complaints for faster resolution.
//           </p>
//         </div>
//       </div>
//       <div className="col-md-6 col-lg-3 mb-4">
//         <div className="card feature-card">
//           <h5 className="card-title">Vacate Room Request</h5>
//           <p className="card-text">
//             Request to vacate your room without hassle.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* Testimonials Section */}
//       <section className="py-5 testimonials-section bg-light">
//         <div className="container text-center">
//           <h2>Student Reviews</h2>
//           <div className="row mt-4">
//             <div className="col-md-4">
//               <p>“The change room request feature saved me a lot of time.”</p>
//               <p className="font-weight-bold">Ahmad sheik</p>
//             </div>
//             <div className="col-md-4">
//               <p>“I appreciate how quickly I can generate outpasses.”</p>
//               <p className="font-weight-bold">Manish Royal</p>
//             </div>
//             <div className="col-md-4">
//               <p>“The complaints section helped address my concerns.”</p>
//               <p className="font-weight-bold">BrownHood</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-5 contact-section" id="contact">
//         <div className="container text-center">
//           <h2>Contact Us Today</h2>
//           <div className="row mt-4">
//             <div className="col-md-6">
//               <p>Address: IN</p>
//               <p>Email: <a href="mailto:contact@hostelhub.com">contact@hostelhub.com</a></p>
//               <p>Phone: +91 12345 67890</p>
//             </div>
//             <div className="col-md-6">
//               <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: "200px", borderRadius: "10px" }}>
//                 Image Placeholder
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;