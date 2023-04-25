import React, {useState} from 'react'
import UserProfile from './components/UserProfile' 
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://media.istockphoto.com/id/1403897241/photo/university-students-studying-together-in-the-library.jpg?s=612x612&w=is&k=20&c=zB_Upa1xe5C6SvwDHYEhxRXgGec7OA7SESx_Pp7E1E0=',
    name:'Dravid Len',
    role: 'Software Engineer'
  }
]

const App = ()=>{
  const [searchInput, setSearchInput] = useState('') 
  const [filterSearch, setFilterSearch] = useState(initialUserDetailsList) 
  const searchResults = filterSearch.filter(eachUser => eachUser.name.includes(searchInput))

  const onChangeSeachElement=event=>{
    setSearchInput(event.target.value)
  }

  const deleteUser = uniqueNo =>{
    const filterSearchData = filterSearch.filter(
      each => each.uniqueNo !== uniqueNo
    )
    setFilterSearch(filterSearchData)
  }
  
  return(
    <div className='app-contianer'>
      <div className='head-part'>
      <h1>User List</h1>
      </div>
      <input type='search' placeholder='search here' className="search-input" onChange={onChangeSeachElement} value={searchInput}/>
      <div className='user-container'>
      
      <ul className='list-contianer'>
        {searchResults.map(eachUser => (
          <UserProfile
           userDetails={eachUser}
           key={eachUser.uniqueNo}
           deleteUser={deleteUser}
          />
        ))}
      </ul>
      </div>
    </div>
  )
}
export default App