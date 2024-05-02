import React, { useState } from 'react'
import { useFirebase } from '../context/Firebasecontextprovider'

const NoteForm = () => {

    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [pic ,setPic] = useState("")
    const [description, setDescription] = useState("")

    const firebase  = useFirebase();

    const handlesubmit = async (e) =>{

        e.preventDefault();
        console.log("The save is clicked");
       await firebase.handlenoteformsubmit(title,email,number,pic,description);
    }
  return (
    <div class="bg-white  border-4 rounded-lg shadow relative m-10">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-xl font-semibold">Add Note</h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="product-modal"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div class="p-6 space-y-6">
        
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="topic"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Title
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Hello World"
                required=""
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="abc@xyz.com"
                required=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="number"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="+911234567890"
                required=""
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="pic"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Picture
              </label>
              <input
                type="file"
                name="pic"
                id="pic"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Choose the Image"
                required=""
                onChange={(e) => setPic(e.target.files [0])}
                
              />
            </div>
            <div class="col-span-full">
              <label
                for="description"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="6"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
          </div>
      </div>

      <div class="p-6 border-t border-gray-200 rounded-b">
        <button
          class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
          onClick={handlesubmit}
        >
          Save all
        </button>
      </div>
    </div>
  );
}

export default NoteForm