import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Material = () => {
    function mamd(){
        alert('afarin');
    }
    return (
        <>
        
            
              <h1 style={{fontSize:"1.6rem",marginLeft:"10px",display:"flex",justifyContent:"center",alignItems:'center',marginTop:"10rem",fontWeight:'bold'}}> Register</h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',}}>
           
            <div style={{background:"gray",border:"2px solid black",display:"flex",width:"20vw",justifyContent:"center",alignItems:'center',borderRadius:"20px",marginTop:"6px",fontWeight:"bold"}}>
          
                

            <div>

                <TextField id="outlined-basic" label="Name" variant="outlined"  sx={{marginLeft:"3vw",marginTop:"30px",background:"white",border:"none",borderRadius:"7px", }} />
                <TextField id="outlined-basic" label="Number" variant="outlined"  sx={{marginLeft:"3vw",marginTop:"20px",background:"white",border:"none",borderRadius:"7px", }}/>
                    



                <Button variant='contained' onClick={mamd} sx={{ color: "black" ,display:"block",marginLeft:"7.5vw",marginTop:"20px",marginBottom:"20px",background:"blue"}}>
                    click
                </Button>

            </div>
            </div>
            </div>
        </>
    );
};
export default Material;