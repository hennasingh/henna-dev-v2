import hennaIntro from "../assets/imgs/henna-intro.jpg";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Henna Singh</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img
        src={hennaIntro}
        alt="henna singh smiling in a garden"
        className="intro__img"
      />
    </section>
  );
}
