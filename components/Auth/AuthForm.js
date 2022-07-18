import { useEffect, useRef } from 'react';
import classes from './AuthForm.module.css';
import { authAction } from '../../store/authentication'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter, Router } from 'next/router'
import { login, signup } from '../../store/utils/asyncFunctions';
const AuthForm = () => {


  const apiKey = 'AIzaSyDFgj3cq2lSpCOWefurgUeEGj1KHT1-Nck'
  const route = Router;
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const log = useSelector((state) => state.auth.login)
  const token = useSelector((state) => state.auth.tokenId)
  const userId = useSelector((state) => state.auth.userId)

  const dispatch = useDispatch();


  // useEffect(() => {
  // console.log(`token`, token, `userId`, userId)
  // }, [token, userId])

  // { kind: "identitytoolkit#SignupNewUserResponse", idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlNTJiOGQ4NTk4N2U1OW…HZnabOTTpLGiHMI0BCIim2r1J1blPMgQFde2crQB8KHQqKTCg", email: "test7@gmail.com", refreshToken: "ACzBnCgouLqLK-AyJab1qAYn09hTZZIDh9tO806RgZvAaGTdWi…cSjis6gvqQVyMbrcsubOYdNvV8xP0xd1lJi0SqrwOOIriBs_A", expiresIn: "3600", … }
  // email: "test7@gmail.com"
  // expiresIn: "3600"
  // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlNTJiOGQ4NTk4N2U1OWRjYWM2MmJlNzg2YzcwZTAyMDcxN2I0MTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29kZS1tYXAtOWY1N2MiLCJhdWQiOiJjb2RlLW1hcC05ZjU3YyIsImF1dGhfdGltZSI6MTYzMjM3ODI5MSwidXNlcl9pZCI6IkI4WGh6UFN1QUtkMVp1cnRUMVJncGJJNmQxajEiLCJzdWIiOiJCOFhoelBTdUFLZDFadXJ0VDFSZ3BiSTZkMWoxIiwiaWF0IjoxNjMyMzc4MjkxLCJleHAiOjE2MzIzODE4OTEsImVtYWlsIjoidGVzdDdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3Q3QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GZ5VVJ4P_0xg4-o_4pk_vTxB1UQnwXSCSLGPAS5GBZ_QL__qacH3SLXDmVEsaV_WmvHDsW5RHcz4KzONMThR1q7_OzCsqmdsukdFrbbGCGsB_le1_tvZv_c70TRa3nqVqWhj10U4AMvMm1stRj-tNC9pZypewUjYSxiNNHiuRHglkQEuli1NWT4qgQjpB92rXy0mz-nIAosoCwkELDtCD6XVcvTRlkVxjfoIBVvvmd5_gq8-AmZLFZDI5nqq58Ti_X04WuVD-uT-5Pj5qjDipmJfq9pNFLlR5mbV6HZnabOTTpLGiHMI0BCIim2r1J1blPMgQFde2crQB8KHQqKTCg"
  // kind: "identitytoolkit#SignupNewUserResponse"
  // localId: "B8XhzPSuAKd1ZurtT1RgpbI6d1j1"
  // refreshToken: "ACzBnCgouLqLK-AyJab1qAYn09hTZZIDh9tO806RgZvAaGTdWimpvwj1SZgsdkAvAvMUGVzFlzQPNY3n-AePAqW


  const switchAuthModeHandler = () => {

    dispatch(authAction.isLogin())
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const emailData = emailRef.current.value;
    const passwordData = emailRef.current.value;

    if (log) {
      const resData = await login(emailData,passwordData,apiKey)
      router.push("/myProfile")

    //  console.log(resData)
      // dispatch(authAction.tokenContainer({
      //   tokenId: resData.idToken,
      //   userId: resData.localId,
      // }))
      //  console.log("====////////")


    } else {
      const resData = await signup(emailData,passwordData,apiKey);
      // console.log(resData)
      // dispatch(authAction.tokenContainer({
      //   tokenId: resData.idToken,
      //   userId: resData.localId,
      // }))

    }


  }



  return (
    <body className={classes.body}>
      <section className={classes.auth}>
        <h3>Ready To Start Your Journey? You're in the right place </h3>
        <h1>{log ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required ref={passwordRef} />
          </div>
          <div className={classes.actions}>
            <button>{log ? 'Login' : 'Create Account'}</button>
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {log ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    </body>
  );
};

export default AuthForm;
