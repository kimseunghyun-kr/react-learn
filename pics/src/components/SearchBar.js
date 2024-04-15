import { useState } from "react"
import './SearchBar.css'

function SearchBar({onSubmit}) {

    const [term,setTerm] = useState("")
    const changeTerm = (event) => setTerm(event.target.value);

    const formSubmit = (event) => {
        event.preventDefault(event)
        console.log(term)

        return onSubmit(term)
    }
    return(
    <div className="search-bar">
        <form onSubmit={formSubmit}>
            {/* taking over control from browser to the useState from react */}
            <label> Enter Search Term</label>
            <input value= {term} onChange={changeTerm} type="string" placeholder="go search!"/>
        </form>
    </div>
    )
}

export default SearchBar