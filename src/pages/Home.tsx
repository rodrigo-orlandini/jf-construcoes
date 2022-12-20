import Header from '../components/Header';

import Pic1 from '../assets/pics/Pic1.jpeg';
import Pic2 from '../assets/pics/Pic2.jpeg';
import Pic3 from '../assets/pics/Pic3.jpeg';
import Pic4 from '../assets/pics/Pic4.jpeg';
import Pic5 from '../assets/pics/Pic5.jpeg';
import Pic6 from '../assets/pics/Pic6.jpeg';
import Pic7 from '../assets/pics/Pic7.jpeg';
import Pic8 from '../assets/pics/Pic8.jpeg';
import Pic9 from '../assets/pics/Pic9.jpeg';
import Pic10 from '../assets/pics/Pic10.jpeg';
import Pic11 from '../assets/pics/Pic11.jpeg';
import Pic12 from '../assets/pics/Pic12.jpeg';

const Home = () => {    

	return (
        <>
            <main className="
                w-[1200px] mx-auto mt-10
                max-[1400px]:w-[90vw] max-[700px]:text-center 
            ">
                <Header />

                <section className='mt-24 mb-14'>
                    <h2 className='text-6xl leading-[80px] max-[700px]:text-4xl'>
                        Construções do alicerce <br /> 
                        até os acabamentos.
                    </h2>

                    <p className='mt-3 text-xl font-light max-[700px]:text-lg'>
                        Em Hortolândia (SP) e região, trazemos a construção civíl de forma simplificada <br />
                        para todos nossos clientes, sempre atendendo e superando as expectativas <br />
                        quando o assunto é qualidade.
                    </p>
                </section>

                <section>
                    <h3 className='text-xl font-semibold'>
                        Veja algumas de nossas obras:
                    </h3>

                    <div className='
                        grid grid-rows-8 grid-cols-7 mt-5 gap-4
                        max-[560px]:flex max-[560px]:flex-col 
                    '>
                        <div className='row-span-1 col-span-2'>
                            <img 
                                src={Pic1}
                                className="
                                    hover:scale-[102%] w-full h-full block object-cover
                                "
                            />
                        </div>

                        <div className='row-span-1 col-span-2'>
                            <img 
                                src={Pic2}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-3'>
                            <img 
                                src={Pic3}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-1'>
                            <img 
                                src={Pic5}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-3'>
                            <img 
                                src={Pic4}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-3'>
                            <img 
                                src={Pic6}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-4'>
                            <img 
                                src={Pic7}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-1 col-span-1'>
                            <img 
                                src={Pic8}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-1 col-span-2'>
                            <img 
                                src={Pic9}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-2 col-span-3'>
                            <img 
                                src={Pic10}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-1 col-span-4'>
                            <img 
                                src={Pic11}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>

                        <div className='row-span-1 col-span-4'>
                            <img 
                                src={Pic12}
                                className="hover:scale-[102%] w-full h-full block object-cover"
                            />
                        </div>
                    </div>
                </section>
            </main>
            
            <footer className='
                bg-gray-800 text-white text-xl pb-20 -mt-[260vh]
                max-[1080px]:-mt-[220vh]
                max-[900px]:-mt-[190vh]
                max-[770px]:-mt-[160vh]
                max-[650px]:-mt-[140vh]
            '>
                <div className='w-[90vw] mx-auto max-[700px]:text-lg'>
                    <p className='
                        font-light pt-[270vh] mb-10
                        max-[1080px]:pt-[230vh]
                        max-[900px]:pt-[200vh]
                        max-[770px]:pt-[170vh]
                        max-[650px]:pt-[150vh]
                    '>
                        Entre em contato conosco pelo Whatsapp ou Instagram e faça um orçamento para sua obra.
                    </p>
                    <h3>JF Construções, construindo sua felicidade.</h3>
                </div>
            </footer>
        </>
    );
}

export default Home;