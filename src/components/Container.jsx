import React from 'react';

const style = {
    backgroundColor: '#fff', 
    borderRadius: '20px',
};

const Container = (props) => {
    return (
        <div className="container my-5">
            <div className="row  justify-content-center">
                <div className="col-11 col-sm-10 col-md-10 col-lg-6 py-3" style={style}>{props.children}</div>
            </div>
        </div>
    );
};

export default Container;
