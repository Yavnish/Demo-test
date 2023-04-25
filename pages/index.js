import Head from "next/head"
import styles from "../styles/Home.module.css"
import style from "../styles/card.module.css"
import Image from "next/image"
import Link from "next/link"
import "@fontsource/jost"
import { AiOutlineCopyrightCircle } from 'react-icons/Ai';
export default function Home() {
  return(
  <> 
    <div className={style.card}><h1 className={styles.demo}>Demo Online Test</h1></div>
    <div>
      <button className={styles.button}>All Sections</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button}>Physics</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button}>Chemistry</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button}>Maths</button>
    </div>
    <div style={{borderTop:'2px solid', color:"black", width:'1680px',marginLeft:'-2px', marginTop:'10px'}}></div>  
    <div className={style.card1}>
    <div style={{
      position:"absolute",
      width: "80px",
      height:"100px",
      marginLeft:"8px",
      marginTop:"5px"      
     }
     }> 
      <Image
        src="/login.webp" 
        alt="login"
        layout="fill"
      />
      </div>
      <p style={{marginLeft:"95px", fontSize:"20px" , paddingTop:"15px"}}>Time 
      <br/>Left:</p>
      <h1 style={{marginLeft:"140px", fontSize:"18px" , marginTop:"-50px"}}>02:39:29</h1>
      <h1 style={{marginLeft:"98px", fontSize:"20px" , marginTop:"25px"}}>Ashish Kumar</h1>
    </div>
    <div className={style.card2}>
     <button style={{backgroundColor: "blue"}} className={styles.button2}>Question Pallete</button>      
     <button style={{backgroundColor: "rgb(34, 204, 53)"}} className={styles.button3}>1</button>
     <button style={{backgroundColor: "Red"}} className={styles.button3}>2</button>
     <button style={{backgroundColor: "rgb(34, 204, 53)"}} className={styles.button3}>3</button>
     <button style={{backgroundColor: "rgb(34, 204, 53)"}} className={styles.button3}>4</button>  
     <button style={{backgroundColor: "Red"}} className={styles.button3}>5</button>      
     <button style={{backgroundColor: "yellow"}} className={styles.button3}>6</button>
     <button style={{backgroundColor: "rgb(34, 204, 53)"}} className={styles.button3}>7</button>
     <button style={{backgroundColor: "white"}} className={styles.button3}>8</button>
     <button style={{backgroundColor: "rgb(192, 49, 236)"}} className={styles.button3}>9</button>  
     <button style={{backgroundColor: "lightgrey"}} className={styles.button3}>10</button>  
    </div>
    <div className={style.card3}>
     <button style={{backgroundColor: "blue", textAlign:'left', fontSize:'16px'}} className={styles.button2}>Legend (Click to view)</button>      
     <button style={{backgroundColor: "rgb(34, 204, 53)", textAlign:'left', fontSize:'16px'}} className={styles.button4}>4 Answer</button>
     <button style={{backgroundColor: "Red", textAlign:'left', fontSize:'16px'}} className={styles.button4}>2 No Answer</button>
     <button style={{backgroundColor: "rgb(192, 49, 236)", textAlign:'left', fontSize:'16px'}} className={styles.button4}>1 Review+Ans</button>
     <button style={{backgroundColor: "yellow", textAlign:'left', fontSize:'16px'}} className={styles.button4}>1 Review-Ans</button>      
     <button style={{backgroundColor: "lightgrey", textAlign:'left', fontSize:'16px'}} className={styles.button4}>1 Dump</button>      
     <button style={{backgroundColor: "white", textAlign:'left', fontSize:'16px'}} className={styles.button4}>1 No visit</button>     
     <button style={{backgroundColor: "blue", textAlign:'center', fontSize:'16px',marginTop:'2px',borderTopLeftRadius:'0px', borderTopRightRadius:'0px'}} className={styles.button2}>10 All Questions</button>   
     <button style={{backgroundColor: "rgb(36, 96, 224)", fontSize:'16px',marginTop:'30px'}} className={styles.button5}>Profile</button>   
     <button style={{backgroundColor: "rgb(36, 96, 224)", fontSize:'16px'}} className={styles.button5}>Instr</button> 
     <button style={{backgroundColor: "rgb(36, 96, 224)", fontSize:'16px'}} className={styles.button5}>Questions</button>   
     <button style={{backgroundColor: "rgb(36, 96, 224)", fontSize:'16px'}} className={styles.button5}>Submit</button>   
    </div>
    <div className={style.card5}>
     <button style={{backgroundColor: "blue", textAlign:'left', fontSize:'16px',width:'1670px',display:'flex',flexDirection:'row', alignItems:'center'}} className={styles.button2}>Q no.:1 <h1 style={{fontSize:'16px',marginLeft:"1400px"}}>View in:</h1></button>
     <button style={{ textAlign:'left', fontSize:'20px',width:'1670px',display:'flex',flexDirection:'row', alignItems:'center',backgroundColor:'white', color:'blue'}} className={styles.button2}>QUESTION INSTRUCTION <h1 style={{fontSize:'20px',marginLeft:"650px"}}>QUESTION</h1></button>
     <div style={{borderTop:'1px solid', color:"black", width:'1670px',marginLeft:'-1px', marginTop:'-5px'}}></div>
     <p style={{color:'black',fontSize:'26px',marginTop:'0px',marginLeft:'20px'}}>Passage You Want to hit a small box on the floor with a marble fired from 
     <br/>a spring-loaded gun that is mounted on a table.The target box is a distance 
     <br/>R horizontally from the edge of the table; see the figure of the right.You 
     <br/>compress the spring a distance d, but the center of marble falls short by a 
     <br/>distance r of the center of the box. How far should you compress the spring
     <br/>to score a direct hit(neglect friction)?</p>
     <p style={{color:'black',fontSize:'26px',marginTop:'-190px',marginLeft:'880px'}}>A block of mass m is projected with velocity</p>
     <div style={{borderRight:'1px solid', color:"black", height:'700px',marginRight:'800px', marginTop:'-88px'}}></div> 
     
    </div>
    <div>
    <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button1}>Clear Responce</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button1}>Review</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button1}>Dump</button>
      <button style={{backgroundColor: "rgb(36, 96, 224)"}} className={styles.button1}>Preview</button>
      <button className={styles.button1}>Next</button>
    </div> 
    <div className={style.card4}>
        <h1 style={{marginLeft:"900px",color:'white',display:'flex',flexDirection:'row',alignItems:'center'}}><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>Addmen</h1>
    </div>
  </>
  )
}
