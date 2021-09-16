import React from 'react'
import { useRouter } from 'next/router'
import NavigationBar from '../../components/NavigationBar/Navigation'

export default function prjectFile() {

               const route = useRouter();

               const routName = route.query;
               console.log(routName);


               return (
                              <div>
                                             <NavigationBar />
                              </div>
               )
}
