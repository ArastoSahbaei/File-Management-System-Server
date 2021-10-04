//1xx informational response – the request was received, continuing process

//2xx successful – the request was successfully received, understood, and accepted
const OK = 200
const CREATED = 201

//3xx redirection – further action needs to be taken in order to complete the request

//4xx client error – the request contains bad syntax or cannot be fulfilled
const BAD_REQUEST = 400
const NOT_FOUND = 404

//5xx server error – the server failed to fulfil an apparently valid request
const INTERNAL_SERVER_ERROR = 500

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR
}