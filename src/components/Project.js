import Header from "./Header";

const CodeArtPreview = ({ title, image, type, description }) => {
  if (type % 2 == 0) {
    return (
      <div
        className={
          "flex flex-wrap md:flex-nowrap w-full justify-center md:justify-end items-center"
        }
      >
        <div className="flex-wrap justify-end hidden w-3/4 max-w-lg ml-4 mr-8 text-right md:flex md:w-1/2 xl:w-1/3">
          <Header variant="4">{title}</Header>
          <div className="flex w-full mt-4 mb-4 boxshadow-3d-right">
            <p className="w-full m-4 text-sm md:text-md lg:text-lg font-extralight font-manrope">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-3/4 mx-4 md:w-1/2 xl:w-1/3 md:justify-start">
          <GatsbyImage
            image={image}
            className="picture-border-sm-1"
            alt={title + " Preview Image"}
            loading="lazy"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          "flex flex-wrap md:flex-nowrap w-full justify-center md:justify-start items-center"
        }
      >
        <div className="flex justify-center w-3/4 mx-4 md:w-1/2 xl:w-1/3 md:justify-end">
          <GatsbyImage
            image={image}
            className="w-full picture-border-sm-2"
            alt={title + " Preview Image"}
            loading="lazy"
          />
        </div>
        <div className="flex-wrap justify-start hidden w-3/4 max-w-lg ml-8 mr-4 text-left md:flex md:w-1/2 xl:w-1/3">
          <Header variant="1">{title}</Header>
          <div className="flex w-full mt-4 mb-4 boxshadow-3d-left">
            <p className="w-full m-4 text-sm md:text-md lg:text-lg font-extralight font-manrope">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default CodeArtPreview;
