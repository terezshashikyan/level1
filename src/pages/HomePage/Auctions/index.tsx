import { AUCTIONS } from "./constants";
import "./style.scss";

const Auctions = () => {
  const auctionsRenderer = AUCTIONS.map((auction) => {
    return (
      <div className="auctions__row" key={auction.id}>
        <div className="auctions__row_item">
          <p className="auctions__time">{auction.time}</p>
          <span className="auctions__liveNowBanner">LIVE NOW</span>
        </div>
        <div className="auctions__row_item">
            <img src={auction.flag} alt="flag" />
            <span className="auctions__countryText">{auction.name}</span>
        </div>
        <div className="auctions__row_item">
            <p className = 'auctions_itemsnumberText'>{auction.items}</p>
        </div>
        <div className="auctions__row_item auctions__row_lastItem">
          <button className="auctions__joinButton">Join Auction</button>
          <a className="auctions__listLink">View Sale List</a>
        </div>
      </div>
    );
  });

  return (
    <section className="auctions container">
      <h3 className="auctions__mainTitle">Today's Auctions</h3>
      <div className="auctions__table">
        <div className="auctions__header">
          <p className="auctions__header_title">Sale Time </p>
          <p className="auctions__header_title">Sale Name</p>
          <p className="auctions__header_title">Items</p>
          <p className="auctions__header_title">Auctions</p>
        </div>
        {auctionsRenderer}
      </div>
    </section>
  );
};

export default Auctions;
