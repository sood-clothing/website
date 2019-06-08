function detectmob() {
  return window.innerWidth <= 800 && window.innerHeight <= 600;
}

export default ({}) => {
  const base = "/static";
  const imageSrcsNormal = ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg',
    'IMG_5.jpg', 'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg',
    'IMG_5.jpg', 'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg',
    'IMG_5.jpg', 'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg'];

  const imageSrcsMobile = ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg',
    'IMG_5.jpg', 'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg'];

  const imageSrcs = detectmob() ? imageSrcsMobile : imageSrcsNormal;

  return (
      <div className="container">
        {
          imageSrcs.map((name) => (
              <img src={`${base}/${name}`} alt={name} height="200px"
                   width="140px"/>
          ))
        }

        <style jsx>{`
            .container {
              height: 100%;
              display: grid;
              grid-template-rows: repeat(3, 1fr);
              grid-template-columns: repeat(6, 1fr);
            }
            
            @media only screen and (max-width: 600px) {
              .container {
                height: 100%;
                display: grid;
                grid-template-rows: repeat(3, 1fr);
                grid-template-columns: repeat(3, 1fr);
              }
            }
            
            img {
              object-fit: cover;
              max-height: 100%;
              width: 100%;
              height: 100%;
              -webkit-filter: grayscale(30%);
              filter: grayscale(30%);            
            }
        `}</style>
      </div>
  )
};