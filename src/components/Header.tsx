import Logo from '../assets/logo.svg';
import Instagram from '../assets/instagram.svg';
import Whatsapp from '../assets/whatsapp.svg';

const Header = () => {
	return (
        <header className='flex items-center justify-between max-[500px]:flex-col'>
            <div className='flex items-center max-[500px]:mb-4'>
                <img 
                    src={Logo}
                    alt="JF Construções logo"
                    className='w-12 h-12 max-[650px]:w-8 max-[650px]:h-8'
                />
                <h1 className='
                    text-xl font-semibold ml-6 
                    max-[650px]:text-lg max-[650px]:ml-4
                '>JF Construções</h1>
            </div>

            <div className='flex'>
                <div className="flex items-center hover:scale-110 transition-all duration-300">
                    <img 
                        src={Instagram}
                        alt="Instagram logo"
                        className='w-8 h-8 max-[650px]:w-6 max-[650px]:h-6'
                    />
                    <span className='font-light text-base ml-2 mr-9 max-[650px]:text-sm max-[650px]:mr-4'>_jfconstrutora_</span>
                </div>

                <div className='flex items-center hover:scale-110 transition-all duration-300'>
                    <img 
                        src={Whatsapp}
                        alt="Whatsapp logo"
                        className='w-8 h-8 max-[650px]:w-6 max-[650px]:h-6'
                    />
                    <span className='font-light text-base ml-2 max-[650px]:text-sm'>(19) 99946-3873</span>
                </div>
            </div>
        </header>
    );
}

export default Header;