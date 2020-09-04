import React,{ Component } from 'react';

const TweetForm = (props) => {
  return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        Hola, Joan
                    </div>
                    <div className="card-body">
                        <input className="form-control" placeholder="¿Que estás pensando?"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">Tweet!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TweetForm;