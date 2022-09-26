import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Tables = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);
  return (
    <div className="mb-10 p-4 px-6 flex flex-col justify-between rounded-xl bg-gradient-to-r from-primary to-secondary">
      <p className="font-semibold text-lg">Projects</p>
      <p className="font-regular text-sm mb-2">
        <AiFillCheckCircle className="inline text-green-600 mr-1" />
        <span className="opacity-90">30 done</span>{" "}
        <span className="opacity-70"> this month</span>
      </p>
      <div className="p-2 table rounded-xl mt-8">
        <div className="table-header-group">
          <div className="table-cell uppercase text-sm opacity-70 p-4 ">
            companies
          </div>
          <div className="table-cell uppercase text-sm opacity-70 text-center p-4">
            members
          </div>
          <div className="table-cell uppercase text-center text-sm opacity-70 p-4">
            budget
          </div>
          <div className="table-cell uppercase text-center text-sm opacity-70 p-4 ">
            completion
          </div>
        </div>
        <div className="table-row-group">
          {companies.map((company) => {
            return (
              <div className="table-row">
                <div className="table-cell w-4/12 font-semibold text-lg p-4 border-t border-white border-opacity-20">
                  <img
                    src={`/images/${company.clogo}`}
                    className="inline mr-2"
                  />
                  {company.company}
                </div>
                <div className="table-cell w-2/12 text-center m-auto border-t border-white border-opacity-20">
                  <div className="members pl-2 flex justify-center text-center m-auto">
                    {company.members.map((member) => {
                      return (
                        <div className="-ml-3 rounded-full w-6 overflow-hidden">
                          <img
                            className="rounded-full"
                            src={`/images/users/${member.profile}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="table-cell w-2/12 font-semibold text-lg text-center border-t border-white border-opacity-20">
                  {company.budget}
                </div>
                <div className="table-cell w-4/12 border-t border-white border-opacity-20">
                  <p className="w-3/4 m-auto font-semibold text-lg">
                    {company.completion}%
                  </p>
                  <div className="w-3/4 m-auto relative bg-transparent border-t-2 border-white border-opacity-20 rounded-full h-1 mb-4">
                    <div
                      className="absolute -top-1 bg-primBlue h-2 rounded-full"
                      style={{ width: `${company.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tables;
