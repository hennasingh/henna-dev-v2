export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Development</h3>
          <p>
            I am a continuous learner that enjoys building applications in React
            JS, Typescript, HTML, CSS, Django, postgres,and Heroku.
          </p>
        </div>
        <div className="service">
          <h3>Technical Writer & Advocate</h3>
          <p>
            I am passionate about writing what I learn and I love sharing my
            knowledge via talks at community conferences. I have spoken at
            Google Developer Group (GDG) community events, London Java
            Community, Devoxx UK and women in tech conferences.
          </p>
        </div>
        <div className="service">
          <h3>Community Builder</h3>
          <p>
            I enjoy fostering meaningful relationships with programming
            communities.I have led developer engagement programs, launched
            community-driven initiatives, and worked with teams to enhance
            developer experience.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
