import './Project.css';

interface Props {
    name: string,
    description: string,
    image: string
}

function Project({name, description, image} : Props) {
    return (
        <div className="project">
            <div className='projet-texte'>
                <h4>{name}</h4>
                <p>{description}</p>
                <button className='project-button'>View Project</button>
            </div>
            <img className='project-image' src={image} alt={name}></img>
        </div>
    );
}

export default Project;