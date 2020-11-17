import React from "react";

const AboutWhereSection = () => {
  return (
    <div>
      <div id="s2-top-container">
        <h3 className="s2-pre-header">[ Our Campus ]</h3>
        <h1 className="s2-header">LOS ANGELES, CA</h1>
        <p className="s2-subheader">
          We spread roots in the tremendous urban channels of great metropolitan
          Los Angeles, CA. Our corporate headquarters sits central in Downtown
          and faces our other offices in the northward mountains and the sea out
          west.
        </p>
        <div>
          <img
            className="s2-main-office-image"
            src="/about-images/headquarters-image.jpg"
          />
          <h5 className="hq-image-banner">
            Our modern and industrial workspace. [Photo credit to Henry
            Griffith, in-house photographer]
          </h5>
        </div>
        <div className="s2-info-text-container">
          <div className="s2-info-half s2-info-half1">
            <h3>Stirring it Up</h3>
            <p>
              It was a conscious decision to be apart of the busy din of the Los
              Angeles metropolitan area. A fast-paced environment and
              surroundings compels us to leave it all on the table. Employees
              are encouraged to work at any of our offices and to work remotely
              from anywhere anytime. A huge aspect of our branding and our
              mission statement is that we are just like you. All of us are
              regulars when it comes to the outdoors. We can't help it. That is
              why we love like-minded and dedicated people who can appreciate
              our products on a real level.
            </p>
          </div>
          <div className="s2-info-half s2-info-half2">
            <h3>To Be or Not to Be Inside</h3>
            <p>
              It is important to us to get some outside time even during the
              work day. Not only can our workers work from the comfort of a
              campground or a cabin if they so choose, but also our campus is an
              urban and natural hybrid. We have indoor gardens, atria, climbing
              gyms, indoor surf machines and many more amenities to provide a
              sense of cohesion within our fun-loving, outdoorsy community.
            </p>
          </div>
        </div>
        <div className="s2-other-offices-wrapper">
          <h2>OUR OTHER LOCATIONS...</h2>
          <div className="s2-other-offices-container">
            <div className="s2-office-info-container">
              <h4>[ Santa Monica Office ]</h4>
              <h1>SANTA MONICA, CA</h1>
              <img
                className="s2-office-info-image"
                src="/about-images/Santa-Monica-office.jpg"
              />
              <p>
                It is a lovely time feeling the fresh ocean breeze throughout
                the day. Coastal living, bike culture, and a rejuvenating ocean
                dip keep us up and thriving, but...
              </p>
            </div>
            <div className="s2-office-info-container">
              <h4>[ Yosemite Office ]</h4>
              <h1>YOSEMITE, CA</h1>
              <img
                className="s2-office-info-image"
                src="/about-images/Yosemite-office.jpg"
              />
              <p>...there is nothing better than the mountains! Period.</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhereSection;
