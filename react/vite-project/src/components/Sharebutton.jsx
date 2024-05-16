import PropTypes from 'prop-types';

Sharebutton.propTypes = {
    clickfn : PropTypes.number,
    click_count : PropTypes.string
}

function Sharebutton(propers){
    let {clickfn,click_count} = propers.properties;
    return (
        <>
         <button type="button" onClick={clickfn}>click {click_count} times</button>
        </>
    )
}

export default Sharebutton;