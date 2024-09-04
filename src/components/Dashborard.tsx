import { BiUser } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 bg-white p-3 rounded-md ">
        <div className="border-s-4 border-orange-500 bg-white w-44 flex flex-col justify-center items-center gap-3 shadow-md p-3">
          <FaUserAlt size={30} className="text-orange-500 " />
          <p className="text-xl text-gray-500">
            8 <span className="">Total Users</span>{" "}
          </p>
        </div>
        <div className="border-s-4 border-orange-500 bg-white w-44 flex flex-col justify-center items-center gap-3 shadow-md p-3">
          <FaUserAlt size={30} className="text-orange-500 " />
          <p className="text-xl text-gray-500">
            8 <span className="">Total Users</span>{" "}
          </p>
        </div>
        <div className="border-s-4 border-orange-500 bg-white w-44 flex flex-col justify-center items-center gap-3 shadow-md p-3">
          <FaUserAlt size={30} className="text-orange-500 " />
          <p className="text-xl text-gray-500">
            8 <span className="">Total Users</span>{" "}
          </p>
        </div>
        <div className="border-s-4 border-orange-500 bg-white w-44 flex flex-col justify-center items-center gap-3 shadow-md p-3">
          <FaUserAlt size={30} className="text-orange-500 " />
          <p className="text-xl text-gray-500">
            8 <span className="">Total Users</span>{" "}
          </p>
        </div>
        <div className="border-s-4 border-orange-500 bg-white w-44 flex flex-col justify-center items-center gap-3 shadow-md p-3">
          <FaUserAlt size={30} className="text-orange-500 " />
          <p className="text-xl text-gray-500">
            8 <span className="">Total Users</span>{" "}
          </p>
        </div>
      </div>
      <div className=" mt-3 ">
        {/* <h3 className="text-2xl pb-2 border-b-[1px] font-semibold text-gray-600">
          Upcoming Patient Visits
        </h3> */}
        <div className="flex gap-3">
          {" "}
          <div className="w-2/3 bg-white p-3 rounded-md">
            <h3 className="text-2xl pb-2 border-b-[1px] font-semibold text-gray-600">
              Upcoming Patient Visits
            </h3>
            <table className="table-auto mt-2  w-[100%]">
              {/* <caption className="caption-top">
                {" "}
                Upcoming Patient Visits
              </caption> */}
              <thead className="mb-2">
                <tr className="p-1 border-b-[1px] border-slate-300">
                  <th>Patient Name</th>
                  <th>Doctor</th>
                  <th>Visit Date</th>
                  <th>Visit Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2">
                  <td className="p-1">John Doe</td>
                  <td className="p-1">Dr. Smith</td>
                  <td className="p-1">12/02/2022</td>
                  <td className="p-1">12:00 PM</td>
                  <td className="p-1">
                    <span className="bg-green-500 px-2 py-[2px] text-center rounded-full text-white  font-semibold">
                      {" "}
                      Scheduled
                    </span>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="p-1">John Doe</td>
                  <td className="p-1">Dr. Smith</td>
                  <td className="p-1">12/02/2022</td>
                  <td className="p-1">12:00 PM</td>
                  <td className="p-1">
                    <span className="bg-green-500 px-2 py-[2px] text-center rounded-full text-white  font-semibold">
                      {" "}
                      Scheduled
                    </span>
                  </td>
                </tr>{" "}
              </tbody>
            </table>
          </div>
          <div className="bg-white  rounded-md">
            <h3 className="text-2xl  p-3 border-b-[1px] font-semibold text-gray-600">
              Upcoming Patient Visits
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
