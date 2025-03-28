import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [position, setPosition] = useState()
    const [salary, setSalary] = useState()
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name,email,position,salary})
        .then(result => {
            console.log(result)
            navigate('/user')

        })
        .catch(err => console.log(err))
 
    }

  return (
    <div>

    <div class="min-h-screen mt-3 bg-[url('https://cdn.wallpapersafari.com/48/48/NQV7zq.jpg')] bg-cover h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-yellow-500">
            Add new Employee
        </h2>
       
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={Submit}>
                <div>
                    <label for="email" class="block text-sm font-medium leading-5  text-gray-700">Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Enter Employee name" type="text" required=""
                            class="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setName(e.target.value)}
                            />
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

             

                <div class="mt-6">
                    <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                        Email address
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="Enter Employee email" type="email" 
                            required=""
                            class="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="position" class="block text-sm font-medium leading-5 text-gray-700">
                        Position
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="position" name="position" type="position" required="" placeholder='Enter Employee position'
                            class="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setPosition(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
                        Salary
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="salary" name="salary" type="salary" required="" placeholder='Enter Employee Salary'
                            class="appearance-none block w-full px-3 py-2 border hover:scale-110 hover:bg-gray-600 hover:text-white duration-300 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setSalary(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Add
                        </button>
                    </span>
                </div>
            </form>

        </div>
    </div>
</div>
    
    </div>
  )
}

export default CreateUser