import { useState } from 'react'


type Ttodo = {
  id: number,
  text: string,
  

}
const Todos = () => {
  const [todo, setTodo] = useState<Ttodo[]>([])
  const [inp, setinp] = useState("")
  const [edit, setedit] = useState<number | null>(null)
  const addTodo = () => {
    if (edit) {
       const index  = todo.findIndex(x=>x.id === edit)
       todo[index].text = inp
       setTodo([...todo])
       setedit(null)
    }
    else{
      setTodo([...todo, { id: Date.now(), text: inp }])
    }
    setinp('') 
  }
  const deletelist = (id:number) => {
    setTodo(todo.filter((x)=>x.id!==id))
  }
  const allDeleteTodo = () => {
    setTodo([])
  }
  const editTodo = (id:number,text:string) => {
    console.log(id);
    setinp(text)
    console.log(text);
    setedit(id)
    console.log(edit);
     
    
    
  }

  return (
    <div>
      <h2>todo</h2>
      <input type="text" value={inp} onChange={(e) => setinp(e.target.value)} />
      <button onClick={addTodo}> {edit ? "edit" :"add" }</button>
      <button onClick={allDeleteTodo}>delete all</button>
      <ul>
        {todo.map((t, i) => (
          <li key={i}>{t.id} -{t.text} <button onClick={()=>deletelist(t.id)}>delete</button> 
          <button onClick={()=>editTodo(t.id,t.text)} >edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos