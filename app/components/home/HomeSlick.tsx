"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const popularGames = [/* ... */];
  const newReleases = [/* ... */];
  const recommended = [/* ... */];

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/images/principal.jpg" width="100" height="100" alt="Comunidade Gammer" />
        </div>
        <div>
          <img src="/images/compartilhar_experiências.jpg"  width="100" height="100"alt="Compartilhe experiências" />
        </div>
        <div>
          <img src="/images/recompensa.jpg"  width="100" height="100"alt="Sistema de recompensas" />
        </div>
        {/* Mais slides aqui */}
      </Slider>

      {/* Seções em Destaque */}
    </div>
    
  );
};

export default HomeSlick;
