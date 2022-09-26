import React from "react";

import CardDetails from "./CardDetails";
import CreditDetails from "./CreditDetails";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import { MdModeEditOutline } from "react-icons/md";
import Invoices from "./Invoices";

const Billing = ({ user }) => {
  return (
    <div className="flex">
      <div className="w-8/12 pr-2 flex flex-col justify-between">
        <div className="cards flex w-full">
          <CardDetails card={user.card[0]} />
          <CreditDetails card={user.card[0]} />
        </div>
        <div className="w-full p-2 rounded-xl bg-gradient-to-r from-primary to-secondary">
          <div className="flex mb-2 items-center justify-between">
            <p className="font-bold">Payment Method</p>
            <a href="#">
              <p className="py-2 px-4 bg-primBlue font-semibold text-xs rounded-xl uppercase">
                add new card
              </p>
            </a>
          </div>
          <div className="flex">
            <div className="px-2 py-1 w-1/2">
              <div className="flex pr-2 justify-between items-center items-center rounded-2xl border-solid border-2 border-white border-opacity-20">
                <div className="p-2">
                  <img src={Mastercard} className="inline mr-2" />
                  {user.card[0].number}
                </div>

                <div className="pr-2">
                  <MdModeEditOutline />
                </div>
              </div>
            </div>
            <div className="px-2 py-1 w-1/2">
              <div className="flex pl-2 justify-between items-center items-center rounded-2xl border-solid border-2 border-white border-opacity-20">
                <div className="p-2">
                  <img src={Visa} className="inline mr-2" />
                  {user.card[0].number}
                </div>

                <div className="pr-2">
                  <MdModeEditOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 pl-2">
        <Invoices invoices={user.orders} />
      </div>
    </div>
  );
};

export default Billing;
