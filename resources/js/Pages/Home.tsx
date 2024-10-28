import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/PageLayout';
import Header from '@/Components/Header';
import Cliente, {Parceiros} from '@/Components/Carrosel';
import Card from '@/Components/Card';
import UpLevel from '@/Components/UpLevel';
import Depoimentos from '@/Components/depoimentos';
import Icone from '@/Components/icones';
import FormNewsLatter from '@/Components/form';
import Footer from '@/Components/footer';
export default function Home() {
    return (
        <>
            <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <title>Raiztec</title>
                <meta name="description" content="Na Raiztec, realizamos uma gestão estratégica do T.I. da sua empresa, avaliando cada equipamento e software utilizado pelos seus colaboradores. Com foco em eficiência, identificamos pontos de melhoria e propomos soluções que otimizam o desempenho do seu negócio." />
            </Head>
            <Layout>
                <Header />
                <Cliente />  
                <div className='space-y-6 w-9/12 mx-auto' id='Servicos'>
                    <p className='font-semibold text-center lg:text-xl'>Oferecemos serviços de T.I. de alta confiabilidade com ética e profissionalismo, superando expectativas e impulsionando o crescimento de empresas</p>
                    <div className='flex lg:flex-row flex-col items-center lg:gap-20 gap-10'>
                        <Card color='main'>
                            <div>
                                <Icone.wifi />
                            </div>
                            <div>
                                <h1 className='text-2xl font-extrabold'>Conexão</h1>
                            </div>
                            <div>
                                <p className='text-sm text-center'>Solução de problemas relacionados ao Wi-Fi e à conexão de internet da empresa. </p>
                            </div>
                        </Card>
                        <Card color='secondary'>
                            <div>
                                <Icone.speed />
                            </div>
                            <div>
                                <h1 className='text-2xl font-extrabold'>Velocidade</h1>
                            </div>
                            <div>
                                <p className='text-sm text-center'>Otimização do desempenho dos computadores para melhorar a produtividade dos colaboradores.</p>
                            </div>
                        </Card>
                        <Card color='main'>
                            <div>
                                <Icone.cloudUpload />
                            </div>
                            <div>
                                <h1 className='text-2xl font-extrabold'>Backup</h1>
                            </div>
                            <div>
                                <p className='text-sm text-center'>Proteção contra a perda de arquivos e informações valiosas. </p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className='lg:space-y-6 space-y-4 w-3/4 mx-auto lg:w-full'>
                    <div>
                        <h1 className='text-primary text-4xl font-bold'>Nossa Metodologia </h1>
                    </div>
                    <div className='flex justify-center items-center lg:flex-row flex-col-reverse gap-10'>
                        <div className='font-semibold space-y-4'>
                            <p>Na Raiztec, realizamos uma <span className='text-primary'>gestão estratégica do T.I. da sua empresa</span>, avaliando cada equipamento e software utilizado pelos seus colaboradores. Com foco em eficiência, identificamos pontos de melhoria e propomos soluções que otimizam o desempenho do seu negócio.</p>
                            <p>Nossa abordagem inclui <span className='text-primary'> manutenção preventiva e sugestões contínuas de aprimoramento</span>. Antecipamos e minimizamos problemas antes que eles afetem sua operação, garantindo um ambiente tecnológico estável e produtivo.</p>
                            <p>Trabalhamos sempre com <span className='text-primary'> transparência, ética e compromisso </span>, cumprindo o que foi acordado. Com um olhar atento ao custo-benefício, entregamos <span className='text-primary'>soluções de alta qualidade</span> que agregam valor e trazem resultados efetivos para a sua empresa.</p>
                        </div>
                        <div>
                            <img src="./image/marvin-meyer-SYTO3xs06fU-unsplash.jpg" width={1000} alt="" />
                        </div>
                    </div> 
                </div>

                <div className=' space-y-8'>
                    <h1 className='text-center font-extrabold lg:text-4xl text-2xl w-3/4 mx-auto'>Como levaremos sua TI a um <span className='text-primary'>novo patamar</span></h1>
                    <UpLevel />
                </div>

                <Parceiros />  

                <Depoimentos/>

                <FormNewsLatter />

            </Layout>

            <Footer />
        </>
    );
}
