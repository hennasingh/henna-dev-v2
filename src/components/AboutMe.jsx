import aboutMe from "../assets/imgs/mdb.jpg";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer, Technical Writer, Community Builder and continuous learner
        based in Dublin, Ireland
      </p>

      <div className="about-me__body">
        <p>
          With a background in customer engineering, technical writing,
          developer advocacy and technical program management, I thrive at the
          intersection of technology, relationship building, and
          problem-solving. Currently pursuing a Diploma in Full Stack
          Development at Code Institute, I’m expanding my expertise in
          JavaScript, React, Django, and database management to transition into
          engineering and product roles.
        </p>
        <p>
          Previously, I led developer engagement programs at MongoDB, launched
          community-driven initiatives, and worked closely with engineering
          teams to enhance developer experience. My ability to translate complex
          technical concepts into actionable insights, combined with my
          leadership in program management, equips me to drive innovation in
          software engineering and product development.
        </p>
      </div>

      <img
        src={aboutMe}
        alt="Henna at a conference"
        className="about-me__img"
      />
    </section>
  );
}
