import React from 'react'
import PlaceCard from './PlaceCard'

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
        }
    ]

  return (
    <div className='px-7 pt-3'>
        <div>
            <h4 className='text-xl'>Some popular places</h4>
            <div className='h-[1.5px] w-full bg-gray-300'></div>
        </div>
        <div className='pt-5 flex flex-wrap gap-8 justify-center xl:justify-normal'>
            {
                data.map((item) => (
                    <PlaceCard url={item.url} place={item.place} desc={item.description} />
                ))
            }
        </div>
    </div>
  )
}

export default PopularPlaces