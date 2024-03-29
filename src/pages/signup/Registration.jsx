import React, { useState } from "react";
import Pagetitle from "../../components/utils/Pagetitle";
import Breadcrumbs from "../../components/utils/Breadcrumbs";
import Inputtitle from "../../components/utils/Inputtitle";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Formtitle from "../../components/utils/Formtitle";

export default function Registration() {
  const [show, setShow] = useState(false)

  const handleShowPass = () => {
    setShow(!show)
  }
  return (
    <div className=" max-w-container mx-auto">
      {/* <Pagetitle></Pagetitle> */}
      <Breadcrumbs></Breadcrumbs>


      <div class=" mx-auto font-[sans-serif] text-[#333] p-6">
      <div class="text-center mb-16">
        
        <h4 class="text-base font-semibold mt-3">Sign up into your account</h4>
      </div>
      <form>
        <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label class="text-sm mb-2 block">First Name</label>
            <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter name" />
          </div>
          <div>
            <label class="text-sm mb-2 block">Last Name</label>
            <input name="lname" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter last name" />
          </div>
          <div>
            <label class="text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-sm mb-2 block">Password</label>
            <input name="password" type="password" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-sm mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter confirm password" />
          </div>
        </div>
        <div class="!mt-10">
          <button type="button" class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Sign up
          </button>
        </div>
      </form>
    </div>
      </div>
  );
}
