import Header from '../components/Header';
import Head from '../components/Head';

const index = () => {
  return (
    <>
      <Head />

      <Header />

      
        {/*Main Hero Content*/}
        <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Krisullis</span>{' '}
            <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block tails-preview">
              You Belong Here
            </span>
          </h1>
          <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
            loren ipsum
          </div>
          <div className="flex flex-col items-center mt-12 text-center">
            <span className="relative inline-flex w-full md:w-auto">
              <a
                href="#_"
                type="button"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Purchase Now
              </a>
              <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">
                $$$$
              </span>
            </span>
            <a href="#_" className="mt-3 text-sm text-indigo-500">
              Learn More
            </a>
          </div>
        </div>
        {/*End Main Hero Content*/}
      
    </>
  )
}

export default index
