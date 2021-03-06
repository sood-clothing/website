export default ({}) => {
  const base = "/static";

  const imageSrcs = [
    'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg',
    'IMG_6.jpg',
    'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg',
    'IMG_6.jpg',
    'IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg', 'IMG_5.jpg',
    'IMG_6.jpg',
  ];

  return (
      <div className="container root">
        <div className='overlay'/>
        {
          imageSrcs.map((name, i) => (
              <img src={`${base}/${name}`} alt={name} height={'250px'}
                   width={'250px'}/>
          ))
        }

        <style jsx>{`
            img {
              object-fit: cover;
              max-height: 100%;
              width: 100%;
              height: 100%;
            }

            .root {
              display: inline-block;
              position: relative;
            }
            
            .root img {
              display: block;
            }
            
            .root .overlay {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              background-color: rgba(0, 0, 0, 0.4);
              width: 100%;
              height: 100%;
            }
            
            .overlay {
              pointer-events:none
            }

            .container {
              height: 100%;
              display: grid;
              grid-template: repeat(3, 1fr) / repeat(6, 1fr);
              overflow: hidden;
            }
            
            @media only screen and (max-width: 600px) {
               // compatible with Safari
               .container {
                 display: flex;
                 flex-flow: row wrap;
               }
               
               img {
                width: 50%;
                height: 50%;
               }
            }
        `}</style>
      </div>
  )
};