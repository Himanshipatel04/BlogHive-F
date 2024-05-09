import { useEffect } from "react"

const Reload = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
}

export default Reload