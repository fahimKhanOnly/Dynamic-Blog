import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
            <img className='size-12' src={profile} alt='Profile'/>
        </div>
    );
};

export default Header;