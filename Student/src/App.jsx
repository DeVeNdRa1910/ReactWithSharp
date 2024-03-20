import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [studentCount, setStudentCount] = useState(0)
  const [studentName,  setStudentName] = useState("")
  const [studentPhone, setStudentPhone] = useState("")
  const [studentAddress, setStudentAddress] = useState("")
  const [students, setStudents] = useState([])
  const [isEditable, setIsEditable] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});

 
  const addStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      id: uuidv4(),
      name: studentName,
      phone: studentPhone,
      address: studentAddress
    }

    const newStudents = [...students, newStudent]

    setStudents(newStudents)
    setStudentCount(studentCount+1)
    setStudentName("");
    setStudentPhone("");
    setStudentAddress("");
    setStudent({})
    console.log(students);
  }

  function handleDelete (id){
    const newStudents = students.filter((item) => item.id !== id);
    setStudents(newStudents);
    setStudentCount(studentCount-1);
    console.log(students);
  }

  const handleEdit = (id) => {
    const std = students.find((item) => item.id === id);
    setEditedStudent(std);
    setIsEditable(true);
    handleDelete(id)
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const updatedStudents = students.map((item) =>
      item.id === editedStudent.id ? editedStudent : item
    );
    setStudents(updatedStudents);
    setIsEditable(false);
    setEditedStudent({});
  };
 
  return (
    <>
      <div>
        <div>
          <h1 className='flex justify-center text-4xl font-extrabold'>Student Managment</h1>
          <h3 className='flex justify-center text-2xl'>Number of Student: {studentCount}</h3>
        </div>
        <div className='my-4'>
          <h1 className='place-items-center font-bold'>Student Information</h1>
          <form className='m-2 flexb flex-wrap justify-around' 
          action="submit">
            <input
            className='py-2 px-4 mx-2 rounded-lg bg-black outline-offset-1'
            type="text" placeholder='Enter Student Name...'
            value={studentName}
            onChange={(e)=>{setStudentName(e.target.value)}}
            />
            <input
            className='py-2 px-4 mx-2 rounded-lg bg-black outline-offset-1' 
            type="text" placeholder='Enter phone number' 
            value={studentPhone}
            onChange={(e)=>{setStudentPhone(e.target.value)}}
            />
            <input
            className='py-2 px-4 mx-2 rounded-lg bg-black outline-offset-1'
            type="text" placeholder='Enter Address'
            value={studentAddress}
            onChange={(e)=>{setStudentAddress(e.target.value)}}
            />
          </form>
          {isEditable ? (
              <button
                className='outline my-8 px-8 rounded-2xl mx-12'
                onClick={handleSubmitEdit}
              >UPDATE</button>
            ) : (
              <button className='outline my-8 px-8 rounded-2xl mx-12' onClick={addStudent}>
                ADD</button>
            )}
        </div>
        <div>
          <h1 className='flex justify-center text-4xl'>Studets Information</h1>
          <div>
            {students.map((item) => (
              <div key={item.id} className='flex justify-between w-4/5 ml-28 border-2 rounded-xl my-4 py-2 '>
                <h3 className='pl-2'>
                  {item.name} , {item.phone} , {item.address}
                </h3>
                <div>
                  <button 
                    className='delete bg-violet-600 text-white hover:bg-violet-800 rounded-md mx-4 px-8 py-2 shadow-xl'
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </button>
                  <button 
                    className='delete bg-violet-600 text-white hover:bg-violet-800 rounded-md mx-4 px-8 py-2 shadow-xl'
                    onClick={() => handleEdit(item.id)}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
