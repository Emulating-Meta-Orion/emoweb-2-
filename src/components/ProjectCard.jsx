/* eslint-disable react/prop-types */


const ProjectCard = ({ id, title, description, imageSrc, videoLink }) => {
  return (
    <div className="flex pt-120 pb-60 bg-black text-white" id={id}>
  
        <div className="md:flex">
        <div className='mr-20'>
              <img src={imageSrc}  className='w-[1000px] 2xl:w-[1500px] 2xl:mr-30 border' alt="" />
            </div>
            <div className="mt-20 ">
              <h2 className="text-customBlue text-4xl ml-10">{title}</h2>
              <p className="text-justify p-10 text-xl mr-20">{description}</p>
              <br />
              <a href={videoLink} className="link bg-transparent text-xl text-gray-400 m-10 hover:bg-gray-600 transition-none shadow-none">Watch Online</a>
            </div>

    
          </div>
      </div>
  );
};

export default ProjectCard;
