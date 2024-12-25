import { gradientClass } from "../../../../utilities/gradientClass";
import { ProjectCardViewProps } from "./types";

type ComponentType = React.FC<ProjectCardViewProps>;
export const ProjectCardView: ComponentType = ({ theme, project }) => {
  const gradient = gradientClass(theme);

  return (
    <div
      className={`rounded-lg bg-gradient-to-r ${gradient} p-0.5 shadow-lg h-full`}
      data-aos="fade-up"
    >
      {/* Inner content with a solid background */}
      <div
        className={`rounded-lg overflow-hidden shadow-lg ${theme.card_background_closed} transition-colors duration-500 h-full`}
      >
        {/* Project Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Project Content */}
        <div className="p-6">
          <h2 className={`text-2xl font-bold mb-2 ${theme.text}`}>
            {project.title}
          </h2>
          <p className={`text-base mb-4 ${theme.text}`}>
            {project.description}
          </p>

          {/* Skills Learned */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* View Project Buttons */}
          <div className="flex flex-wrap justify-center align-center gap-2 mb-4">
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {project.buttonText}
            </a>
            {project.buttonText2 && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {project.buttonText2}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
