import React from 'react'
import Info from './components/Info';
import DetailInfo from './components/DetailInfo';
import { FaSearch } from 'react-icons/fa';

const DetailPage = () => {

  const sampleData = {
    General: {
      Year: "2020",
      Manufacturer: "VOLVO",
      Model: "VNL64T860",
      Mileage: "692,297 mi",
      VIN: "4V4NC9EH0LN248969",
      Hours: "17,061.1",
      Condition: "Used",
    },
    "Vehicle Info": {
      Payload: "11,500 KG",
      GWR: "11,500 KG",
      Wheelbase: "3,700 mm",
      Steering: "3,700 mm",
      Color: "Blue",
      Suspension: "Pneumatic suspension",
      "Gross Vehicle Weight": "Heavy Weight",
    },
    Powertrain: {
      "Transmission Type": "I Shift",
      "No of Speeds": "12 spd",
    },
    Chassis: {
      "Number of Rear Axles": "Tandem",
      "Front Axle Weight": "1000 lbs",
      "Rear Axle Weight": "1000 lbs",
    },
  };


  return (
    <div className='pb-10'>
      <div className='md:flex justify-between items-center mt-9'>
        <div className="flex w-[587px] flex-wrap md:flex-nowrap rounded-[10px] items-center shadow">
          <input type="text" placeholder="Truck Make or Model" className="p-3 outline-none h-[60px]  min-w-[250px] md:w-auto  rounded-l-[10px]" />
          <select className="p-3 w-full border-r h-[60px] outline-none border-l ">
            <option>All Cities</option>
          </select>
          <select className="p-3 w-full outline-none h-[60px]  ">
            <option>Price Range</option>
          </select>
          <button className="bg-[#DF0805] text-white p-5 rounded-r-[10px] flex items-center justify-center">
            <FaSearch fontSize={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative lg:w-[587px]">
          <input type="text" placeholder="Search for Trucks" className="p-3 outline-none h-[60px] lg:w-[587px] shadow rounded-[10px]" />
          <span className='absolute top-5 right-5'>
            <FaSearch fontSize={20} color='#8E8E8E' />
          </span>
        </div>
      </div>

      <div className='grid md:grid-cols-2 mt-20'>
        <div>
          <DetailInfo data={sampleData}/>
        </div>

        <div>
          <Info/>
        </div>
      </div>
    </div>
  )
}

export default DetailPage