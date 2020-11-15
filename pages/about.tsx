import Navbar from '../components/navbar';
import Head from 'next/head';

export default function About(){
	return (
	<>
		<Head>
			<title>About</title>
		</Head>
		<Navbar/>
		<section className='hero'>
        <div className='container'>
          <div className='text-wrapper'>
            <h1 className='tittle'> About</h1>
            <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula condimentum leo. 
              Nullam vitae dolor justo. In elementum sed elit eu faucibus.
            </p>
					</div>
				</div>
			</section>
	</>
	)
}