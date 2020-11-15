import Navbar from '../components/navbar';
import Head from 'next/head';

export default function Portfolio(){
	return (
	<>
		<Head>
			<title>Portfolio</title>
		</Head>
		<Navbar/>
		<section className='hero'>
        <div className='container'>
          <div className='text-wrapper w-full'>
            <h1 className='tittle'>Portfolio</h1>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<div className='portfolio-wrapper'>
							<div className='portfolio-item'>
								<img src='portfolio/ocr-container-number.png' className='portfolio-image'></img>
								<h4 className='portfolio-name'>Portfolio Name</h4>
								<div className='portfolio-category'>Machine learning</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	</>
	)
}