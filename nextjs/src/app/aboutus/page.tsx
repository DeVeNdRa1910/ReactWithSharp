import Link from "next/link"

function aboutus () {

  const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  ]

  return(
    <>
      <h2 className="text-center text-4xl mt-15">Our Developers</h2>
      <ul>
        {
          details.map(item => (
            <li key={item.id}>
              <Link href={`/aboutus/developer/${item.id}`} >{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default aboutus