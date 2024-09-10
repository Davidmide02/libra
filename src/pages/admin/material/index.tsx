import { useReactTable } from "@tanstack/react-table";
import UserData from './data.json'
import { useState } from "react";
type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
  }
  


const AdminMaterial = () => {
    const[data, setData]=useState<User[]>(UserData)
    const columns = [
        {
          header: 'First Name',
          accessorKey: 'name.first',
        },
        {
            header: 'Last Name',
          accessorKey: 'name.last',
        },
        // {
        //   header: 'Age',
        //   accessorFn: info => info.age, 
        // },
        
    ]
    const table = useReactTable({columns, data})
    
  return (
    <div>
      
    </div>
  )
}

export default AdminMaterial
