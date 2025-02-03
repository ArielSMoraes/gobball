import { Stream } from "stream"

const API_HOST = "http://localhost:4000/api"

function login(user: User): Promise<Stream | ReadableStream<Uint8Array<ArrayBufferLike>>> {
  return fetch(`${API_HOST}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.name,
      password: user.password
    })
  })
  .then(res => {
    if(!res.ok) {
      throw new Error('Login invalido')
    }

    return res.body
  })
}


const httpService = {
  login
}

export default httpService
