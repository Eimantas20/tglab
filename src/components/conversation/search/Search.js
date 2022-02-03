import '../../../styles/search.css'
import { useState } from 'react'

const Search = () => {
    const [ search, setSearch ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submited with value ${search}`)
        setSearch('')
    }

    return(
        <form className='search-form' onSubmit={handleSubmit}>
            <input type='text' placeholder="Placeholder..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default Search