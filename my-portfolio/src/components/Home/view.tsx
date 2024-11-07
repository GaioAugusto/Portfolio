import { HomeViewProps } from "./types";

type ComponentType = React.FC<HomeViewProps>;
export const HomeView: ComponentType = () => {
  return (
    <section
      id="initial"
      className="h-screen flex items-center justify-center text-center px-4 md:px-12 lg:px-24"
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          Here you can find my projects and experience.
        </p>
      </div>
    </section>
  );
};
