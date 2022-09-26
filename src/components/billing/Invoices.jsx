import React from "react";
import { IoDocumentText } from "react-icons/io5";

const Invoices = ({ invoices }) => {
  return (
    <div className="p-2 bg-darkBlue rounded-xl">
      <div className="flex mb-8 items-center justify-between">
        <p className="font-bold">Invoices</p>
        <a href="#">
          <p className="py-2 px-4 bg-primBlue font-semibold text-xs rounded-xl uppercase">
            view all
          </p>
        </a>
      </div>
      <div className="">
        {invoices.map((invoice) => {
          return (
            <div className="flex justify-between">
              <div className="">
                <p className="font-bold">{invoice.date}</p>
                <p className="font-regular text-sm opacity-70 mb-2">
                  {invoice.id}
                </p>
              </div>
              <div className="font-regular text-sm opacity-70 mb-2">
                ${invoice.total}
              </div>
              <div className="font-regular text-sm mb-2">
                <a href="#">
                  <IoDocumentText className="inline" />
                  PDF
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
