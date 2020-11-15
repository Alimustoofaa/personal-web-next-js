import Navbar from '../components/navbar';
import Head from 'next/head';

export default function Contact(){
	return (
	<>
		<Head>
			<title>Contact</title>
		</Head>
		<Navbar/>
		<section className='hero'>
        <div className='container'>
          <div className='text-wrapper w-full'>
            <h1 className='tittle'> Contact</h1>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula condimentum leo. 
              Nullam vitae dolor justo. In elementum sed elit eu faucibus.
            </p>
						<ul className='contact-link'>
							<li className='contact-item'>Email : hai.alimustofa@gmail.com</li>
						</ul>
					</div>
				</div>
			</section>
	</>
	)
}