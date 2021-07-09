import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
           padding:"1rem",
                 backgroundColor:"#202a3c",
    minWidth: 275,
    margin:"1rem"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  p:{
                 textAlign:"left",
                 fontSize:'14px',
                 letterSpacing:'1px'
  },
  col:{
                 color:"white"
  }

});


export default function Cards() {

               let obj = [
               {id:1 , 
               text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." , 
                name:'Satish patel' ,
               post:"Founder and CEO"},
                
               {id:2 , 
               text:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine." , 
                name:'Bruce McKenzie' ,
               post:" Founder & CEO, Huddle"},
                
               {id:3 ,
                text:"  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine." , 

                name:'  Iva Boyd' ,
               post:"  Founder & CEO, Huddle"}
                
               ]

               const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    obj.map((i)=>{
      return (
                     <Card className={classes.root}>
      <CardContent className={classes.col}>
       <p id={i.id} style={{marginBottom:'40px'}}> {i.text} </p>
       <p className={classes.p}><b>{i.name}</b>
       <br /> 
       <span style={{color:'rgba(255,255,255,0.5)'}}>{i.post}</span>
       </p>
       </CardContent>
      </Card>
      )
    })
    
  );
}

