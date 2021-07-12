import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from '../UXStyle/card.module.css'




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

              
 
  return (
    
    obj.map((i)=>{
      return (
                     <Card className={classes.root}>
      <CardContent className={classes.col}>
      <h1>hell</h1>
       <p id={i.id} style={{marginBottom:'40px'}}> {i.text} </p>
       <p className={classes.pr}><b>{i.name}</b>
       <br /> 
    
       </p>
       </CardContent>
      </Card>
      )
    })
    
  );
}

