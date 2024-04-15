import { useState } from "react"

function SearchBar({onSubmit}) {

    const [term,setTerm] = useState("")
    const changeTerm = (event) => setTerm(event.target.value);

    const formSubmit = (event) => {
        event.preventDefault(event)
        console.log(term)

        return onSubmit(term)
    }
    return(
    <div onSubmit={formSubmit}>
        <form>
            <div> image search </div>
            {/* taking over control from browser to the useState from react */}
            <input value= {term} onChange={changeTerm} type="string" placeholder="go search!"/>
            <p> {term} </p>
        </form>
    </div>
    )
}

export default SearchBar