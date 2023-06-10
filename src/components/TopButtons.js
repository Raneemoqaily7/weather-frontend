function TopButtons(){
    const cities =[
        {"id":1,
        "address":"Jordan"},
        {"id":2,
        "address":"Paris"},
        {"id":3,
        "address":"Iraq"},
        {"id":4,
        "address":"Tokyo"},
        {"id":5,
        "address":"Jaban"},


    ]

    return(
       <div  className="my-5 flex flex-row sm:justify-between justify-between items-center">{cities.map((city) =>
        <button key={city.id} className="text-white font-bold  sm:mr-3  ">{city.address}</button>
        )}</div>
    )








}
export default TopButtons