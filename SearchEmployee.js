 function SearchEmployee({ search, setSearch }) {

  return (

    <input
      type="text"
      placeholder="Search Employee"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />

  );

}

export default SearchEmployee;