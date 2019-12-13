import React from 'react'

const ProjectDetails=(props)=> {
    const id=props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project title {id}
                        <p>Lorem ipso odsd o ds os d sdsdsds dodosdos. Lorem ipso odsd o ds os d sdsdsds dodosdosLorem ipso odsd o ds os d sdsdsds dodosdosLorem ipso odsd o ds os d sdsdsds dodosdosLorem ipso odsd o ds os d sdsdsds dodosdos</p>
                    </span>
                </div>
                <div className="car-action grey lighten-4 grey-text">
                    <div>Posted by Net Ninja</div>
                    <div>12 September </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails

