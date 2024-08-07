import { Dummy } from "../assets"

function AxiosFake(
  method,
  url,
  statusReturn,
  payload,
) {

  if (statusReturn == 200) {

    return {
      status: '200',
      data: Dummy?.List?.data,
      messages: 'Success fetch Api'
    }

  }

  return {
    status: '500',
    data: [],
    messages: 'Failed fetch Api'
  }

}

export default AxiosFake