import Image from "next/image";
import PortfolioItem from "./PortfolioItem";
import "../styles/Portfolio.css";

export default function Portfolio(): JSX.Element {
  return (
    <section id="portfolio" className="section-portfolio">
      <div className="container">
        <div className="text-center">
          <h3>My Recent Works</h3>
          <Image
            src="assets/img/lines.svg"
            className="img-lines"
            alt="lines"
            width={60}
            height={6}
          />
        </div>

        <div className="row">
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-1.jpg"
              title="Dungeon Together"
              description="Dungeon Together is a real-time multiplayer dungeon-crawling game developed with a modern tech stack, leveraging TypeScript and Vue 3 for a robust and interactive web-based experience. This project showcases advanced web development techniques in game design, including seamless state management, responsive UI components, and multiplayer networking. Still in development."
              externalLink="https://cpuabuse.github.io/dungeon-together/#/"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-2.jpg"
              title="Cross-cat"
              description="A JavaScript package, behaving exactly as Linux cat command, supporting all the options such as line numbering. Written in TypeScript natively."
              externalLink="https://www.npmjs.com/package/cross-cat"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-3.jpg"
              title="Cross-echo"
              description="A JavaScript package, behaving exactly as Linux echo command, supporting all the options such as line numbering. Written in TypeScript natively."
              externalLink="https://github.com/cpuabuse/cross-echo"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-4.jpg"
              title="Roger's moving service"
              description="A website for a moving service company.Written in TypeScript natively, using react and nextjs as frameworks."
              externalLink="https://github.com/yanocv/RMSJP"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-5.jpg"
              title="User information management system"
              description="User Information Management System is a comprehensive solution designed to streamline and manage the administrative tasks associated with handling employee profiles, roles, and permissions within a company. Built with modern technologies, this system is tailored to support both small and large enterprises by ensuring data security, user accessibility, and efficient management of user information."
              externalLink="https://github.com/yanocv/user-management-system"
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <PortfolioItem
              imgSrc="assets/img/portfolio-6.jpg"
              title="Coming Soon"
              description="More projects are coming soon!"
              externalLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
