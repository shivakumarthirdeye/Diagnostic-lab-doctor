import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingMobile from '../../components/booking/BookingMobile';
import axios from 'axios';
import { API } from '../../config';
import { formatDate } from '../../utils/helper';

const Bookings = () => {


  const [patience, setpatience] = useState();
 

  const [searchQuery, setSearchQuery] = useState("");
  const [sortedData, setSortedData] = useState();
  const [date,SetDateFilter] = useState(false);
  const TOKEN = localStorage.getItem("access_token");


  const fetchsubCategory = async (e) => {
    try {
      const data = await axios.get(
        `${API}/get-web-patience`,
        {
          headers: { authtoken: `${TOKEN}` },
        }
      );
      const today = new Date();
      const filteredData = data?.data?.patients.filter((patient) => {
        const pickupTime = new Date(patient.pickupTime);
        // Compare the pickupTime date to today's date (ignoring time)
        return pickupTime.toDateString() == today.toDateString();
      });
      setpatience(filteredData);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredData = patience?.filter((item) =>
    item?.firstName?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  useEffect(() => {
    fetchsubCategory();
  }, []);
  return (
    <>
      <BookingMobile/>
      <div className='mainContainer hidden xs:block mt-12'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-lg font-medium text-black-500 '>
              Today’s Bookings
            </h1>
            <p className='text-[#B5B5C3] mt-2'>{patience?.length>0?<p>{patience?.length} patience booked</p>:<p>No bookings yet!</p>}</p>
          </div>
          <div>
            <Link
              to='/new-booking'
              className='bg-primary py-2.5 text-sm px-4 rounded-[10px] text-white font-semibold'
            >
              Book Sample Test
            </Link>
          </div>
        </div>
        {
          !patience?.length ? <>
          <div className='py-60 flex flex-col items-center justify-center'>
          <Link
            to='/new-booking'
            className='bg-primary py-2.5 text-sm px-4 rounded-[10px] text-white font-semibold'
          >
            Book Sample Test
          </Link>
          <div className='text-center mt-3'>
            <h1 className='text-lg  font-medium text-black-500 '>
              No Bookings Yet
            </h1>
            <p className='text-[#B5B5C3] mt-1'>Book for a sample test now!</p>
          </div>
        </div>
          </>:<>
          <div className="flex flex-wrap m-6">
          {filteredData?.map((sub, i) => {
            return (
              <div className="flex flex-wrap" key={i}>
                <div
                  className=" m-5 mt-[114px] rounded-[21px] h-[160px] w-[260px] shadow-2xl"
                  style={{
                    boxShadow:
                      "0px 12px 12px -12px rgba(0, 0, 0, 0.1), 12px 0px 12px -12px rgba(0, 0, 0, 0.1), -12px 0px 12px -12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col">
                    <p className="font-nunito-sans text-base leading-[22px] pt-6 pl-3">
                      {sub.firstName} {sub.lastName}
                    </p>
                    <div className="flex flex-col">
                      <p className="font-nunito-sans text-[12px] text-[#B5B5C3] leading-[14px] pt-2 pl-3">
                        {sub?.subcategories?.map((sub) => sub.name)}
                      </p>
                      <p className="font-nunito-sans text-[12px] text-[#B5B5C3] leading-[14px] pt-2 pl-3">
                        {formatDate(sub?.pickupTime)}
                      </p>
                    </div>
                  </div>
                  <hr className="border-[#B5B5C3] border-t-1 mt-[18px] pl-[10px]" />
                  <div className="flex w-full justify-between items-center">
                    <div className="ml-2 mt-3">
                      <p className="font-Roboto text-[16px] text-[#497BEA] leading-[22px]">
                        ₹ {sub?.amount}
                      </p>
                    </div>
                    <div className="mt-3 mr-5">
                      <Link
                        to={`/patient/${sub._id}`}
                        className="bg-primary w-[80px]  py-2.5 text-sm px-4 rounded-[22px] text-white font-semibold"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          </>
        }
      </div>
    </>
  );
};

export default Bookings;
