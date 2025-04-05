import { useState , useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function Projects() {
    const [name , setName] = useState('')
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [random , setRandom] = useState(' ')
    const [githubData, setGithubData] = useState({})

    const handleClick = (e)=>{
      e.preventDefault()
     setIsSubmitted(true)
      
    }
useEffect(()=>{
  const data = async ()=>{
    try{const res = await axios.get("https://api.github.com/users/meethp20");
       setGithubData(res.data)
    console.log(res.data)}catch(err){
      console.log('error in fetching data' ,err)
      alert('error in fetching data')
    }
   } 
   data();
   } , [])
    
    const generate = ()=>{
      const randomNumber = Math.floor(Math.random() *1000 +1);
      setRandom(randomNumber);
      console.log(randomNumber);
       }



  return (
    <div className=''> 
               
        <h1>crazy </h1>
        <form onSubmit={handleClick} >  
      <input type='text'
      placeholder='enter name'
       value={name}
      onChange={(e)=> {setName(e.target.value);
         setIsSubmitted(false);}}
    />
      <button type='submit' >submit</button>
      </form>     
   {isSubmitted ? `hey ${name}` :'enter name' }
       <div className='flex flex-col items-center justify-center h-screen bg-gray-200'> 
              <h1>click button to generate random number</h1>
               <button onClick={generate}>generate</button>
              {random  &&  `random is ${random}`}
       </div>
<div>
  <h1> this is me </h1>
  <img src={githubData.avatar_url} alt='my image' />
  <h1>my name is {githubData.name}</h1>
  <h1>my login is {githubData.login}</h1>
  <h1>my location is {githubData.location|| 'no location'}</h1>
</div>
      </div>
  )
}

export default Projects