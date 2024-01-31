"use client";
import React, { useState } from 'react';
import {Select, SelectItem, Textarea,Input, Spacer} from "@nextui-org/react";

export default function SystemsAdministration() {
  
    
  return (
    <>
      <main
        className="bg-white"
      >
      <div className="container mx-auto p-4 bg-gray-200 pt-8 mt-10 border border-gray-600 rounded">
        <h1 className='text-extrabold text-3xl text-center mb-8'>SYSTEMS ADMINISTRATOR CHECKLIST</h1>
      <form>
        <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox1"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox1" className="ml-2 text-gray-700">
            All reports successfully uploaded to portal
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
       
        <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox2"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox2" className="ml-2 text-gray-700">
            Account list to Truslink added to server .45
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
        
        <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
           Closed and inactive accounts closed in Postiion
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
       
      <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Run econet and netone USD airtime reports and add to airtime reports/Econet USD
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
        
    <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Run Ecocash ZWL and USD statement and upload to portal
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
        
    <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Check if all services are running on 167 session monitor
          </label>
        <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
    </div>
    <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Check if SMS are moving on 192.168.0.118
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
      
    <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Check if partial balance refresh is running
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
       
    <div className="container boarder-black rounded-lg shadow-lg p-6 h-48 items-center mb-4">
          <input
            type="checkbox"
            id="checkbox3"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label htmlFor="checkbox3" className="ml-2 text-gray-700">
          Delete Expired T24 User Profiles
          </label>
          <Input
      label="Comments"
      className="w-100 mb-8 mt-8 rounded"
    />
        </div>
       
      </form>
    </div>
      </main>
    </>
  );
}
