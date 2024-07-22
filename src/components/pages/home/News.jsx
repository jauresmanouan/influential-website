import Card from "./Card";

//@TODO : refacto by create a map for card
export default function News() {
  return (
    <div className="flex justify-center items-center">
      <div className="xl:h-screen m-10 xl:m-0 max-md:m-0 flex justify-center items-start flex-col space-y-10">
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-7xl">
          Nos news 🗞️
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row gap-10 md:gap-8">
          <Card
            image={"src/assets/images/Aletier IFL 240623 4.png"}
            cardTitle={"Sharing Experience"}
            date={"10-Jan-2023"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipiscing elidolor  sit nullam neques."
            }
          />
          <Card
            image={"src/assets/images/Aletier IFL 240623 4.png"}
            cardTitle={"Free Virtual Talk"}
            date={"10 Jan 2023"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipiscing elidolor  sit nullam neques."
            }
          />
          <Card
            image={"src/assets/images/Aletier IFL 240623 4.png"}
            cardTitle={"Atelier IFL"}
            date={"10-Jan-2023"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipiscing elidolor  sit nullam neques."
            }
          />
        </div>
      </div>
    </div>
  );
}
