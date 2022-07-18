
// user Login
export const login=async(emailData,passwordData,apiKey)=>{
    const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}
    `, {
            method: 'POST',
            body: JSON.stringify({
              email: emailData,
              password: passwordData,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json"
            }
    
          })
          const resData=await data.json();
          return resData;
}
// user SignUp
export const signup=async(emailData,passwordData,apiKey)=>{
    const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: emailData,
        password: passwordData,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
          const resData=await data.json();
          return resData;
}

// add main project file
export const sendFile=async (userId,projectName)=>{
    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: new Date().getTime(),
          fileName: projectName,
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      const resData=await data.json();
      console.log(resData);
      console.log("/////////////")
      return resData;
}

// get all the projects of a particular user
export const getProjects=async(userId)=>{
    const allProjectsObjectToArray = [];

    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`);


    const resData = await data.json()

    for (let i in resData) {
       allProjectsObjectToArray.push({
          id: i,
          fileName: resData[i].fileName,
       })
       console.log("AllProjectsObjectToArray", allProjectsObjectToArray)
    }
  return allProjectsObjectToArray
}


// get the subfolders in a particular project of a user

export const getSubFolders= async(userId,projectId)=>{
    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}/${projectId}.json`);
    const resData = await data.json();
    console.log("ddddd")
    console.log(resData)
    const subFolders = [];
    for (let i in resData) {
      subFolders.push({
        id: i,
        files: resData[i].projectFiles,
      })
    //   console.log("========")
    //   console.log(subFolders)
    //   console.log("========")
    }
    return subFolders

}