import CounterItem from "./CounterItem";

export default function CountersSection() {
  return (
    <section className="site-section section-counters text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <CounterItem count={10} text="Years Experience" />
          </div>
          <div className="col-sm-4 col-xs-12">
            <CounterItem count={120} text="Projects Delivered" />
          </div>
          <div className="col-sm-4 col-xs-12">
            <CounterItem
              count={1}
              text="Seconds on this site! What are you waiting for?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
