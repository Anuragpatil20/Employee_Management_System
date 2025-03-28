import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data) )
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
           window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div className="mt-5 bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8217.jpg')] bg-cover items-center h-screen">
    <a href='/create' class="px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 hover:scale-110 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150  ml-250 ">Add new Employee</a>

    <div className='mt-10'>
    
    <table class="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Id</th>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Position</th>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">salary</th>
            <th class="px-6 py-3 text-left text-sm font-bold text-black uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody class="bg-transparent divide-y divide-gray-200">
       
    {
        users.map((user,index) =>{
          return   <tr>
            <td class="px-6 py-4 whitespace-nowrap">{index+1}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.position}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.salary}</td>
           
            <td class="px-6 py-4 whitespace-nowrap">
                <a href={`/update/${user._id}`} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Update</a>
                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out" onClick={(e) => handleDelete(user._id)}>Delete</button>
            </td>
        </tr>
        })
    }
       
    </tbody>
</table>
    
    </div>
    </div>
  )
}

export default Users