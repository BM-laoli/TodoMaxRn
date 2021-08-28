import http from '../http';

const testFetch =  async  ( ) =>{
  return http.get('/')
}

const checkAuth =  async  ( ) =>{
  return http.get('/api/me')
}

const login =  async <T,U> ( data:T) :Promise<U> =>{
  return http.post("/api/auth/login  ",data)
}

const registered =  async <T,U>( data:T ):Promise<U>=>{
  return http.post('/create-user',data)
}

export { testFetch,login ,registered,checkAuth}