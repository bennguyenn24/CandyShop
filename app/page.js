import Image from 'next/image'

const products = [{
  id: 1,
  name: 'Gummy Bear',
  price: 3.99,
  Image: '/bears.jpg'
}, {
  id: 2,
  name: 'Gummy Worms',
  price: 3.99,
  Image: '/gummies.jpg'
}
]
const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <div className='text-4xl text-black font-semibold p-4 text-center'>
        <h1>Candy Shop</h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {products.map((product) => (
          <div key={product.id} className='m-4 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300'>
            <h1 className='font-bold text-2xl mb-2'>{product.name}</h1>
            <Image src={product.Image} alt={product.name} width={300} height={300} />
            <p className='mt-5'>Price: ${product.price}</p>
            <div className='mt-4'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
