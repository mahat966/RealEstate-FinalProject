import { notify } from './toaster';
export const handleError = (error) => {
    let errMsg = 'something went wrong';
    debugger; ///application will be paused once it finds debugger
    let err = error.response;
    if (err && err.data) {
        const message = err.data.msg;
        if (typeof message === 'string') {
            errMsg = err.data.msg;
        } else {
            errMsg = extractErr(err.data.msg)
        }
    }


    notify.showError(errMsg)
    // steps to follow
    // check error
    // parse error
    // extract error message
    // prepare error message
    // show then in UI

}

const extractErr = (msgObject) => {
    let msg;
    switch (msgObject.code) {
        case 11000:
            msg = `${Object.values(msgObject.keyValue)[0]}  is duplicate.`
            break;

        default:
            break;
    }

    return msg;
}
