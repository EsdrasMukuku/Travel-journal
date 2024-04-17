import data from "../data"
import Places from "./Places"




const Body = () => {
    const places = data.map(item => {
        return (
            <Places
                key={item.title}
                {...item}
                
            />
        )
    }) 
  return (
    <body className="mt-10">
        <div className="container flex flex-col gap-y-10">
          {places}
            
        </div>
      
    </body>
  )
}

export default Body
