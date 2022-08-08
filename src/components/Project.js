const Project = ({project}) => {
const {name, url, img} = project;
  return (
    <a href ={url} className="project">
        <div className="img-container">
            <span>
                <img src={process.env.PUBLIC_URL + img} alt={name} className='img'/>
            </span>
        </div>
        <footer>
            <h5>{name}</h5>
        </footer>
    </a>
  );
};

export default Project;