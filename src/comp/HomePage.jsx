
import { Box } from "@mui/material";
import Products from "./Products";


function Main({productData}) {

    return ( 
        <>
           
            <Box
            sx={{
                display:"flex",
                justifyContent: "space-evenly",
                flexWrap:"wrap",  
                gap:"50px",
                minHeight: "60vh",

            }}
            >

            {productData && productData.map((res)=>(
                    <Products cardData = {res}/>
            ))}
            {/* <Products/>
            <Products/>
            <Products/> */}
            </Box>
            
        </>
     );
}

export default Main;