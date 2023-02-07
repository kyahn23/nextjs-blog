import Image from "next/image";
import classes from "./hero.module.css";

function Hero(params) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/test.png"
          alt="image"
          width={500}
          height={500}
        />
        Image
      </div>
      <h1>Hi I'm kyahn</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
