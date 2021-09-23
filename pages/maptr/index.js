import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NavigationBar from '../../components/NavigationBar/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { mapDataAction } from '../../store/mapData'

export default function prjectFile() {

               const ids = useSelector((state) => state.mapData.ids)
               const route = useRouter();
               const projectIds = useSelector((state) => state.fileStore.myProfile)

               const idsContainer = useSelector((state) => state.mapData.idContainer);

               const dispatch = useDispatch();

               useEffect(() => {

                              dispatch(mapDataAction.idOFProjectFiles({
                                             projectFileId: route.query.fileId
                              }))

                              dispatch(mapDataAction.idStore(
                                             {
                                                            projectId: projectIds,
                                                            fileId: route.query.fileId
                                             }
                              ))

               }, [])


               const routName = route.query;
               console.log(`ids `, ids)
               console.log('routeName of maptr', routName);

               console.log('idsContainer', idsContainer)




               return (
                              <div>
                                             <NavigationBar />
                              </div>
               )
}
