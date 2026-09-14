import "./HowToMake.css";

const videos = [
  {
    id: 1,
    title: "How to Make Zobo",
    description:
      "Learn how we prepare our refreshing Zobo drink with natural ingredients.",
    video: "/videos/zobo.mp4",
  },
  {
    id: 2,
    title: "How to Make Fura",
    description:
      "A step-by-step look at preparing our traditional Fura drink.",
    video: "/videos/fura.mp4",
  },
  {
    id: 3,
    title: "How to Make Kunu Zaki",
    description:
      "See how our smooth and refreshing Kunu Zaki is prepared.",
    video: "/videos/kunu-zaki.mp4",
  },
  {
    id: 4,
    title: "How to Make Ginger Drink",
    description:
      "Learn how fresh ginger is turned into a delicious natural drink.",
    video: "/videos/ginger-drink.mp4",
  },
];

function HowToMake() {
  return (
    <section className="how-to-section" id="how-to">
      <div className="how-to-heading">
        <p className="section-label">LEARN WITH BAMALICIOUS</p>

        <h2>
          How We <span>Make It</span>
        </h2>

        <p>
          Watch our step-by-step videos and discover how
          our favourite Nigerian drinks are prepared.
        </p>
      </div>

      <div className="video-grid">
        {videos.map((item) => (
          <article className="video-card" key={item.id}>
            <div className="video-wrapper">
              <video
                controls
                preload="metadata"
                src={item.video}
              >
                Your browser does not support video playback.
              </video>

              <div className="video-icon">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>

            <div className="video-info">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button className="watch-btn">
                <i className="fa-solid fa-circle-play"></i>
                Watch Video
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowToMake;