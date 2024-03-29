import React from 'react'
import PlaceCard from './PlaceCard'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Scrollbar, Pagination, Navigation } from 'swiper/modules';

const PopularPlaces = () => {

    let data = [
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg',
            'place' : 'Machu Picchu, Peru',
            'description' : 'This incredible sight, one of the seven natural wonders of the world, is in the U.S. state of Arizona. Huge multi-ton blocks of stone are perfectly joined. ',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-rome-italy.jpg',
            'place' : 'Rome, Italy',
            'description' : 'The Eternal City is more like a giant, living museum. Visitors are immersed in and surrounded by thousands of years of history. A three-day itinerary.',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-maui-hawaii.jpg',
            'place' : 'Maui, Hawaii',
            'description' : 'This Hawaiian island offers a wide range of experiences for visitors. You can surf, enjoy a meal on the beach at a five-star luxury resort in Wailea.',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-new-zealand.jpg',
            'place' : 'New Zealand',
            'description' : 'With its striking natural beauty, friendly citizens, and recent popularity due to its use as the filming location for the Lord of the Rings films.',
        },
        ,
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-istanbul-turkey.jpg',
            'place' : 'Istanbul, Turkey',
            'description' : 'Turkey capital city is another destination that offers a great mix of culture, food, and history. There are thousands of years of history here.',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-san-francisco.jpg',
            'place' : 'Bali',
            'description' : 'The tropical Indonesian island of Bali is a lush, tropical destination that should not be missed. A bit of everything can be found here, from towering volcanoes.',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-london-england.jpg',
            'place' : 'London, England',
            'description' : 'This historic English city is another destination just filled with incredible places to visit. A trip to London is an opportunity to visit iconic places.',
        },
        {
            'url' : 'https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-manhattan-new-york.jpg',
            'place' : 'Manhattan, New York',
            'description' : 'One of the five boroughs of New York City, Manhattan is actually an island, bordered by the East River and the Hudson (and a little bit by the Harlem River).',
        }
    ]

  return (
    <div className='px-7 pt-3'>
        <div>
            <h4 className='text-xl'>Some popular places</h4>
            <div className='h-[1.5px] w-full bg-gray-300'></div>
        </div>
        {/* <div className='pt-5 flex flex-wrap gap-8 justify-center xl:justify-normal'>
            {
                data.map((item) => (
                    <PlaceCard url={item.url} place={item.place} desc={item.description} />
                ))
            }
        </div> */}

<Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper mt-8"
      >
        
        {
            data.map((item) => (
                <SwiperSlide className='flex justify-center'>
                    <PlaceCard url={item.url} place={item.place} desc={item.description} />
                </SwiperSlide>
                
            ))
        }
      </Swiper>

    </div>
  )
}

export default PopularPlaces