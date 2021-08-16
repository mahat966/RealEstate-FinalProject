import React from 'react'

export const Button = (props) => {

    const enabledLabel = props.enabledLabel || 'submit';
    const disabledLabel = props.disabledLabel || 'submitting...';

    let btn = props.isSubmitting
    ? <button disabled className="btn btn-primary margin-top-10px"> {disabledLabel} </button>
    : <button disabled = {!props.isValidForm} type = "submit" data-toggle="modal" data-target="#exampleModalCenter" className="btn btn-primary margin-top-10px" type="submit"> {enabledLabel} </button>
    return btn;
}

