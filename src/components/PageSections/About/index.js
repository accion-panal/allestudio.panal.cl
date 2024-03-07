import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
// import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/meFelipeOrias.jpg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[360px] xl:h-[360px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
              ALL ESTUDIO nace desde la demanda de confianza en Asesorías de Corretaje y Valorización de Inmuebles. Al unir mi experiencia profesional 
              y constantes capacitaciones en el ámbito inmobiliario, me motivaron a formar un servicio integral que permite una mirada más global y 
              cercana en la toma de decisiones respecto de las propiedades y el mercado inmobiliario en general.
              <br />
              <br />
              Con más de 20 años de experiencia como Arquitecto en distintas entidades públicas y privadas, revisando o diseñando proyectos, 
              y 12 años en Tasaciones Inmobiliarias. Respaldan un conocimiento que agrega valor a un servicio que busca cercanía, personalización y 
              eficiencia. 
              <br />
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              All.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundador y Gerente General de All Estudio.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
