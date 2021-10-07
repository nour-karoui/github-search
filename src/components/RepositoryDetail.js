import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareAlt, faStar, faCode} from '@fortawesome/free-solid-svg-icons'


function RepositoryDetail(props) {
    const {repository} = props;
    return (
        <div>

            <div className={"card my-2"}>
                    <div className={"card-body"}>
                        <h4 className={"card-title"}>{repository.name}</h4>
                        <p className={"card-text"}>{repository.description}</p>
                        <h6>{repository.license ? <h6>{repository.license.name}</h6> : null}</h6>
                        <div className={'d-flex'}>
                            <div><FontAwesomeIcon icon={faStar} /> {repository.stargazers_count} Stars</div>
                            <div className={'px-3'}><FontAwesomeIcon className={'rotate-icon'} icon={faShareAlt} /> {repository.forks_count} Forks</div>
                            {repository.language? <div><FontAwesomeIcon icon={faCode} /> {repository.language}</div> : null}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default RepositoryDetail;
